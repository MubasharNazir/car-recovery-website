# Admin Dashboard Testing Guide

## Prerequisites

Before testing, you need to:
1. Install Firebase package
2. Set up Firebase Authentication
3. Create an admin account

---

## Step 1: Install Firebase

```bash
npm install firebase
```

---

## Step 2: Set Up Firebase Authentication

### 2.1 Enable Authentication in Firebase Console

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project: `car-recovery-4ade0`
3. Click **"Authentication"** in the left menu
4. Click **"Get started"** (if not already enabled)
5. Click on **"Email/Password"** tab
6. Enable **"Email/Password"** (toggle ON)
7. Click **"Save"**

### 2.2 Create Admin Account

1. In Authentication page, click **"Add user"** button
2. Enter your admin email (e.g., `admin@uaecarrecovery.ae`)
3. Enter a secure password (e.g., `Admin123!`)
4. Click **"Add user"**
5. **Save these credentials** - you'll need them to login

---

## Step 3: Test Admin Login

### 3.1 Start Development Server

```bash
npm run dev
```

### 3.2 Access Login Page

1. Open your browser
2. Go to: `http://localhost:3000/admin/login`

### 3.3 Test Login

1. Enter the email you created (e.g., `admin@uaecarrecovery.ae`)
2. Enter the password you set
3. Click **"Sign in"**

**Expected Result:**
- ✅ Redirects to `/admin` dashboard
- ✅ Shows dashboard with stats and leads table

**If Error:**
- ❌ Check Firebase Authentication is enabled
- ❌ Verify email/password are correct
- ❌ Check browser console for errors

---

## Step 4: Test Admin Dashboard

### 4.1 Dashboard Features to Test

Once logged in, you should see:

1. **Header**
   - ✅ "Lead Management Dashboard" title
   - ✅ "Quick Entry" button
   - ✅ "Logout" button

2. **Stats Cards** (Top Row)
   - ✅ Total Leads
   - ✅ Pending
   - ✅ Assigned
   - ✅ In Progress
   - ✅ Completed

3. **Provider Status Section**
   - ✅ Shows all providers
   - ✅ Shows current load (e.g., "2/5")
   - ✅ Shows active/inactive status

4. **Filter Buttons**
   - ✅ All, Pending, Assigned, In Progress, Completed
   - ✅ Click each to filter leads

5. **Leads Table**
   - ✅ Shows all leads
   - ✅ Columns: ID, Customer, Phone, Service, Provider, Status, Created, Actions
   - ✅ Status dropdown for each lead

### 4.2 Test Lead Status Updates

1. Find a lead in the table
2. Click the status dropdown
3. Change status (e.g., "pending" → "in_progress")
4. **Expected:** Status updates immediately

### 4.3 Test Logout

1. Click **"Logout"** button
2. **Expected:** Redirects to `/admin/login`

---

## Step 5: Test Quick Entry Form

### 5.1 Access Quick Entry

1. From dashboard, click **"Quick Entry"** button
2. OR go to: `http://localhost:3000/admin/quick-entry`

### 5.2 Create Test Lead

Fill out the form:
- **Customer Name:** Test Customer
- **Phone Number:** +971 50 123 4567
- **Service Type:** Select "Vehicle Towing"
- **Location:** Abu Dhabi City
- **Notes:** Test lead from phone call

### 5.3 Submit Form

1. Click **"Create Lead"**
2. **Expected:**
   - ✅ Success message appears
   - ✅ Redirects to dashboard after 2 seconds
   - ✅ New lead appears in dashboard
   - ✅ Provider auto-assigned (if providers exist)

---

## Step 6: Test with Real Data

### 6.1 Add Providers First

Before testing lead assignment, add providers to Firestore:

1. Go to Firebase Console → Firestore Database
2. Create collection: `providers`
3. Add a provider document:

```
Document ID: provider_1
Fields:
  name: "Test Provider"
  phone: "+971 50 111 1111"
  email: "test@provider.com"
  serviceTypes: ["towing", "recovery"] (Array)
  currentLoad: 0 (Number)
  maxCapacity: 5 (Number)
  isActive: true (Boolean)
  rating: 0 (Number)
  totalLeads: 0 (Number)
  completedLeads: 0 (Number)
```

### 6.2 Test Lead Assignment

1. Create a lead via contact form or quick entry
2. Select service type that matches provider's `serviceTypes`
3. **Expected:**
   - ✅ Lead created
   - ✅ Provider auto-assigned
   - ✅ Provider's `currentLoad` increases
   - ✅ Lead status = "assigned"

---

## Step 7: Test Real-Time Updates

### 7.1 Open Dashboard in Two Tabs

1. Open `/admin` in two browser tabs
2. In one tab, update a lead status
3. **Expected:** Other tab updates automatically (real-time)

---

## Common Issues & Solutions

### Issue: "Cannot find module 'firebase/auth'"
**Solution:** Run `npm install firebase`

### Issue: "Permission denied" when creating lead
**Solution:** 
- Check Firestore security rules
- Make sure you're logged in as admin

### Issue: "No available providers"
**Solution:**
- Add providers to Firestore
- Make sure `isActive: true`
- Make sure `serviceTypes` array includes the service type
- Make sure `currentLoad < maxCapacity`

### Issue: Login doesn't work
**Solution:**
- Verify Authentication is enabled in Firebase Console
- Check email/password are correct
- Check browser console for errors

### Issue: Dashboard shows "Loading..." forever
**Solution:**
- Check Firebase connection
- Verify Firestore is created
- Check browser console for errors

---

## Quick Test Checklist

- [ ] Firebase installed (`npm install firebase`)
- [ ] Authentication enabled in Firebase Console
- [ ] Admin account created
- [ ] Can login at `/admin/login`
- [ ] Dashboard loads at `/admin`
- [ ] Stats cards show (may be 0 if no leads)
- [ ] Quick Entry form works
- [ ] Can create lead via quick entry
- [ ] Can update lead status
- [ ] Logout works
- [ ] Real-time updates work

---

## Test Credentials Template

Save your admin credentials here:

```
Email: _______________________
Password: _______________________
```

**Important:** Keep these credentials secure!

---

## Next Steps After Testing

Once everything works:
1. Add all 10 providers to Firestore
2. Test with real lead submissions
3. Set up provider notifications (optional)
4. Customize dashboard if needed
