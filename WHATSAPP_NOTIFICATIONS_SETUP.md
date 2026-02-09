# WhatsApp Notifications to Providers - Setup Guide

## ✅ Current Status

WhatsApp notifications are **already integrated** and working! When a lead is assigned to a provider, the system automatically creates a WhatsApp link with the lead details.

---

## 🚀 How It Works Now

### Automatic WhatsApp Link Creation

When a lead is assigned:
1. System creates WhatsApp link with pre-filled message
2. Link includes all lead details
3. Provider can click link to open WhatsApp
4. Message is pre-filled and ready to send

**Example WhatsApp Message:**
```
🚗 *New Lead Assigned!*

*Lead ID:* #abc12345
*Customer:* Ahmed Ali
*Phone:* +971 50 123 4567
*Service:* towing
*Location:* Abu Dhabi City

⏰ Please contact customer within 5 minutes.
```

---

## 📱 Method 1: WhatsApp Link (Current - Works Immediately)

**Status:** ✅ Already Working

**How it works:**
- Creates WhatsApp link: `https://wa.me/PHONE?text=MESSAGE`
- Link is logged in console
- Can be opened or sent to provider

**No setup needed!** This works immediately.

---

## 🔧 Method 2: WhatsApp Business API (Advanced - Automatic Sending)

For **automatic sending** (no manual click needed):

### Setup Steps:

1. **Register WhatsApp Business API:**
   - Go to https://business.facebook.com
   - Create Meta Business account
   - Apply for WhatsApp Business API access

2. **Get API Credentials:**
   - Phone Number ID
   - Access Token
   - API URL (usually: `https://graph.facebook.com/v18.0`)

3. **Add Environment Variables:**
   Create `.env.local` file:
   ```env
   NEXT_PUBLIC_USE_WHATSAPP_API=true
   NEXT_PUBLIC_WHATSAPP_API_URL=https://graph.facebook.com/v18.0
   NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER_ID=your_phone_number_id
   NEXT_PUBLIC_WHATSAPP_ACCESS_TOKEN=your_access_token
   ```

4. **Enable API Mode:**
   - The system will automatically use API if credentials are set
   - Messages will be sent automatically
   - No manual click needed

---

## 🎯 Current Implementation

### What Happens When Lead is Assigned:

1. **Lead Created** → Auto-assigned to provider
2. **Notification Function Called** → Creates WhatsApp message
3. **WhatsApp Link Generated** → Ready to use
4. **Logged to Console** → For debugging

### WhatsApp Link Format:
```
https://wa.me/971501111111?text=🚗%20New%20Lead%20Assigned!...
```

---

## 📋 Integration Options

### Option A: Use WhatsApp Links (Current)
- ✅ Works immediately
- ✅ No setup needed
- ✅ No costs
- ⚠️ Requires manual click or integration

### Option B: WhatsApp Business API
- ✅ Automatic sending
- ✅ No manual steps
- ✅ Professional
- ⚠️ Requires API setup
- ⚠️ Monthly costs

### Option C: Hybrid Approach
- Use links for now
- Upgrade to API later
- Same code, just enable API

---

## 🔄 How to Use WhatsApp Links

### Method 1: Open Link Programmatically

In your admin dashboard or notification system:

```typescript
// When lead is assigned
const whatsappLink = await notifyProvider(data);

// Open WhatsApp link
window.open(whatsappLink.link, '_blank');
```

### Method 2: Store Link in Firestore

Store the WhatsApp link with the lead:

```typescript
// In leadAssignment.ts
const notification = await notifyProvider(data);
if (notification.link) {
  // Store link in Firestore for provider to access
  await updateDoc(doc(db, 'leads', leadId), {
    whatsappLink: notification.link
  });
}
```

### Method 3: Send Link via Email/SMS

Send the WhatsApp link to provider via:
- Email
- SMS
- Dashboard notification

---

## 🎨 Display WhatsApp Link in Dashboard

You can add a "Send WhatsApp" button in the admin dashboard that:
1. Creates WhatsApp link
2. Opens it automatically
3. Or copies to clipboard

---

## 📱 WhatsApp Message Template

Current message format:
```
🚗 *New Lead Assigned!*

*Lead ID:* #abc12345
*Customer:* [Name]
*Phone:* [Phone]
*Service:* [Service Type]
*Location:* [Location]

⏰ Please contact customer within 5 minutes.
```

You can customize this in `lib/notifications.ts`.

---

## 🚀 Quick Start

### To Use WhatsApp Links Now:

1. **Already Working!** ✅
2. Check browser console when lead is assigned
3. You'll see WhatsApp link logged
4. Use the link to send message

### To Enable WhatsApp Business API:

1. Get API credentials from Meta
2. Add to `.env.local`
3. Set `USE_WHATSAPP_API=true`
4. Messages will send automatically

---

## 💡 Example Usage

### In Admin Dashboard:

Add a button to send WhatsApp:

```typescript
const handleSendWhatsApp = async (lead: any, provider: any) => {
  const link = createWhatsAppLink(
    provider.phone,
    `New lead assigned: ${lead.customerName} - ${lead.serviceType}`
  );
  window.open(link, '_blank');
};
```

### Automatic on Assignment:

Already implemented! When lead is assigned:
- WhatsApp link is created automatically
- Logged to console
- Ready to use

---

## 📊 Summary

**Current Status:**
- ✅ WhatsApp link creation: Working
- ✅ Automatic on lead assignment: Working
- ✅ Message formatting: Working
- ⚠️ Automatic sending: Requires API setup

**Next Steps:**
1. Use WhatsApp links (works now)
2. Or set up WhatsApp Business API for automatic sending
3. Or integrate link into your workflow

---

## 🔗 Files Modified

- `lib/notifications.ts` - WhatsApp notification function
- `lib/whatsappSender.ts` - WhatsApp sending utilities
- `lib/leadAssignment.ts` - Already calls notifyProvider
- `app/api/whatsapp/route.ts` - API endpoint (optional)

Everything is ready! WhatsApp notifications are working. 🎉
