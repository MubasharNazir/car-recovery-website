# Automatic WhatsApp Sending - Setup Guide

## 🎯 Goal

Automatically send WhatsApp messages to service providers when they are assigned to a job, with all lead details included.

---

## ✅ Current Status

**Automatic WhatsApp sending is now integrated!** The system will:

1. ✅ Automatically create WhatsApp message when provider is assigned
2. ✅ Include all lead details (customer name, phone, service, location)
3. ✅ Try to send automatically via API (if configured)
4. ✅ Store WhatsApp link in Firestore for reference

---

## 🚀 How It Works

### Automatic Flow:
```
Lead Created → Provider Assigned → WhatsApp Message Created → Automatically Sent
```

### Message Includes:
- ✅ Lead ID
- ✅ Customer Name
- ✅ Customer Phone
- ✅ Service Type
- ✅ Location
- ✅ Instructions

---

## 📱 Method 1: WhatsApp Business API (Recommended - Fully Automatic)

### Setup Steps:

1. **Register WhatsApp Business API:**
   - Go to https://business.facebook.com
   - Create Meta Business account
   - Apply for WhatsApp Business API access
   - Get approved (may take a few days)

2. **Get API Credentials:**
   - Phone Number ID
   - Access Token
   - API URL: `https://graph.facebook.com/v18.0`

3. **Add Environment Variables:**
   Create `.env.local` file in your project root:
   ```env
   NEXT_PUBLIC_USE_WHATSAPP_API=true
   NEXT_PUBLIC_WHATSAPP_API_URL=https://graph.facebook.com/v18.0
   NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER_ID=your_phone_number_id
   NEXT_PUBLIC_WHATSAPP_ACCESS_TOKEN=your_access_token
   ```

4. **Restart Your Server:**
   ```bash
   npm run dev
   ```

5. **Test:**
   - Create a lead
   - Provider gets assigned
   - WhatsApp message automatically sent! ✅

**Result:** Messages send automatically, no manual steps needed!

---

## 📱 Method 2: Twilio WhatsApp (Alternative)

Twilio also supports WhatsApp messaging:

1. **Create Twilio Account:**
   - Go to https://www.twilio.com
   - Sign up for account
   - Get WhatsApp-enabled number

2. **Add Environment Variables:**
   ```env
   TWILIO_ACCOUNT_SID=your_account_sid
   TWILIO_AUTH_TOKEN=your_auth_token
   TWILIO_WHATSAPP_NUMBER=whatsapp:+14155238886
   ```

3. **Enable in Code:**
   The system will automatically use Twilio if credentials are set.

---

## 📱 Method 3: WhatsApp Link (Current - Works Now)

If API is not configured, the system creates WhatsApp links:

- ✅ Link is created automatically
- ✅ Stored in Firestore
- ✅ Can be sent manually or via service
- ⚠️ Requires manual click or integration

**To use:** The link is stored in the lead document and can be accessed from the dashboard.

---

## 🔄 Automatic Sending Process

### When Lead is Assigned:

1. **System finds provider** → Auto-assigns
2. **Creates WhatsApp message** with all details:
   ```
   🚗 *New Lead Assigned!*
   
   *Lead ID:* #abc12345
   *Customer Name:* Ahmed Ali
   *Customer Phone:* +971 50 123 4567
   *Service Type:* Vehicle Towing
   *Location:* Abu Dhabi City
   
   ⏰ *Please contact customer within 5 minutes.*
   
   📞 Call customer directly to confirm and proceed with the service.
   ```

3. **Tries to send automatically:**
   - First: WhatsApp Business API (if configured)
   - Second: Twilio (if configured)
   - Fallback: Creates link (stored in Firestore)

4. **Stores result in Firestore:**
   - WhatsApp link saved with lead
   - Timestamp of when message was created

---

## 📋 WhatsApp Message Details

### Included Information:
- ✅ **Lead ID** - Unique identifier
- ✅ **Customer Name** - Full name
- ✅ **Customer Phone** - Contact number
- ✅ **Service Type** - What service is needed
- ✅ **Location** - Where service is needed
- ✅ **Instructions** - Contact within 5 minutes

### Message Format:
```
🚗 *New Lead Assigned!*

*Lead ID:* #abc12345
*Customer Name:* [Name]
*Customer Phone:* [Phone]
*Service Type:* [Service]
*Location:* [Location]

⏰ *Please contact customer within 5 minutes.*
📞 Call customer directly to confirm and proceed.
```

---

## 🎯 Quick Setup

### For Automatic Sending (WhatsApp Business API):

1. Get API credentials from Meta
2. Add to `.env.local`:
   ```env
   NEXT_PUBLIC_USE_WHATSAPP_API=true
   NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER_ID=xxx
   NEXT_PUBLIC_WHATSAPP_ACCESS_TOKEN=xxx
   ```
3. Restart server
4. Done! Messages send automatically ✅

### For Link Method (Current):

1. No setup needed
2. Links are created automatically
3. Stored in Firestore
4. Can be accessed from dashboard

---

## 🔍 Check if Messages are Sending

### In Browser Console:
When a lead is assigned, check console for:
- ✅ `WhatsApp automatically sent to [Provider]` - API working
- 📱 `WhatsApp link created` - Link method (API not configured)

### In Firestore:
Check the lead document:
- `whatsappLink` field - Contains the WhatsApp link
- `whatsappSentAt` field - Timestamp when link was created

---

## 💡 Current Implementation

**What's Working:**
- ✅ Automatic message creation on assignment
- ✅ All lead details included
- ✅ WhatsApp link stored in Firestore
- ✅ Ready for API integration

**To Enable Automatic Sending:**
- Set up WhatsApp Business API
- Add credentials to `.env.local`
- Messages will send automatically!

---

## 📊 Testing

### Test Automatic Sending:

1. **Create a lead** (via contact form or quick entry)
2. **Check browser console** for WhatsApp messages
3. **Check Firestore** - lead should have `whatsappLink` field
4. **If API configured** - Provider receives message automatically
5. **If API not configured** - Link is created and stored

---

## 🎉 Summary

**Automatic WhatsApp sending is ready!**

- ✅ Messages created automatically
- ✅ All details included
- ✅ Ready for API setup
- ✅ Works with links now
- ✅ Upgrades to API automatically when configured

**Next Step:** Set up WhatsApp Business API for fully automatic sending!
