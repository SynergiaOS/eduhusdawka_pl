"use client"

import { createContext, useContext, useState, useEffect, useCallback, useMemo, type ReactNode } from "react"

type ConsentType = "necessary" | "analytics" | "marketing"

interface ConsentContextType {
  consents: Record<ConsentType, boolean>
  setConsent: (type: ConsentType, value: boolean) => void
  setAllConsents: (value: boolean) => void
  hasInteracted: boolean
  setHasInteracted: (value: boolean) => void
  saveConsents: () => void
}

const ConsentContext = createContext<ConsentContextType | undefined>(undefined)

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consents, setConsents] = useState<Record<ConsentType, boolean>>({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
  })
  const [hasInteracted, setHasInteracted] = useState(false)

  // Load saved consents from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedConsents = localStorage.getItem("cookie-consents")
      const savedInteraction = localStorage.getItem("cookie-interaction")

      if (savedConsents) {
        try {
          const parsedConsents = JSON.parse(savedConsents)
          setConsents((prev) => ({ ...prev, ...parsedConsents }))
        } catch (error) {
          console.error("Error parsing saved consents:", error)
        }
      }

      if (savedInteraction === "true") {
        setHasInteracted(true)
      }
    }
  }, [])

  // Memoized handlers to prevent unnecessary re-renders
  const setConsent = useCallback((type: ConsentType, value: boolean) => {
    setConsents((prev) => ({ ...prev, [type]: value }))
  }, [])

  const setAllConsents = useCallback((value: boolean) => {
    setConsents({
      necessary: true, // Always required
      analytics: value,
      marketing: value,
    })
  }, [])

  const saveConsents = useCallback(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cookie-consents", JSON.stringify(consents))
      localStorage.setItem("cookie-interaction", "true")
      setHasInteracted(true)
    }
  }, [consents])

  // Memoized context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    consents,
    setConsent,
    setAllConsents,
    hasInteracted,
    setHasInteracted,
    saveConsents,
  }), [consents, setConsent, setAllConsents, hasInteracted, setHasInteracted, saveConsents])

  return (
    <ConsentContext.Provider value={contextValue}>
      {children}
    </ConsentContext.Provider>
  )
}

export function useConsent() {
  const context = useContext(ConsentContext)
  if (context === undefined) {
    throw new Error("useConsent must be used within a ConsentProvider")
  }
  return context
}
