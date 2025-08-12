"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useAnalytics } from "@/hooks/use-analytics"
import { useConsent } from "@/contexts/consent-context"

export default function AnalyticsTest() {
  const { trackEvent } = useAnalytics()
  const { consents } = useConsent()
  const [eventCount, setEventCount] = useState(0)

  const testEvent = () => {
    trackEvent("test_event", "Analytics", "Manual test", eventCount + 1)
    setEventCount(prev => prev + 1)
    console.log("Test event sent:", { action: "test_event", category: "Analytics", label: "Manual test", value: eventCount + 1 })
  }

  return (
    <div className="fixed bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg border z-50 max-w-xs">
      <h4 className="font-semibold text-sm mb-2">Analytics Test</h4>
      <div className="text-xs text-gray-600 mb-2">
        <p>Analytics consent: {consents.analytics ? "✅ Enabled" : "❌ Disabled"}</p>
        <p>Events sent: {eventCount}</p>
      </div>
      <Button 
        size="sm" 
        onClick={testEvent}
        disabled={!consents.analytics}
        className="w-full"
      >
        Send Test Event
      </Button>
      <p className="text-xs text-gray-500 mt-2">
        Check browser console and GTM Preview for events
      </p>
    </div>
  )
}
