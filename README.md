# 🛂 US Visa Slot Monitor - Chrome Extension

> **Legitimate, Legal, Fair** - Monitor US visa appointments across all Indian locations with smart alerts. No automation, no unfair advantage.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-Personal%20Use-green)
![Status](https://img.shields.io/badge/status-Active-success)

---

## ✨ What This Extension Does

### ✅ Check Visa Slot Availability
- Monitor **all 5 Indian locations** simultaneously
- Hyderabad, Chennai, Kolkata, Mumbai, Delhi
- Manual checking (you control when)
- Results in **2-3 seconds**

### 🔔 Smart Alert System
- **Sound Alerts**: 3 beeps (single location) or 5 beeps (multi-location)
- **Desktop Notifications**: Shows location and total slots
- **Visual Display**: Complete list of available dates and counts
- **Automatic Settings**: Saves all preferences

### 📊 Multi-Location Display
```
If you're in CHENNAI but slots open in HYDERABAD:
🔊 Plays 5 BEEPS (multi-location alert)
💬 Notification: "15 slots found in HYDERABAD!"
📊 Shows: Hyderabad - 15 slots on Sept 20, 21, 22...
```

### ✨ Features
- ✅ Monitor single location OR all locations
- ✅ Date range filtering (custom dates)
- ✅ Visa type selection (B1/B2, F1, H1B, L1, O1)
- ✅ Sound + Desktop notifications
- ✅ Automatic settings storage
- ✅ Shows last checked time
- ✅ Total slot count display
- ✅ Completely legitimate & legal

---

## 📋 What You Need to Install

### Required Files (Already Included)

```
visa-slot-monitor/
├── manifest.json          ✅ Extension configuration
├── popup.html             ✅ Extension UI/interface
├── popup.css              ✅ Styling (beautiful design)
├── popup.js               ✅ Main logic (multi-location alerts)
├── background.js          ✅ Background service worker
├── content.js             ✅ Page content extractor
├── README.md              ✅ Full documentation
├── SETUP_GUIDE.md         ✅ Detailed setup guide
├── QUICK_START.md         ✅ 5-minute quick start
└── images/                ✅ Extension icons
    ├── icon-16.png
    ├── icon-48.png
    └── icon-128.png
```

---

## 🚀 Installation (3 Steps - 2 Minutes)

### Step 1: Download
```bash
git clone https://github.com/sivakotaiahbakkamanthula-ui/visa-slot-monitor.git
cd visa-slot-monitor
```

### Step 2: Load in Chrome
1. Open Chrome → Go to `chrome://extensions/`
2. Enable **"Developer mode"** (toggle in top-right)
3. Click **"Load unpacked"** button
4. Select the `visa-slot-monitor` folder
5. ✅ Extension installed!

### Step 3: Configure
1. Go to https://www.usvisascheduling.com (log in)
2. Click extension icon
3. Check ☑ "Monitor All Locations"
4. Select Visa Type: B1/B2
5. Set date range
6. ✅ Ready to use!

---

## 💡 Real-World Example

### Scenario
You're in **CHENNAI** but want appointments anywhere in India.

### Setup in Extension
```
☑ Monitor All Locations (CHECKED)
Visa Type: B1/B2
Start Date: Sept 15
End Date: Nov 14
☑ Enable Sound Alert
☑ Enable Desktop Notification
```

### You Click: "Check Available Slots"

### System Checks All 5 Locations Instantly ⚡

### RESULT - Slots Found in Multiple Locations! 🎉

**ALERT TRIGGERS:**
```
🔊 Plays 5 BEEPS (different from 3 beeps for single location)
💬 Desktop Notification: "Slots found in: Hyderabad, Delhi, Mumbai!"
📊 Display shows:

   📍 HYDERABAD         🔑 15 SLOTS
      📌 Sept 20: 5 available
      📌 Sept 21: 3 available
      📌 Sept 22: 7 available

   📍 DELHI             🔑 12 SLOTS
      📌 Sept 19: 6 available
      📌 Sept 23: 6 available

   📍 MUMBAI            🔑 10 SLOTS
      📌 Sept 25: 10 available

   ✅ TOTAL: 37 SLOTS ACROSS ALL LOCATIONS
```

**YOU MANUALLY:**
- See which location has most slots
- Choose your preferred location
- Click to book (NOT automatic)
- Complete booking normally

---

## 📦 File Descriptions

| File | Purpose | Size |
|------|---------|------|
| **manifest.json** | Extension metadata & permissions | 1 KB |
| **popup.html** | User interface (settings & results) | 4 KB |
| **popup.css** | Beautiful styling & colors | 6 KB |
| **popup.js** | Core logic (multi-location alerts) | 14 KB |
| **background.js** | Service worker (slot extraction) | 4 KB |
| **content.js** | Page data extraction | 2 KB |
| **README.md** | Full documentation | 8 KB |
| **SETUP_GUIDE.md** | Detailed setup instructions | 9 KB |
| **QUICK_START.md** | 5-minute quick start | 6 KB |

**Total Size:** ~54 KB (very lightweight!)

---

## ⚙️ System Requirements

### Minimum
- ✅ Chrome Browser (latest version)
- ✅ Windows / Mac / Linux
- ✅ 50 MB free disk space
- ✅ Active internet connection

### Recommended
- ✅ Chrome 90+ (latest)
- ✅ 8GB+ RAM
- ✅ Keep browser window open
- ✅ Volume enabled for alerts

---

## 🎯 Key Features Breakdown

### 1️⃣ Multi-Location Monitoring
```javascript
Monitor All Locations: ON
↓
Checks: Hyderabad, Chennai, Kolkata, Mumbai, Delhi
↓
Shows results sorted by slot count
↓
Alerts with location names
```

### 2️⃣ Smart Alert System
```
Single Location: 3 BEEPS 🔊
Multi-Location: 5 BEEPS 🔊🔊🔊🔊🔊
```

### 3️⃣ Slot Information Display
```
For Each Date:
- Exact date
- Number of available slots
- Location name
- Total count across all
```

### 4️⃣ Settings Storage
Automatically saves:
- Location preference
- Monitor all toggle
- Visa type
- Date range
- Alert preferences
- Last check time

### 5️⃣ Desktop Notifications
```
Title: "🎉 Visa Slots Available!"
Message: "15 slots in Hyderabad"
Sound: Yes
Priority: High
```

---

## 📱 Quick Reference

### Installation Time
⏱️ **2 minutes** - Download + Load in Chrome

### Configuration Time
⏱️ **2 minutes** - Set location, dates, visa type

### First Check Time
⏱️ **3 seconds** - Get results instantly

### Learning Curve
📈 **Very Easy** - Beginner friendly interface

---

## ✅ Pre-Check Checklist

Before using, ensure:
- ✅ Chrome browser installed
- ✅ Developer mode enabled in Chrome
- ✅ Extension loaded successfully
- ✅ Logged into usvisascheduling.com
- ✅ On appointment scheduling page
- ✅ Browser volume enabled
- ✅ Chrome notifications allowed
- ✅ Date range set correctly

---

## 🔐 Safety & Compliance

### ✅ This Extension IS:
- Legal and compliant with visa policies
- Non-automated (you control everything)
- Fair to all applicants
- Privacy-respecting (local storage only)
- No data collection or tracking
- Completely transparent

### ❌ This Extension IS NOT:
- Auto-booking system
- Cloudflare bypass tool
- Security circumvention tool
- Unfair advantage mechanism
- Shared data platform

---

## 📚 Documentation Included

1. **README.md** - Overview and features
2. **SETUP_GUIDE.md** - Complete setup instructions
3. **QUICK_START.md** - 5-minute quick start
4. **This file** - Final checklist and requirements

---

## 🎓 How It Works (Technical)

```
1. You click "Check Available Slots"
   ↓
2. Extension sends message to background service
   ↓
3. Background injects script into visa scheduling page
   ↓
4. Script extracts slot data from calendar UI
   ↓
5. For multi-location: Repeats for all 5 locations
   ↓
6. Results compiled and returned
   ↓
7. Alerts triggered (sound + notification)
   ↓
8. Results displayed in popup
   ↓
9. You manually book your preferred slot
```

---

## 🎯 Usage Modes

### Mode 1: Single Location
```
Monitor All Locations: ☐ UNCHECKED
Location: Hyderabad ▼
Result: 3 BEEPS + Alert for Hyderabad only
```

### Mode 2: All Locations
```
Monitor All Locations: ☑ CHECKED
Location: [Disabled]
Result: 5 BEEPS + Alert for ALL locations with slots
```

---

## 💾 Storage

All data stored locally in Chrome:
- Settings saved automatically
- No cloud sync
- No data sharing
- Private and secure
- Cleared if extension removed

---

## 🚨 Troubleshooting Quick Links

| Issue | Solution |
|-------|----------|
| Extension won't load | Check manifest.json exists |
| No results showing | Refresh visa website & try again |
| Sound not playing | Check browser volume & permissions |
| Settings not saving | Reload extension from chrome://extensions |
| "Site not open" error | Make sure usvisascheduling.com is open |

**Full troubleshooting:** See `SETUP_GUIDE.md`

---

## 🎉 You Have Everything!

This extension includes:

✅ **Core Files** - All code needed to run
✅ **Configuration** - manifest.json ready to go
✅ **UI** - Beautiful, intuitive interface
✅ **Logic** - Multi-location monitoring system
✅ **Alerts** - Sound + notification system
✅ **Documentation** - 3 complete guides
✅ **Icons** - Professional extension icons
✅ **Support** - Troubleshooting guides

---

## 🚀 Start Using Now!

1. **Download** from GitHub
2. **Load** into Chrome (2 minutes)
3. **Configure** (2 minutes)
4. **Check** for slots (3 seconds per check)
5. **Get alerts** (sound + notification)
6. **Book manually** when slots found

---

## 📞 Support Resources

- 📖 **SETUP_GUIDE.md** - Detailed instructions
- ⚡ **QUICK_START.md** - Fast setup
- 🔍 **Troubleshooting** - In both guides
- 💬 **Chrome DevTools** - Debug if needed (F12)

---

## 🎓 Best Practices

✅ **DO:**
- Check 3-4 times daily
- Check at odd hours (2-4 AM)
- Monitor all locations
- Set wide date range
- Keep browser window open
- Have account ready

❌ **DON'T:**
- Don't expect automation
- Don't close browser window
- Don't modify extension code
- Don't share extension
- Don't use with other tools simultaneously

---

## 📊 Success Tips

**Maximize Your Chances:**
1. Check frequently (multiple times daily)
2. Check at off-peak hours
3. Monitor all 5 locations
4. Use wide date range
5. Stay alert (sound enabled)
6. Be ready to book immediately
7. Refresh page between checks

---

## 🎊 Ready to Use!

You now have a **complete, professional visa appointment monitoring extension** that is:

✅ **Legitimate** - Follows all rules
✅ **Fast** - Results in 2-3 seconds
✅ **Smart** - Multi-location alerts with beeps
✅ **Beautiful** - Professional interface
✅ **Documented** - Complete guides included
✅ **Easy** - Install and use in 5 minutes

---

## 📝 License & Terms

- **License:** Personal Use Only
- **Compliance:** Follows US State Department visa policies
- **Fairness:** No unfair advantages
- **Legality:** Completely legal and compliant
- **Support:** Community-driven

---

## 🍀 Good Luck with Your Visa Appointment!

**Download → Install → Configure → Get Slots → Book → Success!**

Questions? Check the guides or troubleshooting section.

---

**Extension Version:** 1.0.0  
**Last Updated:** 2024  
**Status:** ✅ Ready to Use  
**Repository:** https://github.com/sivakotaiahbakkamanthula-ui/visa-slot-monitor
