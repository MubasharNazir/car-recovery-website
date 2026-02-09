# Add 10 Dummy Providers

## Method 1: Using Admin Page (Easiest)

1. **Login to Admin Dashboard:**
   - Go to: `http://localhost:3000/admin/login`
   - Login with your admin credentials

2. **Click "Add Providers" Button:**
   - In the dashboard header, click "Add Providers"
   - OR go directly to: `http://localhost:3000/admin/add-providers`

3. **Add All Providers:**
   - Click "Add All 10 Providers" button
   - Wait for confirmation
   - All providers will be added automatically

---

## Method 2: Manual Entry in Firebase Console

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select project: **car-recovery-4ade0**
3. Click **"Firestore Database"** → **"Data"** tab
4. Click **"Start collection"** (if `providers` doesn't exist)
5. Collection ID: `providers`
6. Add each provider as a document:

### Provider 1:
- Document ID: `provider_1` (or auto-generated)
- Fields:
  ```
  name: "Ahmed Al Mansoori" (String)
  phone: "+971 50 111 1111" (String)
  email: "ahmed@provider.com" (String)
  serviceTypes: ["towing", "recovery"] (Array)
  currentLoad: 0 (Number)
  maxCapacity: 5 (Number)
  isActive: true (Boolean)
  rating: 0 (Number)
  totalLeads: 0 (Number)
  completedLeads: 0 (Number)
  ```

### Provider 2:
- Document ID: `provider_2`
- Fields:
  ```
  name: "Mohammed Hassan"
  phone: "+971 50 222 2222"
  email: "mohammed@provider.com"
  serviceTypes: ["roadside", "battery"]
  currentLoad: 0
  maxCapacity: 5
  isActive: true
  rating: 0
  totalLeads: 0
  completedLeads: 0
  ```

### Provider 3:
- Document ID: `provider_3`
- Fields:
  ```
  name: "Khalid Al Zaabi"
  phone: "+971 50 333 3333"
  email: "khalid@provider.com"
  serviceTypes: ["towing", "recovery", "roadside"]
  currentLoad: 0
  maxCapacity: 5
  isActive: true
  rating: 0
  totalLeads: 0
  completedLeads: 0
  ```

### Provider 4:
- Document ID: `provider_4`
- Fields:
  ```
  name: "Omar Abdullah"
  phone: "+971 50 444 4444"
  email: "omar@provider.com"
  serviceTypes: ["flat-tire", "battery", "roadside"]
  currentLoad: 0
  maxCapacity: 5
  isActive: true
  rating: 0
  totalLeads: 0
  completedLeads: 0
  ```

### Provider 5:
- Document ID: `provider_5`
- Fields:
  ```
  name: "Youssef Al Marri"
  phone: "+971 50 555 5555"
  email: "youssef@provider.com"
  serviceTypes: ["towing", "recovery"]
  currentLoad: 0
  maxCapacity: 5
  isActive: true
  rating: 0
  totalLeads: 0
  completedLeads: 0
  ```

### Provider 6:
- Document ID: `provider_6`
- Fields:
  ```
  name: "Saeed Al Dhaheri"
  phone: "+971 50 666 6666"
  email: "saeed@provider.com"
  serviceTypes: ["roadside", "battery", "flat-tire"]
  currentLoad: 0
  maxCapacity: 5
  isActive: true
  rating: 0
  totalLeads: 0
  completedLeads: 0
  ```

### Provider 7:
- Document ID: `provider_7`
- Fields:
  ```
  name: "Hamad Al Suwaidi"
  phone: "+971 50 777 7777"
  email: "hamad@provider.com"
  serviceTypes: ["towing", "recovery", "roadside"]
  currentLoad: 0
  maxCapacity: 5
  isActive: true
  rating: 0
  totalLeads: 0
  completedLeads: 0
  ```

### Provider 8:
- Document ID: `provider_8`
- Fields:
  ```
  name: "Rashid Al Nuaimi"
  phone: "+971 50 888 8888"
  email: "rashid@provider.com"
  serviceTypes: ["battery", "flat-tire"]
  currentLoad: 0
  maxCapacity: 5
  isActive: true
  rating: 0
  totalLeads: 0
  completedLeads: 0
  ```

### Provider 9:
- Document ID: `provider_9`
- Fields:
  ```
  name: "Majid Al Shamsi"
  phone: "+971 50 999 9999"
  email: "majid@provider.com"
  serviceTypes: ["towing", "recovery", "roadside", "battery"]
  currentLoad: 0
  maxCapacity: 5
  isActive: true
  rating: 0
  totalLeads: 0
  completedLeads: 0
  ```

### Provider 10:
- Document ID: `provider_10`
- Fields:
  ```
  name: "Sultan Al Qasimi"
  phone: "+971 50 000 0000"
  email: "sultan@provider.com"
  serviceTypes: ["towing", "recovery", "flat-tire"]
  currentLoad: 0
  maxCapacity: 5
  isActive: true
  rating: 0
  totalLeads: 0
  completedLeads: 0
  ```

---

## Method 3: Browser Console Script

If you want to add via browser console:

1. Open your app: `http://localhost:3000`
2. Open browser console (F12)
3. Paste and run this script:

```javascript
// Import Firebase functions (you'll need to adjust based on your setup)
// This is a simplified version - use the admin page instead for easier setup
```

**Note:** The admin page method is the easiest and recommended way.

---

## Quick Summary

**Easiest Method:** Use the admin page at `/admin/add-providers`

**All 10 Providers:**
1. Ahmed Al Mansoori - Towing, Recovery
2. Mohammed Hassan - Roadside, Battery
3. Khalid Al Zaabi - Towing, Recovery, Roadside
4. Omar Abdullah - Flat Tire, Battery, Roadside
5. Youssef Al Marri - Towing, Recovery
6. Saeed Al Dhaheri - Roadside, Battery, Flat Tire
7. Hamad Al Suwaidi - Towing, Recovery, Roadside
8. Rashid Al Nuaimi - Battery, Flat Tire
9. Majid Al Shamsi - Towing, Recovery, Roadside, Battery
10. Sultan Al Qasimi - Towing, Recovery, Flat Tire

---

## After Adding Providers

1. Go to admin dashboard
2. Check "Provider Status" section
3. You should see all 10 providers listed
4. Test lead assignment - create a lead and see it auto-assign!
