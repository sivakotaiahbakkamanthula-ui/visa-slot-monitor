{
  "manifest_version": 3,
  "name": "Siva Visa Slot Monitor",
  "version": "1.0.0",
  "description": "Monitor US visa appointment availability on usvisascheduling.com.",
  "action": {
    "default_title": "Siva Visa Slot Monitor",
    "default_popup": "popup.html"
  },
  "background": {
    "service_worker": "background.js"
  },
  "permissions": [
    "storage",
    "scripting",
    "tabs",
    "alarms",
    "notifications"
  ],
  "host_permissions": [
    "https://www.usvisascheduling.com/*"
  ]
}
