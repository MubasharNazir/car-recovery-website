/**
 * Automatic WhatsApp Sender
 * Sends WhatsApp messages automatically when providers are assigned
 * 
 * Options:
 * 1. WhatsApp Business API (Automatic - Requires Setup)
 * 2. WhatsApp Web API (Alternative)
 * 3. Store link and send via service
 */

import { createWhatsAppLink, sendWhatsAppViaAPI } from './whatsappSender';

export interface AutoSendOptions {
  providerPhone: string;
  message: string;
  leadId: string;
}

/**
 * Automatically send WhatsApp message to provider
 * Tries API first, falls back to link method
 */
export async function autoSendWhatsApp(options: AutoSendOptions): Promise<{
  success: boolean;
  method: 'api' | 'link' | 'none';
  link?: string;
  error?: string;
}> {
  const { providerPhone, message, leadId } = options;

  try {
    // Check if WhatsApp Business API is enabled
    const useAPI = process.env.NEXT_PUBLIC_USE_WHATSAPP_API === 'true' || 
                   process.env.USE_WHATSAPP_API === 'true';

    if (useAPI) {
      try {
        // Method 1: Send via WhatsApp Business API (Automatic)
        await sendWhatsAppViaAPI(providerPhone, message);
        console.log(`✅ WhatsApp automatically sent to ${providerPhone} for lead ${leadId}`);
        return { success: true, method: 'api' };
      } catch (apiError: any) {
        console.error('WhatsApp API failed:', apiError);
        // Fall back to link method
        const link = createWhatsAppLink(providerPhone, message);
        return { 
          success: true, 
          method: 'link',
          link,
          error: 'API failed, using link method'
        };
      }
    }

    // Method 2: Create WhatsApp link (for manual sending or service integration)
    const link = createWhatsAppLink(providerPhone, message);
    console.log(`📱 WhatsApp link created for ${providerPhone}: ${link}`);
    
    // Option: Send link via API endpoint to trigger sending
    // This can be used with services that can send WhatsApp messages
    try {
      const response = await fetch('/api/whatsapp/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: providerPhone, message })
      });
      
      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          return { success: true, method: 'api', link };
        }
      }
    } catch (error) {
      // API endpoint not available or failed, continue with link method
      console.log('WhatsApp send API not available, using link method');
    }

    return { 
      success: true, 
      method: 'link',
      link 
    };
  } catch (error: any) {
    console.error('Error in autoSendWhatsApp:', error);
    return { 
      success: false, 
      method: 'none',
      error: error.message 
    };
  }
}

/**
 * Send WhatsApp via external service (e.g., Twilio, MessageBird, etc.)
 * This is an alternative to WhatsApp Business API
 */
export async function sendViaWhatsAppService(
  phone: string,
  message: string,
  service: 'twilio' | 'messagebird' | 'vonage' = 'twilio'
): Promise<boolean> {
  try {
    // Example: Twilio WhatsApp integration
    if (service === 'twilio') {
      const accountSid = process.env.TWILIO_ACCOUNT_SID;
      const authToken = process.env.TWILIO_AUTH_TOKEN;
      const fromNumber = process.env.TWILIO_WHATSAPP_NUMBER;

      if (!accountSid || !authToken || !fromNumber) {
        throw new Error('Twilio credentials not configured');
      }

      const response = await fetch(
        `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Basic ${btoa(`${accountSid}:${authToken}`)}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            From: `whatsapp:${fromNumber}`,
            To: `whatsapp:${phone}`,
            Body: message,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Twilio API error: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('✅ WhatsApp sent via Twilio:', result);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error sending via ${service}:`, error);
    return false;
  }
}
