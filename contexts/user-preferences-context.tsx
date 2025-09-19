"use client"

import { createContext, useContext, useState, useEffect, useCallback, useMemo, type ReactNode } from "react"

interface UserPreferences {
  viewedServices: string[]
  preferredCategories: string[]
  firstVisit: boolean
}

interface UserPreferencesContextType {
  preferences: UserPreferences
  addViewedService: (serviceId: string) => void
  setPreferredCategories: (categories: string[]) => void
  setFirstVisit: (value: boolean) => void
}

const defaultPreferences: UserPreferences = {
  viewedServices: [],
  preferredCategories: [],
  firstVisit: true,
}

const UserPreferencesContext = createContext<UserPreferencesContextType | undefined>(undefined)

export function UserPreferencesProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState<UserPreferences>(defaultPreferences)
  const [isLoaded, setIsLoaded] = useState(false)

  // Load preferences from localStorage on mount
  useEffect(() => {
    try {
      const storedPreferences = localStorage.getItem("userPreferences")
      if (storedPreferences) {
        setPreferences(JSON.parse(storedPreferences))
      }
    } catch (error) {
      console.error("Error loading preferences from localStorage:", error)
    }
    setIsLoaded(true)
  }, [])

  // Save preferences to localStorage whenever they change
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem("userPreferences", JSON.stringify(preferences))
      } catch (error) {
        console.error("Error saving preferences to localStorage:", error)
      }
    }
  }, [preferences, isLoaded])

  // Memoized handlers to prevent unnecessary re-renders
  const addViewedService = useCallback((serviceId: string) => {
    setPreferences((prev) => {
      // Check if the service is already in the viewedServices array
      if (prev.viewedServices.includes(serviceId)) {
        return prev
      }

      // Add the service to the viewedServices array
      return {
        ...prev,
        viewedServices: [...prev.viewedServices, serviceId],
      }
    })
  }, [])

  const setPreferredCategories = useCallback((categories: string[]) => {
    setPreferences((prev) => ({
      ...prev,
      preferredCategories: categories,
    }))
  }, [])

  const setFirstVisit = useCallback((value: boolean) => {
    setPreferences((prev) => ({
      ...prev,
      firstVisit: value,
    }))
  }, [])

  // Memoized context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    preferences,
    addViewedService,
    setPreferredCategories,
    setFirstVisit,
  }), [preferences, addViewedService, setPreferredCategories, setFirstVisit])

  return (
    <UserPreferencesContext.Provider value={contextValue}>
      {children}
    </UserPreferencesContext.Provider>
  )
}

export function useUserPreferences() {
  const context = useContext(UserPreferencesContext)
  if (context === undefined) {
    throw new Error("useUserPreferences must be used within a UserPreferencesProvider")
  }
  return context
}
