"use client"

import { useState, useEffect } from 'react'

/**
 * Custom hook to detect user's motion preferences
 * Returns true if user prefers reduced motion
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window === 'undefined') {
      return
    }

    // Create media query for prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    
    // Set initial value
    setPrefersReducedMotion(mediaQuery.matches)

    // Create event listener for changes
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    // Add event listener
    mediaQuery.addEventListener('change', handleChange)

    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  return prefersReducedMotion
}

/**
 * Custom hook for animation-aware components
 * Returns animation configuration based on user preferences
 */
export function useAnimationConfig() {
  const prefersReducedMotion = useReducedMotion()

  return {
    prefersReducedMotion,
    // Animation durations
    duration: {
      fast: prefersReducedMotion ? 0 : 150,
      normal: prefersReducedMotion ? 0 : 300,
      slow: prefersReducedMotion ? 0 : 500,
    },
    // Animation easings
    easing: {
      ease: prefersReducedMotion ? 'linear' : 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeIn: prefersReducedMotion ? 'linear' : 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: prefersReducedMotion ? 'linear' : 'cubic-bezier(0, 0, 0.2, 1)',
      bounce: prefersReducedMotion ? 'linear' : 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
    // Animation variants for Framer Motion
    variants: {
      fadeIn: {
        initial: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: prefersReducedMotion ? 0 : -20 },
      },
      slideUp: {
        initial: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: prefersReducedMotion ? 0 : -30 },
      },
      scale: {
        initial: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 },
      },
    },
    // CSS classes
    classes: {
      transition: prefersReducedMotion ? '' : 'transition-all duration-300 ease-out',
      fadeIn: prefersReducedMotion ? 'opacity-100' : 'fade-in-optimized',
      slideUp: prefersReducedMotion ? 'opacity-100' : 'slide-up-optimized',
      bounce: prefersReducedMotion ? 'opacity-100' : 'bounce-once-optimized',
      hover: prefersReducedMotion ? 'hover:bg-gray-50' : 'hover-scale-optimized',
    }
  }
}

/**
 * Utility function to get animation-safe CSS classes
 */
export function getAnimationClasses(
  baseClasses: string,
  animationClasses: string,
  prefersReducedMotion?: boolean
): string {
  const shouldReduceMotion = prefersReducedMotion ?? useReducedMotion()
  
  if (shouldReduceMotion) {
    // Return only base classes without animations
    return baseClasses
  }
  
  return `${baseClasses} ${animationClasses}`
}

/**
 * Utility function for conditional animation styles
 */
export function getAnimationStyles(
  animationStyles: React.CSSProperties,
  prefersReducedMotion?: boolean
): React.CSSProperties {
  const shouldReduceMotion = prefersReducedMotion ?? useReducedMotion()
  
  if (shouldReduceMotion) {
    // Remove animation-related properties
    const { 
      transition, 
      animation, 
      transform, 
      willChange,
      ...staticStyles 
    } = animationStyles
    
    return staticStyles
  }
  
  return animationStyles
}
