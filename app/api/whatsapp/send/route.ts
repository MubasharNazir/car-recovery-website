import { NextRequest, NextResponse } from 'next/server';
import { sendWhatsAppViaAPI, createWhatsAppLink } from '@/lib/whatsappSender';
import { sendViaWhatsAppService } from '@/lib/autoWhatsAppSender';

/**
 * API endpoint to automatically send WhatsApp messages
 * POST /api/whatsapp/send
 * Body: { phone: string, message: string }
 * 
 * This endpoint tries multiple methods to send WhatsApp automatically
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { phone, message } = body;

    if (!phone || !message) {
      return NextResponse.json(
        { error: 'Phone and message are required' },
        { status: 400 }
      );
    }

    // Method 1: Try WhatsApp Business API
    const useWhatsAppAPI = process.env.NEXT_PUBLIC_USE_WHATSAPP_API === 'true' || 
                           process.env.USE_WHATSAPP_API === 'true';

    if (useWhatsAppAPI) {
      try {
        const result = await sendWhatsAppViaAPI(phone, message);
        return NextResponse.json({ 
          success: true, 
          method: 'whatsapp_api',
          result 
        });
      } catch (apiError: any) {
        console.error('WhatsApp API failed:', apiError);
        // Continue to try other methods
      }
    }

    // Method 2: Try Twilio WhatsApp (if configured)
    const useTwilio = process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN;
    if (useTwilio) {
      try {
        const sent = await sendViaWhatsAppService(phone, message, 'twilio');
        if (sent) {
          return NextResponse.json({ 
            success: true, 
            method: 'twilio',
            message: 'WhatsApp sent via Twilio'
          });
        }
      } catch (twilioError: any) {
        console.error('Twilio failed:', twilioError);
      }
    }

    // Method 3: Return WhatsApp link (fallback)
    const link = createWhatsAppLink(phone, message);
    return NextResponse.json({ 
      success: true, 
      method: 'link',
      link,
      message: 'WhatsApp link created. Configure API for automatic sending.',
      note: 'To enable automatic sending, set up WhatsApp Business API or Twilio'
    });
  } catch (error: any) {
    console.error('Error in WhatsApp send API:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send WhatsApp message' },
      { status: 500 }
    );
  }
}
