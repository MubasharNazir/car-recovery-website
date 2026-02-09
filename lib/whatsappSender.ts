/**
 * WhatsApp Sender - Sends WhatsApp messages to providers
 * This creates WhatsApp links that can be opened or sent via API
 */

export interface WhatsAppMessage {
  phone: string;
  message: string;
}

/**
 * Create WhatsApp link with pre-filled message
 * Format: https://wa.me/PHONE?text=MESSAGE
 */
export function createWhatsAppLink(phone: string, message: string): string {
  // Clean phone number (remove spaces, dashes, +)
  const cleanPhone = phone.replace(/[\s\-+]/g, '');
  
  // Encode message for URL
  const encodedMessage = encodeURIComponent(message);
  
  // Create WhatsApp link
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

/**
 * Send WhatsApp message (opens WhatsApp with pre-filled message)
 * This works immediately - no API setup needed!
 */
export async function sendWhatsAppMessage(phone: string, message: string): Promise<string> {
  const link = createWhatsAppLink(phone, message);
  
  // In browser, you can open the link
  if (typeof window !== 'undefined') {
    // Option 1: Open in new tab (uncomment if you want)
    // window.open(link, '_blank');
    
    // Option 2: Just return the link (recommended)
    // The link can be used in your UI or sent via other means
    console.log(`📱 WhatsApp link: ${link}`);
  }
  
  return link;
}

/**
 * Send WhatsApp via Business API (Advanced)
 * Requires WhatsApp Business API setup
 */
export async function sendWhatsAppViaAPI(
  phone: string, 
  message: string,
  config?: {
    apiUrl?: string;
    phoneNumberId?: string;
    accessToken?: string;
  }
): Promise<any> {
  const API_URL = config?.apiUrl || process.env.NEXT_PUBLIC_WHATSAPP_API_URL || 'https://graph.facebook.com/v18.0';
  const PHONE_NUMBER_ID = config?.phoneNumberId || process.env.NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER_ID;
  const ACCESS_TOKEN = config?.accessToken || process.env.NEXT_PUBLIC_WHATSAPP_ACCESS_TOKEN;

  if (!PHONE_NUMBER_ID || !ACCESS_TOKEN) {
    throw new Error('WhatsApp Business API credentials not configured. Please set environment variables.');
  }

  // Clean phone number
  const cleanPhone = phone.replace(/[\s\-+]/g, '');

  try {
    const response = await fetch(`${API_URL}/${PHONE_NUMBER_ID}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        recipient_type: 'individual',
        to: cleanPhone,
        type: 'text',
        text: {
          preview_url: false,
          body: message
        }
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`WhatsApp API error: ${JSON.stringify(error)}`);
    }

    const result = await response.json();
    console.log('✅ WhatsApp message sent via API:', result);
    return result;
  } catch (error) {
    console.error('❌ Error sending WhatsApp via API:', error);
    throw error;
  }
}
