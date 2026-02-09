# Fix Admin Login Error: invalid-credential

## Problem
You're getting: `Firebase: Error (auth/invalid-credential)`

This means the admin account doesn't exist in Firebase Authentication or the password is wrong.

## Solution: Create Admin Account in Firebase Console

### Step 1: Go to Firebase Console
1. Open: https://console.firebase.google.com
2. Select your project: **car-recovery-4ade0**

### Step 2: Open Authentication
1. Click **"Authentication"** in the left menu
2. Click **"Get started"** if you see it (first time setup)

### Step 3: Enable Email/Password
1. Click on **"Sign-in method"** tab (at the top)
2. Find **"Email/Password"** in the list
3. Click on it
4. Toggle **"Enable"** to ON
5. Click **"Save"**

### Step 4: Create Admin User
1. Click on **"Users"** tab (at the top)
2. Click **"Add user"** button (top right)
3. Enter:
   - **Email:** `admin@uaecarrecovery.ae`
   - **Password:** Enter a secure password (e.g., `Admin123!`)
   - **Confirm password:** Enter same password
4. Click **"Add user"**

### Step 5: Verify User Created
You should see the user in the Users list:
- Email: admin@uaecarrecovery.ae
- UID: (some long ID)

### Step 6: Try Login Again
1. Go back to your app: `http://localhost:3000/admin/login`
2. Enter:
   - Email: `admin@uaecarrecovery.ae`
   - Password: (the password you just created)
3. Click "Sign in"

**It should work now!** ✅

---

## Alternative: Create Account via Code (Temporary)

If you can't access Firebase Console, I can create a temporary signup page for you to create the first admin account.

---

## Troubleshooting

### Still getting error?
1. **Double-check email:** Make sure it matches exactly (case-sensitive)
2. **Double-check password:** Make sure no extra spaces
3. **Check Firebase Console:** Verify user appears in Users list
4. **Check browser console:** Look for other errors

### User exists but still can't login?
1. Try resetting password in Firebase Console
2. Delete and recreate the user
3. Check if Email/Password is enabled

### Can't access Firebase Console?
- Make sure you're logged into the correct Google account
- Check if you have access to the project
- Try incognito/private browser window

---

## Quick Checklist

- [ ] Authentication enabled in Firebase Console
- [ ] Email/Password sign-in method enabled
- [ ] Admin user created in Users tab
- [ ] Email matches exactly: `admin@uaecarrecovery.ae`
- [ ] Password is correct (no typos)
- [ ] Try login again

---

## Need Help?

If you're still having issues:
1. Check browser console (F12) for detailed error messages
2. Verify the user exists in Firebase Console → Authentication → Users
3. Make sure Email/Password is enabled in Sign-in methods
