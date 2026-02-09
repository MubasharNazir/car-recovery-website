// Provider notification functions
// You can integrate with WhatsApp Business API, Twilio, or email services

import { sendWhatsAppMessage, sendWhatsAppViaAPI } from './whatsappSender';
import { autoSendWhatsApp } from './autoWhatsAppSender';

export interface NotificationData {
  providerPhone: string;
  providerName: string;
  leadId: string;
  customerName: string;
  customerPhone: string;
  serviceType: string;
  location: string;
}

/**
 * Send WhatsApp notification to provider when lead is assigned
 * 
 * Method 1: WhatsApp Direct Link (Default - Works Immediately)
 * - Creates WhatsApp link with pre-filled message
 * - No API setup needed
 * - Provider can click link to open WhatsApp
 * 
 * Method 2: WhatsApp Business API (Advanced)
 * - Automatically sends message via API
 * - Requires API credentials
 * - Set USE_WHATSAPP_API=true to enable
 */
export async function notifyProvider(data: NotificationData): Promise<{ success: boolean; method: string; link?: string }> {
  try {
    // Enhanced message with all details
    const serviceTypeFormatted = data.serviceType
      .split('-')
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    const message = `🚗 *New Lead Assigned!*\n\n` +
      `*Lead ID:* #${data.leadId.slice(0, 8)}\n` +
      `*Customer Name:* ${data.customerName}\n` +
      `*Customer Phone:* ${data.customerPhone}\n` +
      `*Service Type:* ${serviceTypeFormatted}\n` +
      `*Location:* ${data.location}\n` +
      `\n⏰ *Please contact customer within 5 minutes.*\n` +
      `\n📞 Call customer directly to confirm and proceed with the service.`;

    // Automatically send WhatsApp message
    const result = await autoSendWhatsApp({
      providerPhone: data.providerPhone,
      message: message,
      leadId: data.leadId
    });

    if (result.success && result.method === 'api') {
      console.log(`✅ WhatsApp automatically sent to ${data.providerName} (${data.providerPhone})`);
      return { success: true, method: 'api' };
    }

    if (result.link) {
      console.log(`📱 WhatsApp link created for ${data.providerName} (${data.providerPhone})`);
      console.log(`🔗 Link: ${result.link}`);
      return { 
        success: true, 
        method: 'link',
        link: result.link 
      };
    }

    return { success: false, method: 'none' };
  } catch (error) {
    console.error('Error sending WhatsApp notification:', error);
    return { success: false, method: 'none' };
  }
}

/**
 * Send WhatsApp using WhatsApp Business API (Advanced)
 * Requires: WhatsApp Business API credentials
 * Uncomment and configure when ready
 */
/*
async function sendWhatsAppAPI(phone: string, message: string) {
  const WHATSAPP_API_URL = process.env.WHATSAPP_API_URL || 'https://graph.facebook.com/v18.0';
  const PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const ACCESS_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN;

  if (!PHONE_NUMBER_ID || !ACCESS_TOKEN) {
    throw new Error('WhatsApp API credentials not configured');
  }

  // Clean phone number
  const cleanPhone = phone.replace(/[\s\-+]/g, '');

  try {
    const response = await fetch(`${WHATSAPP_API_URL}/${PHONE_NUMBER_ID}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: cleanPhone,
        type: 'text',
        text: {
          body: message
        }
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`WhatsApp API error: ${JSON.stringify(error)}`);
    }

    const result = await response.json();
    console.log('WhatsApp message sent:', result);
    return result;
  } catch (error) {
    console.error('Error sending WhatsApp via API:', error);
    throw error;
  }
}
*/

/**
 * Example: WhatsApp Business API integration
 * Uncomment and configure when ready
 */
/*
async function sendWhatsApp(phone: string, message: string) {
  const response = await fetch('https://api.whatsapp.com/v1/messages', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.WHATSAPP_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      to: phone,
      message: message,
    }),
  });
  return response.json();
}
*/

/**
 * Example: Twilio SMS integration
 * Uncomment and configure when ready
 */
/*
import twilio from 'twilio';

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

async function sendSMS(phone: string, message: string) {
  return await client.messages.create({
    body: message,
    from: process.env.TWILIO_PHONE_NUMBER,
    to: phone,
  });
}
*/
