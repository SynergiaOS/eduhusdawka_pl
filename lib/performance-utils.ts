/**
 * Performance utilities for optimizing React components
 */

import { useState, useEffect } from 'react'

/**
 * Throttle function to limit the frequency of function calls
 * @param func - Function to throttle
 * @param delay - Delay in milliseconds
 * @returns Throttled function
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null
  let lastExecTime = 0

  return (...args: Parameters<T>) => {
    const currentTime = Date.now()

    if (currentTime - lastExecTime > delay) {
      func(...args)
      lastExecTime = currentTime
    } else {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      timeoutId = setTimeout(() => {
        func(...args)
        lastExecTime = Date.now()
      }, delay - (currentTime - lastExecTime))
    }
  }
}

/**
 * Debounce function to delay function execution
 * @param func - Function to debounce
 * @param delay - Delay in milliseconds
 * @returns Debounced function
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null

  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => func(...args), delay)
  }
}

/**
 * Custom hook for throttled scroll handling
 * @param callback - Callback function to execute on scroll
 * @param delay - Throttle delay in milliseconds (default: 100ms)
 */
export function useThrottledScroll(
  callback: (scrollY: number) => void,
  delay: number = 100
) {
  const throttledCallback = throttle((...args: unknown[]) => {
    callback(args[0] as number)
  }, delay)

  return throttledCallback
}

/**
 * Custom hook for scroll position tracking
 * @param threshold - Scroll threshold to trigger state change (default: 10px)
 * @param delay - Throttle delay in milliseconds (default: 100ms)
 */
export function useScrollPosition(threshold: number = 10, delay: number = 100) {
  const [scrollY, setScrollY] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const throttledHandleScroll = throttle(() => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
      setIsScrolled(currentScrollY > threshold)
    }, delay)

    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    return () => window.removeEventListener('scroll', throttledHandleScroll)
  }, [threshold, delay])

  return { scrollY, isScrolled }
}

/**
 * Custom hook for intersection observer with performance optimizations
 * @param options - Intersection observer options
 * @returns Intersection observer ref and isIntersecting state
 */
export function useIntersectionObserver(
  options: IntersectionObserverInit = {}
) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [element, setElement] = useState<Element | null>(null)

  useEffect(() => {
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [element, options])

  return { ref: setElement, isIntersecting }
}
