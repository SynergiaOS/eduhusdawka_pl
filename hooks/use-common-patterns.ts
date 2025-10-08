"use client"

import { useState, useEffect, useCallback, useRef } from 'react'

// Type definition for form field values
export type FormFieldValue = string | number | boolean | null | undefined | Date | File | FileList

/**
 * Custom hook for managing toggle state with optional auto-close
 */
export function useToggle(initialValue = false, autoCloseDelay?: number) {
  const [isOpen, setIsOpen] = useState(initialValue)
  const timeoutRef = useRef<NodeJS.Timeout>()

  const open = useCallback(() => {
    setIsOpen(true)
    if (autoCloseDelay) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false)
      }, autoCloseDelay)
    }
  }, [autoCloseDelay])

  const close = useCallback(() => {
    setIsOpen(false)
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }, [])

  const toggle = useCallback(() => {
    if (isOpen) {
      close()
    } else {
      open()
    }
  }, [isOpen, open, close])

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return { isOpen, open, close, toggle }
}

/**
 * Custom hook for managing carousel/slider state
 */
export function useCarousel<T>(items: T[], options: {
  autoPlay?: boolean
  autoPlayDelay?: number
  loop?: boolean
} = {}) {
  const { autoPlay = false, autoPlayDelay = 3000, loop = true } = options
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const intervalRef = useRef<NodeJS.Timeout>()

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev >= items.length - 1) {
        return loop ? 0 : prev
      }
      return prev + 1
    })
  }, [items.length, loop])

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return loop ? items.length - 1 : prev
      }
      return prev - 1
    })
  }, [items.length, loop])

  const goToIndex = useCallback((index: number) => {
    if (index >= 0 && index < items.length) {
      setCurrentIndex(index)
    }
  }, [items.length])

  const play = useCallback(() => {
    setIsPlaying(true)
  }, [])

  const pause = useCallback(() => {
    setIsPlaying(false)
  }, [])

  // Auto-play effect
  useEffect(() => {
    if (isPlaying && autoPlayDelay > 0) {
      intervalRef.current = setInterval(goToNext, autoPlayDelay)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying, autoPlayDelay, goToNext])

  const currentItem = items[currentIndex]
  const hasNext = loop || currentIndex < items.length - 1
  const hasPrev = loop || currentIndex > 0

  return {
    currentIndex,
    currentItem,
    goToNext,
    goToPrev,
    goToIndex,
    hasNext,
    hasPrev,
    isPlaying,
    play,
    pause,
  }
}

/**
 * Custom hook for managing form state with validation
 */
export function useFormState<T extends Record<string, FormFieldValue>>(
  initialValues: T,
  validationRules?: Partial<Record<keyof T, (value: T[keyof T]) => string | null>>
) {
  const [values, setValues] = useState<T>(initialValues)
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({})
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const setValue = useCallback(<K extends keyof T>(field: K, value: T[K]) => {
    setValues(prev => ({ ...prev, [field]: value }))

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }, [errors])

  const setFieldTouched = useCallback((field: keyof T, isTouched = true) => {
    setTouched(prev => ({ ...prev, [field]: isTouched }))
  }, [])

  const validateField = useCallback((field: keyof T) => {
    if (!validationRules?.[field]) return null

    const error = validationRules[field]!(values[field])
    setErrors(prev => ({ ...prev, [field]: error || undefined }))
    return error
  }, [validationRules, values])

  const validateAll = useCallback(() => {
    if (!validationRules) return true

    const newErrors: Partial<Record<keyof T, string>> = {}
    let isValid = true

    Object.keys(validationRules).forEach(field => {
      const error = validationRules[field as keyof T]!(values[field as keyof T])
      if (error) {
        newErrors[field as keyof T] = error
        isValid = false
      }
    })

    setErrors(newErrors)
    return isValid
  }, [validationRules, values])

  const reset = useCallback(() => {
    setValues(initialValues)
    setErrors({})
    setTouched({})
    setIsSubmitting(false)
  }, [initialValues])

  const handleSubmit = useCallback(async (
    onSubmit: (values: T) => Promise<void> | void
  ) => {
    setIsSubmitting(true)
    
    try {
      const isValid = validateAll()
      if (!isValid) {
        setIsSubmitting(false)
        return false
      }

      await onSubmit(values)
      return true
    } catch (error) {
      console.error('Form submission error:', error)
      return false
    } finally {
      setIsSubmitting(false)
    }
  }, [values, validateAll])

  const hasErrors = Object.values(errors).some(error => error != null)
  const isValid = !hasErrors && Object.keys(touched).length > 0

  return {
    values,
    errors,
    touched,
    isSubmitting,
    setValue,
    setFieldTouched,
    validateField,
    validateAll,
    reset,
    handleSubmit,
    hasErrors,
    isValid,
  }
}

/**
 * Custom hook for managing async operations
 */
export function useAsync<T, E = Error>() {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<E | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const execute = useCallback(async (asyncFunction: () => Promise<T>) => {
    setIsLoading(true)
    setError(null)

    try {
      const result = await asyncFunction()
      setData(result)
      return result
    } catch (err) {
      setError(err as E)
      throw err
    } finally {
      setIsLoading(false)
    }
  }, [])

  const reset = useCallback(() => {
    setData(null)
    setError(null)
    setIsLoading(false)
  }, [])

  return { data, error, isLoading, execute, reset }
}

/**
 * Custom hook for managing local storage with type safety
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue
    }

    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  })

  const setValue = useCallback((value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error)
    }
  }, [key, storedValue])

  const removeValue = useCallback(() => {
    try {
      setStoredValue(initialValue)
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem(key)
      }
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error)
    }
  }, [key, initialValue])

  return [storedValue, setValue, removeValue] as const
}
