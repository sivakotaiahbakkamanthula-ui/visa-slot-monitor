# 🛂 US Visa Slot Monitor - Complete Setup Guide

## 📋 Table of Contents
1. [Installation](#installation)
2. [Configuration](#configuration)
3. [Usage](#usage)
4. [Features Explained](#features-explained)
5. [Troubleshooting](#troubleshooting)

---

## 🚀 Installation

### Step 1: Download the Extension

```bash
# Clone from GitHub
git clone https://github.com/sivakotaiahbakkamanthula-ui/visa-slot-monitor.git
cd visa-slot-monitor
```

### Step 2: Load into Chrome

1. Open Chrome browser
2. Go to `chrome://extensions/`
3. Enable **"Developer mode"** (toggle in top-right corner)
4. Click **"Load unpacked"** button
5. Select the `visa-slot-monitor` folder
6. Extension is now installed! ✅

### Step 3: Pin the Extension (Optional)

1. Click the puzzle icon in Chrome toolbar
2. Find "Visa Slot Monitor"
3. Click the pin icon to keep it visible

---

## ⚙️ Configuration

### First Time Setup

1. **Open the visa scheduling website**
   - Go to https://www.usvisascheduling.com
   - Log in with your credentials
   - Navigate to appointment scheduling page

2. **Open Extension Popup**
   - Click the extension icon in toolbar
   - Configuration popup appears

3. **Choose Monitoring Mode**

   **Option A: Monitor Single Location**
   ```
   ☐ Monitor All Locations (unchecked)
   Select Location: Hyderabad ▼
   ```

   **Option B: Monitor All Locations**
   ```
   ☑ Monitor All Locations (checked)
   Location: Disabled (will check all 5 locations)
   ```

4. **Select Visa Type**
   - B1/B2 (Tourist/Business)
   - F1 (Student)
   - H1B (Work)
   - L1 (Intra-company)
   - O1 (Exceptional Ability)

5. **Set Date Range**
   - Start Date: Your earliest preferred date
   - End Date: Your latest acceptable date
   - (Defaults to today + 60 days)

6. **Enable Alerts** (Recommended)
   - ☑ Enable Sound Alert
   - ☑ Enable Desktop Notification

7. **Save Settings**
   - All settings auto-save when you change them ✅

---

## 📖 Usage

### How to Check for Slots

**Method 1: Manual Check (Recommended)**

1. Click **"🔍 Check Available Slots (All Locations)"** button
2. Extension scans the current page for appointments
3. Results appear instantly
4. If slots found:
   - 🔊 Sound alert plays (3-5 beeps)
   - 💬 Desktop notification appears
   - 📊 All slots displayed with location names

### What You'll See

#### Single Location Results
```
📍 Location: Hyderabad
📅 Date Range: 2024-09-15 to 2024-11-14

📌 September 20     🔑 5 slots
📌 September 21     🔑 3 slots
📌 September 22     🔑 2 slots

✅ TOTAL AVAILABLE SLOTS: 10
```

#### Multi-Location Results
```
🎉 TOTAL SLOTS ACROSS ALL LOCATIONS: 47

📍 Hyderabad          🔑 15 slots
  📌 Sept 20: 5 available
  📌 Sept 21: 3 available
  📌 Sept 22: 7 available

📍 Delhi              🔑 12 slots
  📌 Sept 19: 6 available
  📌 Sept 23: 6 available

📍 Mumbai             🔑 10 slots
  📌 Sept 25: 10 available

📍 Chennai            🔑 6 slots
  📌 Sept 26: 6 available

📍 Kolkata            🔑 4 slots
  📌 Sept 27: 4 available
```

---

## ✨ Features Explained

### 🎯 Monitor All Locations

When **"Monitor All Locations"** is checked:

- ✅ Checks Hyderabad, Chennai, Kolkata, Mumbai, Delhi simultaneously
- ✅ Shows results sorted by number of available slots
- ✅ **5 beeps** alert (instead of 3) to indicate multi-location match
- ✅ Notification mentions all locations with slots
- ✅ Total count across all locations displayed prominently

### 📍 Single Location Monitoring

When a specific location is selected:

- ✅ Only checks that location
- ✅ **3 beeps** alert sound
- ✅ Notification shows only that location
- ✅ Faster single-location scanning

### 🔔 Alert System

#### Sound Alerts
- **3 beeps**: Single location has slots
- **5 beeps**: Multiple locations have slots
- Frequency increases with each beep (800Hz → 1200Hz)
- Each beep lasts 0.2 seconds

#### Desktop Notifications
- Browser notification appears in system tray
- Shows location name(s) and total slot count
- High priority (won't be missed)
- Click to focus Chrome window

### 📊 Slot Information Displayed

For each available date:
- **Date**: Exact appointment date
- **Available Count**: Number of open slots
- **Location**: Which consulate/location
- **Total Count**: Sum of all available slots

### ⏰ Date Range Filtering

- Set minimum and maximum dates
- Only shows slots within your range
- Automatically saves preference
- Can be changed before each check

### 💾 Automatic Settings Storage

All settings saved locally:
- ✅ Selected location
- ✅ Monitor all locations preference
- ✅ Visa type
- ✅ Date range
- ✅ Alert preferences
- ✅ Last check time

---

## 🎯 Step-by-Step Example

### Scenario: You're in Chennai but want slots anywhere

**Setup:**
```
1. Go to usvisascheduling.com and log in
2. Open extension popup
3. Check: ☑ Monitor All Locations
4. Select Visa Type: B1/B2
5. Set Date Range: Sept 15 - Nov 14
6. Enable: ✅ Sound Alert, ✅ Desktop Notification
7. Click "Check Available Slots (All Locations)"
```

**Results:**
```
✅ System checks all 5 locations
🔊 Plays 5 beeps (multi-location alert)
💬 Shows: "47 slots found in: Hyderabad, Delhi, Mumbai"
📊 Displays each location with available dates
```

**What Happens Next:**
- You see total 47 slots across all locations
- Each location card shows its available dates
- Desktop notification appears with all locations
- You manually click on preferred location/date to book
- **NO automation - YOU control the booking**

---

## 🔧 Troubleshooting

### Problem: "Visa scheduling site not open"

**Solution:**
```
1. Go to https://www.usvisascheduling.com
2. Make sure you're logged in
3. Navigate to appointment scheduling page
4. Click check button again
```

### Problem: No slots showing

**Possible Causes:**
```
1. No slots available in your date range
2. Selected wrong date range
3. Website page needs refresh
4. Try clicking check button multiple times
```

**Fix:**
```
1. Adjust date range to wider dates
2. Refresh the visa scheduling page (F5)
3. Try checking again
4. Check if site is loading properly
```

### Problem: Sound alert not playing

**Solution:**
```
1. Check: ☑ Enable Sound Alert is checked
2. Check Chrome volume is not muted
3. Check system volume
4. Try different browser tab
5. Reload extension (go to chrome://extensions)
```

### Problem: Notification not appearing

**Solution:**
```
1. Check: ☑ Enable Desktop Notification is checked
2. Check browser notification settings:
   - Chrome Settings → Privacy → Notifications
   - Allow notifications for Chrome
3. Check Windows/Mac notification settings
4. Reload extension
```

### Problem: Extension not loading

**Solution:**
```
1. Go to chrome://extensions/
2. Enable "Developer mode"
3. Try "Load unpacked" again
4. Select correct folder
5. Check folder has manifest.json
6. If error: Delete and re-add extension
```

### Problem: Getting different results each time

**Note:** This is NORMAL
- Slots change frequently
- Refresh website between checks
- Results depend on current page state
- Try checking multiple times

---

## 📱 Best Practices

### ✅ DO:
- Check during off-peak hours (early morning, late night)
- Check multiple times per day
- Refresh the visa scheduling page between checks
- Set realistic date ranges
- Monitor all locations for better chances
- Be ready to book immediately when slots found

### ❌ DON'T:
- Don't expect automation to book for you
- Don't leave browser window in background
- Don't modify extension code to auto-submit
- Don't use with multiple browsers simultaneously
- Don't share extension with others (one account per install)

---

## 🔐 Privacy & Security

✅ **This Extension:**
- Stores data locally only (Chrome storage)
- Does NOT send data to servers
- Does NOT track your activity
- Does NOT bypass security measures
- Does NOT violate visa policies
- Does NOT automate bookings

---

## 📞 Support

If you encounter issues:

1. Check this guide's Troubleshooting section
2. Clear Chrome cache (Settings → Privacy)
3. Reinstall the extension
4. Check browser console (F12) for errors
5. Try a different browser

---

## 📈 Tips for Success

**Maximize Your Chances:**

1. **Check frequently**: 3-4 times daily
2. **Check at odd hours**: 2-4 AM, very early morning
3. **Monitor all locations**: More locations = more opportunities
4. **Set wider date range**: More dates = more slots
5. **Have account ready**: Be logged in and ready to book
6. **Stay alert**: Keep sound enabled and watch notifications
7. **Be fast**: Book immediately when slots found

**Slot Availability Times:**
- Early morning (2-6 AM): Often fresh slots
- Early in week (Monday-Tuesday): More availability
- Avoid peak hours (8 AM - 5 PM business hours)
- Check just before business day starts

---

## 🎉 You're All Set!

Your visa slot monitoring extension is now ready to use!

**Next Steps:**
1. Open https://www.usvisascheduling.com
2. Log in to your account
3. Click the extension icon
4. Configure your preferences
5. Click "Check Available Slots"
6. Get alerts when slots are found! 🔔

**Good luck with your visa appointment! 🍀**

---

**Version:** 1.0.0  
**Last Updated:** 2024  
**License:** Personal Use Only
