import { getAvailableProviders, updateProviderLoad, updateLeadStatus, getProvider, getLead } from './firestore';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from './firebase';
import { notifyProvider } from './notifications';

export async function assignLeadToProvider(leadId: string, serviceType: string) {
  try {
    // Get available providers for this service
    const providers = await getAvailableProviders(serviceType);
    
    if (providers.length === 0) {
      // No available providers
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
    await updateProviderLoad(selectedProvider.id, 1);
    
    // Update lead with assigned provider
    await updateLeadStatus(
      leadId, 
      'assigned', 
      selectedProvider.id,
      selectedProvider.name
    );

    // Get lead details for notification
    const lead = await getLead(leadId);
    
    // Automatically send WhatsApp notification to provider
    if (lead) {
      const notification = await notifyProvider({
        providerPhone: selectedProvider.phone,
        providerName: selectedProvider.name,
        leadId: leadId,
        customerName: lead.customerName as string,
        customerPhone: lead.customerPhone as string,
        serviceType: lead.serviceType as string,
        location: (lead.location as string) || 'Abu Dhabi'
      });

      // Store WhatsApp link in Firestore for reference
      if (notification.link) {
        await updateDoc(doc(db, 'leads', leadId), {
          whatsappLink: notification.link,
          whatsappSentAt: new Date().toISOString()
        });
      }

      // Try to send automatically via API if configured
      if (notification.method === 'api') {
        console.log(`✅ WhatsApp automatically sent to ${selectedProvider.name}`);
      } else if (notification.link) {
        // If API not available, log the link for manual sending or use a service
        console.log(`📱 WhatsApp link created: ${notification.link}`);
        console.log(`💡 To send automatically, set up WhatsApp Business API`);
      }
    }
    
    return {
      providerId: selectedProvider.id,
      providerName: selectedProvider.name,
      providerPhone: selectedProvider.phone
    };
  } catch (error) {
    console.error('Error assigning lead:', error);
    return null;
  }
}

export async function completeLead(leadId: string) {
  try {
    const lead = await getLead(leadId);
    if (!lead || !lead.assignedProviderId) return;
    
    // Update lead status
    await updateLeadStatus(leadId, 'completed');
    
    // Decrease provider load
    await updateProviderLoad(lead.assignedProviderId as string, -1);
    
    // Update provider stats
    const provider = await getProvider(lead.assignedProviderId as string);
    if (provider) {
      const providerRef = doc(db, 'providers', lead.assignedProviderId as string);
      await updateDoc(providerRef, {
        completedLeads: ((provider.completedLeads as number) || 0) + 1,
        totalLeads: ((provider.totalLeads as number) || 0) + 1
      });
    }
  } catch (error) {
    console.error('Error completing lead:', error);
  }
}
