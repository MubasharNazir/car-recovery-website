# Fix "Missing or insufficient permissions" Error

## Problem
You're getting: `FirebaseError: Missing or insufficient permissions`

This means Firestore security rules are blocking the lead creation.

## Solution: Update Firestore Security Rules

### Step 1: Go to Firebase Console
1. Open: https://console.firebase.google.com
2. Select project: **car-recovery-4ade0**
3. Click **"Firestore Database"** in left menu

### Step 2: Open Rules Tab
1. Click on **"Rules"** tab (at the top)
2. You'll see the current rules

### Step 3: Replace Rules
Copy and paste these rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow anyone to create leads (for public contact form)
    match /leads/{leadId} {
      allow create: if true;  // Public can create leads
      allow read, update, delete: if request.auth != null;  // Only logged-in admins
    }
    
    // Providers - anyone can read, only authenticated can write
    match /providers/{providerId} {
      allow read: if true;  // Public can read provider info
      allow write: if request.auth != null;  // Only admins can modify
    }
  }
}
```

### Step 4: Publish Rules
1. Click **"Publish"** button (top right)
2. Wait for confirmation: "Rules published successfully"

### Step 5: Test Again
1. Go to your contact form: `http://localhost:3000/contact`
2. Fill out and submit the form
3. **It should work now!** ✅

---

## What These Rules Do

- **Leads Collection:**
  - ✅ Anyone can CREATE leads (public contact form)
  - ✅ Only authenticated admins can READ/UPDATE/DELETE leads

- **Providers Collection:**
  - ✅ Anyone can READ provider info
  - ✅ Only authenticated admins can WRITE (add/edit providers)

---

## Alternative: If Rules Don't Work

If you're still getting errors after updating rules:

1. **Check Rules Syntax:**
   - Make sure there are no typos
   - Make sure you clicked "Publish"

2. **Check Firestore Mode:**
   - If in "test mode", it should allow all reads/writes for 30 days
   - But it's better to use proper rules

3. **Clear Browser Cache:**
   - Sometimes rules take a moment to propagate
   - Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

4. **Check Browser Console:**
   - Look for any other error messages
   - Check network tab for failed requests

---

## Quick Checklist

- [ ] Opened Firebase Console
- [ ] Went to Firestore → Rules tab
- [ ] Replaced rules with the code above
- [ ] Clicked "Publish"
- [ ] Saw "Rules published successfully"
- [ ] Tried contact form again
- [ ] Checked browser console (no more permission errors)

---

## Security Note

These rules allow:
- ✅ Public to create leads (needed for contact form)
- ✅ Only admins to view/manage leads (secure)
- ✅ Public to view providers (for assignment logic)
- ✅ Only admins to modify providers (secure)

This is the correct setup for your use case!
