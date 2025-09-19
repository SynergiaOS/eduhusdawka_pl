"use client"

import type React from "react"

import { useEffect, useRef, useState, memo } from "react"
import { cn } from "@/lib/utils"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  animation?: "fade" | "slide" | "scale" | "bounce"
  direction?: "up" | "down" | "left" | "right"
  threshold?: number
  once?: boolean
}

const AnimatedSection = memo(({
  children,
  className,
  delay = 0,
  animation = "fade",
  direction = "up",
  threshold = 0.1,
  once = true,
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const currentRef = ref.current // Capture ref value for cleanup

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!once || !hasAnimated)) {
          // If user prefers reduced motion, show immediately
          const animationDelay = prefersReducedMotion ? 0 : delay

          const timeoutId = setTimeout(() => {
            setIsVisible(true)
            if (once) setHasAnimated(true)
          }, animationDelay)

          return () => clearTimeout(timeoutId)
        } else if (!once && !entry.isIntersecting) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin: prefersReducedMotion ? '0px' : '50px', // Reduce rootMargin for reduced motion
      },
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
      observer.disconnect()
    }
  }, [delay, threshold, once, hasAnimated, prefersReducedMotion])

  const getAnimationClasses = () => {
    // If user prefers reduced motion, use minimal transitions
    const baseClasses = prefersReducedMotion
      ? "transition-opacity duration-100"
      : "transition-all duration-700 ease-out animate-optimized"

    if (!isVisible) {
      if (prefersReducedMotion) {
        return `${baseClasses} opacity-0`
      }

      switch (animation) {
        case "fade":
          return `${baseClasses} opacity-0`
        case "slide":
          switch (direction) {
            case "up":
              return `${baseClasses} opacity-0 translate-y-8`
            case "down":
              return `${baseClasses} opacity-0 -translate-y-8`
            case "left":
              return `${baseClasses} opacity-0 translate-x-8`
            case "right":
              return `${baseClasses} opacity-0 -translate-x-8`
            default:
              return `${baseClasses} opacity-0 translate-y-8`
          }
        case "scale":
          return `${baseClasses} opacity-0 scale-95`
        case "bounce":
          return `${baseClasses} opacity-0 scale-95`
        default:
          return `${baseClasses} opacity-0`
      }
    }

    if (prefersReducedMotion) {
      return `${baseClasses} opacity-100`
    }

    switch (animation) {
      case "fade":
        return `${baseClasses} opacity-100`
      case "slide":
        return `${baseClasses} opacity-100 translate-y-0 translate-x-0`
      case "scale":
        return `${baseClasses} opacity-100 scale-100`
      case "bounce":
        return `${baseClasses} opacity-100 scale-100 bounce-once-optimized`
      default:
        return `${baseClasses} opacity-100`
    }
  }

  return (
    <div ref={ref} className={cn(getAnimationClasses(), className)}>
      {children}
    </div>
  )
})

AnimatedSection.displayName = "AnimatedSection"

export default AnimatedSection
