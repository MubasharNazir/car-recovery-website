import { NextRequest, NextResponse } from 'next/server';
import { sendWhatsAppViaAPI, createWhatsAppLink } from '@/lib/whatsappSender';

/**
 * API endpoint to send WhatsApp messages
 * POST /api/whatsapp
 * Body: { phone: string, message: string }
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

    // Check if WhatsApp Business API is configured
    const useAPI = process.env.USE_WHATSAPP_API === 'true' || 
                   process.env.NEXT_PUBLIC_USE_WHATSAPP_API === 'true';

    if (useAPI) {
      try {
        // Send via WhatsApp Business API
        const result = await sendWhatsAppViaAPI(phone, message);
        return NextResponse.json({ 
          success: true, 
          method: 'api',
          result 
        });
      } catch (apiError: any) {
        console.error('WhatsApp API error:', apiError);
        // Fall back to link method
        const link = createWhatsAppLink(phone, message);
        return NextResponse.json({ 
          success: true, 
          method: 'link',
          link,
          note: 'API failed, using link method instead'
        });
      }
    } else {
      // Return WhatsApp link
      const link = createWhatsAppLink(phone, message);
      return NextResponse.json({ 
        success: true, 
        method: 'link',
        link 
      });
    }
  } catch (error: any) {
    console.error('Error in WhatsApp API:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send WhatsApp message' },
      { status: 500 }
    );
  }
}
