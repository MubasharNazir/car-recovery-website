import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

// Automatic lead assignment when new lead is created
export const autoAssignLead = functions.firestore
  .document('leads/{leadId}')
  .onCreate(async (snap, context) => {
    const lead = snap.data();
    const leadId = context.params.leadId;

    // Only auto-assign if status is pending
    if (lead.status !== 'pending') {
      return null;
    }

    try {
      // Get available providers for this service
      const providersSnapshot = await admin.firestore()
        .collection('providers')
        .where('isActive', '==', true)
        .where('serviceTypes', 'array-contains', lead.serviceType)
        .get();

      if (providersSnapshot.empty) {
        console.log(`No available providers for service: ${lead.serviceType}`);
        return null;
      }

      // Convert to array and filter by capacity
      const providers = providersSnapshot.docs
        .map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        .filter((p: any) => (p.currentLoad || 0) < (p.maxCapacity || 5));

      if (providers.length === 0) {
        console.log('All providers are at full capacity');
        return null;
      }

      // Sort by current load (least busy first)
      providers.sort((a: any, b: any) => {
        const loadA = a.currentLoad || 0;
        const loadB = b.currentLoad || 0;
        return loadA - loadB;
      });

      const selectedProvider = providers[0];

      // Update provider's current load
      await admin.firestore()
        .collection('providers')
        .doc(selectedProvider.id)
        .update({
          currentLoad: admin.firestore.FieldValue.increment(1)
        });

      // Update lead with assigned provider
      await admin.firestore()
        .collection('leads')
        .doc(leadId)
        .update({
          status: 'assigned',
          assignedProviderId: selectedProvider.id,
          assignedProviderName: selectedProvider.name,
          assignedAt: admin.firestore.FieldValue.serverTimestamp()
        });

      // Send notification to provider
      await sendProviderNotification(selectedProvider, lead, leadId);

      console.log(`Lead ${leadId} assigned to provider ${selectedProvider.id}`);
      return { providerId: selectedProvider.id, providerName: selectedProvider.name };
    } catch (error) {
      console.error('Error auto-assigning lead:', error);
      return null;
    }
  });

// Automatic provider load decrease when lead is completed
export const autoUpdateProviderOnComplete = functions.firestore
  .document('leads/{leadId}')
  .onUpdate(async (change, context) => {
    const newData = change.after.data();
    const oldData = change.before.data();
    const leadId = context.params.leadId;

    // Only process if status changed to completed
    if (newData.status === 'completed' && oldData.status !== 'completed') {
      const providerId = newData.assignedProviderId;

      if (!providerId) {
        return null;
      }

      try {
        // Decrease provider load
        await admin.firestore()
          .collection('providers')
          .doc(providerId)
          .update({
            currentLoad: admin.firestore.FieldValue.increment(-1),
            completedLeads: admin.firestore.FieldValue.increment(1),
            totalLeads: admin.firestore.FieldValue.increment(1)
          });

        console.log(`Provider ${providerId} load decreased for completed lead ${leadId}`);
        return null;
      } catch (error) {
        console.error('Error updating provider on lead completion:', error);
        return null;
      }
    }

    return null;
  });

// Helper function to send provider notification
async function sendProviderNotification(
  provider: any,
  lead: any,
  leadId: string
) {
  try {
    // WhatsApp notification (using WhatsApp Business API)
    // You'll need to integrate with WhatsApp Business API or Twilio
    const message = `🚗 New Lead Assigned!\n\n` +
      `Lead ID: #${leadId.slice(0, 8)}\n` +
      `Customer: ${lead.customerName}\n` +
      `Phone: ${lead.customerPhone}\n` +
      `Service: ${lead.serviceType}\n` +
      `Location: ${lead.location || 'Abu Dhabi'}\n` +
      `\nPlease contact customer within 5 minutes.`;

    // TODO: Integrate with WhatsApp Business API or SMS service
    // Example: await sendWhatsApp(provider.phone, message);
    // Example: await sendSMS(provider.phone, message);

    console.log(`Notification sent to provider ${provider.id}: ${message}`);
    
    // For now, log the notification
    // You can integrate with:
    // - WhatsApp Business API
    // - Twilio SMS
    // - Email service
    // - Push notifications
    
    return true;
  } catch (error) {
    console.error('Error sending notification:', error);
    return false;
  }
}
