type WindowWithGA = Window & {
  gtag: (
    command: string,
    action: string,
    params?: {
      page_path?: string
      [key: string]: unknown
    },
  ) => void
  dataLayer: unknown[]
}

declare const window: WindowWithGA

// Identyfikator pomiaru GA4 (Measurement ID)
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""

// Inicjalizacja Google Analytics
export const initGA = () => {
  if (typeof window !== "undefined" && GA_MEASUREMENT_ID) {
    window.dataLayer = window.dataLayer || []
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args)
    }
    gtag("js", new Date())
    gtag("config", GA_MEASUREMENT_ID, {
      page_path: window.location.pathname,
    })
  }
}

// Śledzenie zmiany strony
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}

// Śledzenie zdarzeń
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== "undefined") {
    // Send to GA4 via gtag (if available)
    if (window.gtag) {
      window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
      })
    }

    // Send to GTM via dataLayer (for GTM tags)
    if (window.dataLayer) {
      window.dataLayer.push({
        event: action,
        event_category: category,
        event_label: label,
        value: value,
      })
    }
  }
}
