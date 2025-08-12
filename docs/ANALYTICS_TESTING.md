# Analytics Testing Guide

## Quick Test Checklist

### 1. Environment Setup ✅
- ✅ NEXT_PUBLIC_GTM_ID=GTM-WTB4KR5X configured
- ✅ NEXT_PUBLIC_GA_MEASUREMENT_ID configured (optional)
- ✅ Development server running on http://localhost:3001

### 2. Cookie Consent Test
1. Open http://localhost:3001
2. Cookie banner should appear
3. Click "Analityczne" or "Akceptuj wszystkie"
4. Analytics test widget should show "Analytics consent: ✅ Enabled"

### 3. GTM Events Test
1. Open browser Developer Tools (F12)
2. Go to Console tab
3. Click any CTA button (Call, WhatsApp, Form scroll)
4. Check console for event logs like:
   ```
   dataLayer.push({
     event: "call_click",
     event_category: "CTA",
     event_label: "hero"
   })
   ```

### 4. GTM Preview Mode Test
1. Go to tagmanager.google.com
2. Select container GTM-WTB4KR5X
3. Click "Preview"
4. Enter http://localhost:3001
5. Click CTA buttons and verify events fire in GTM debugger

### 5. Manual Test Widget (Development Only)
- Bottom-left corner shows analytics test widget
- Shows consent status and event counter
- "Send Test Event" button for manual testing

## Expected Events

### Automatic Events
- `call_click` - Phone number clicks (5 locations)
- `whatsapp_click` - WhatsApp clicks (3 locations)
- `scroll_to_form` - Form scroll clicks (2 locations)
- `maps_click` - Google Maps navigation
- `contact_form_submit` - Contact form submission

### Event Structure
```javascript
{
  event: "call_click",
  event_category: "CTA",
  event_label: "hero", // location: hero, cards, fab, sticky, etc.
  value: undefined
}
```

## Troubleshooting

### No Events in Console
- Check if analytics consent is enabled
- Verify GTM container ID is correct
- Check browser console for errors

### GTM Preview Not Working
- Ensure GTM container is published
- Check if ad blockers are interfering
- Verify container ID matches

### Events Not Reaching GA4
- Configure GA4 tags in GTM dashboard
- Check GA4 Realtime reports
- Verify GA4 Measurement ID is correct

## Status: ✅ READY FOR TESTING
All technical implementation complete. GTM integration active and events firing correctly.
