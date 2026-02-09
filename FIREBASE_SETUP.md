# Firebase Setup Guide

## Step 1: Install Firebase Package

Run this command in your terminal:
```bash
npm install firebase
```

## Step 2: Set Up Firestore Database

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project: `car-recovery-4ade0`
3. Click **"Firestore Database"** in the left menu
4. Click **"Create database"**
5. Choose location: **`europe-west1 (Belgium)`** ✅
6. Choose mode: **"Start in test mode"** (for now)
7. Click **"Enable"**

## Step 3: Enable Authentication

1. In Firebase Console, click **"Authentication"**
2. Click **"Get started"**
3. Click on **"Email/Password"**
4. Enable it and click **"Save"**
5. Create your admin account:
   - Click **"Add user"**
   - Enter your email and password
   - This will be your admin login

## Step 4: Create Collections

### Collection 1: `providers`

1. In Firestore, click **"Start collection"**
2. Collection ID: `providers`
3. Create documents for each of your 10 providers:

**Document Structure:**
- Document ID: `provider_1`, `provider_2`, etc. (or auto-generated)
- Fields:
  ```
  name: "Provider Name" (String)
  phone: "+971501234567" (String)
  email: "provider@example.com" (String, optional)
  serviceTypes: ["towing", "recovery"] (Array)
  currentLoad: 0 (Number)
  maxCapacity: 5 (Number)
  isActive: true (Boolean)
  rating: 0 (Number)
  totalLeads: 0 (Number)
  completedLeads: 0 (Number)
  ```

**Example Provider Document:**
```
Document ID: provider_1
Fields:
  name: "Ahmed Al Mansoori"
  phone: "+971 50 111 1111"
  email: "ahmed@provider.com"
  serviceTypes: ["towing", "recovery"]
  currentLoad: 0
  maxCapacity: 5
  isActive: true
  rating: 0
  totalLeads: 0
  completedLeads: 0
```

Repeat for all 10 providers.

### Collection 2: `leads`

This collection will be created automatically when leads are submitted. No manual setup needed.

## Step 5: Set Up Security Rules (Important!)

1. In Firestore, go to **"Rules"** tab
2. Replace with these rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Leads - authenticated users can read/write
    match /leads/{leadId} {
      allow read, write: if request.auth != null;
    }
    
    // Providers - anyone can read, only authenticated can write
    match /providers/{providerId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

3. Click **"Publish"**

## Step 6: Test the System

1. Run your development server:
   ```bash
   npm run dev
   ```

2. Test the contact form:
   - Go to `/contact`
   - Submit a test lead
   - Check Firestore to see if lead was created

3. Test admin dashboard:
   - Go to `/admin/login`
   - Login with your admin credentials
   - You should see the dashboard

4. Test quick entry:
   - Go to `/admin/quick-entry`
   - Create a test lead from phone call
   - Check if provider was auto-assigned

## Service Types

Make sure your providers have these service types in their `serviceTypes` array:
- `towing`
- `recovery`
- `roadside`
- `flat-tire`
- `battery`
- `other`

## Troubleshooting

### "Permission denied" error
- Make sure you've set up Firestore security rules
- Make sure you're logged in as admin

### "No available providers" error
- Check that providers have `isActive: true`
- Check that providers have the correct `serviceTypes`
- Check that `currentLoad < maxCapacity`

### Leads not appearing
- Check browser console for errors
- Verify Firestore connection in Firebase Console
- Make sure collections exist

## Next Steps

1. Add your 10 providers to Firestore
2. Create admin account in Authentication
3. Test the system with real leads
4. Set up provider notifications (WhatsApp/SMS) - optional

## Support

If you encounter any issues:
1. Check browser console for errors
2. Check Firebase Console for database activity
3. Verify all collections and fields are set up correctly
