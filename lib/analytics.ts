// Google Analytics 4 Type Definitions
export type GtagCommand = 'config' | 'event' | 'js' | 'set'

export interface GtagEventParams {
  page_path?: string
  event_category?: string
  event_label?: string
  value?: number
  [key: string]: string | number | boolean | undefined
}

export type DataLayerEvent =
  | ['js', Date]
  | ['config', string, GtagEventParams?]
  | ['event', string, GtagEventParams?]
  | ['set', Record<string, unknown>]
  | { event: string; [key: string]: unknown }

type WindowWithGA = Window & {
  gtag: (command: GtagCommand, targetOrAction: string, params?: GtagEventParams) => void
  dataLayer: DataLayerEvent[]
}

declare const window: WindowWithGA

// Identyfikator pomiaru GA4 (Measurement ID)
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""

// Inicjalizacja Google Analytics
export const initGA = () => {
  if (typeof window !== "undefined" && GA_MEASUREMENT_ID) {
    window.dataLayer = window.dataLayer || []
    function gtag(command: GtagCommand, targetOrAction: string, params?: GtagEventParams) {
      window.dataLayer.push([command, targetOrAction, params] as DataLayerEvent)
    }
    gtag("js", new Date().toISOString())
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
