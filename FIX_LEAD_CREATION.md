# Fix "Failed to create lead" Error

## Problem
You're getting: "Failed to create lead. Please try again."

This usually means there's an issue with Firestore database setup or permissions.

## Quick Fixes

### Fix 1: Create Firestore Database

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select project: **car-recovery-4ade0**
3. Click **"Firestore Database"** in left menu
4. Click **"Create database"** (if not created yet)
5. Choose location: **`europe-west1 (Belgium)`**
6. Choose mode: **"Start in test mode"** (for now)
7. Click **"Enable"**

### Fix 2: Set Up Security Rules

1. In Firestore, click **"Rules"** tab
2. Replace with these rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow reads and writes for authenticated users
    match /leads/{leadId} {
      allow read, write: if request.auth != null;
    }
    
    // Allow reads for all, writes for authenticated
    match /providers/{providerId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

3. Click **"Publish"**

**OR** if you want to allow unauthenticated writes (for contact form):

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow anyone to create leads (for contact form)
    match /leads/{leadId} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }
    
    match /providers/{providerId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

### Fix 3: Check Browser Console

1. Open browser console (F12)
2. Look for detailed error messages
3. Common errors:
   - `Permission denied` → Security rules issue
   - `Collection not found` → Firestore not created
   - `Network error` → Connection issue

### Fix 4: Verify Firestore is Created

1. Go to Firebase Console → Firestore Database
2. You should see an empty database
3. Collections will be created automatically when first lead is created

## Step-by-Step Setup

### Complete Firestore Setup:

1. **Create Database:**
   - Firebase Console → Firestore Database → Create database
   - Location: `europe-west1`
   - Mode: Test mode

2. **Set Security Rules:**
   - Rules tab → Paste rules above → Publish

3. **Test:**
   - Try submitting contact form again
   - Check Firestore → Data tab to see if lead appears

## Alternative: Check Error Details

The contact form should show more details in browser console. Check:
1. Open browser console (F12)
2. Try submitting form
3. Look for error messages
4. Share the error message for more specific help

## Common Issues

### Issue: "Permission denied"
**Solution:** Update security rules (see Fix 2 above)

### Issue: "Collection not found"
**Solution:** Firestore database not created (see Fix 1)

### Issue: "Network error"
**Solution:** 
- Check internet connection
- Check Firebase project is active
- Try refreshing page

### Issue: Form submits but no lead created
**Solution:**
- Check Firestore → Data tab
- Check browser console for errors
- Verify security rules allow writes

## Quick Test

After setting up Firestore:
1. Go to `/contact`
2. Fill out form
3. Submit
4. Check Firestore Console → Data tab
5. You should see a `leads` collection with your lead

## Need More Help?

If still not working:
1. Check browser console (F12) for exact error
2. Verify Firestore is created and active
3. Check security rules are published
4. Try creating a lead manually in Firestore to test
