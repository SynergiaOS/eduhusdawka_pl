"use client"

import { usePathname } from "next/navigation"
import { type ReactNode, useEffect, useState } from "react"
import { useAnimationConfig } from "@/hooks/use-reduced-motion"

// Types for dynamically loaded framer-motion
interface MotionComponents {
  motion: {
    div: React.ComponentType<any>
  }
  AnimatePresence: React.ComponentType<any>
  Transition: any
}

// Typy animacji dla różnych ścieżek z obsługą reduced motion
const getAnimationForPath = (
  path: string,
  prefersReducedMotion: boolean,
  duration: { fast: number; normal: number; slow: number }
): {
  initial: Record<string, unknown>;
  animate: Record<string, unknown>;
  exit: Record<string, unknown>;
  transition: Record<string, unknown>;
} => {
  // Strona główna
  if (path === "/") {
    return {
      initial: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: prefersReducedMotion ? 0 : -20 },
      transition: { duration: duration.normal / 1000, ease: "easeInOut" },
    }
  }

  // Podstrony usług
  if (path.startsWith("/uslugi")) {
    return {
      initial: { opacity: 0, x: prefersReducedMotion ? 0 : 100 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: prefersReducedMotion ? 0 : -100 },
      transition: { duration: duration.normal / 1000, ease: "easeInOut" },
    }
  }

  // Strona kontaktowa
  if (path.startsWith("/kontakt")) {
    return {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 1.05 },
      transition: { duration: 0.5, ease: "easeInOut" },
    }
  }

  // Strona rezerwacji
  if (path.startsWith("/rezerwacja")) {
    return {
      initial: { opacity: 0, y: 50, scale: 0.98 },
      animate: { opacity: 1, y: 0, scale: 1 },
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        staggerChildren: 0.1,
      },
      exit: { opacity: 0, scale: 0.95 },
    }
  }

  // Strona o mnie
  if (path.startsWith("/o-mnie")) {
    return {
      initial: { opacity: 0, rotateY: 10, scale: 0.95 },
      animate: { opacity: 1, rotateY: 0, scale: 1 },
      exit: { opacity: 0, rotateY: -10, scale: 0.95 },
      transition: { duration: 0.6, ease: "easeInOut" },
    }
  }

  // Blog
  if (path.startsWith("/blog")) {
    return {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 30 },
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.05,
      },
    }
  }

  // Domyślna animacja dla pozostałych stron
  return {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.4, ease: "easeInOut" },
  }
}

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const [isFirstRender, setIsFirstRender] = useState(true)
  const [motionComponents, setMotionComponents] = useState<MotionComponents | null>(null)
  const { prefersReducedMotion, duration } = useAnimationConfig()

  // Pomijamy animację przy pierwszym renderowaniu lub gdy użytkownik preferuje reduced motion
  useEffect(() => {
    setIsFirstRender(false)
  }, [])

  // Dynamicznie ładuj framer-motion tylko gdy potrzebne
  useEffect(() => {
    if (prefersReducedMotion) return

    const loadMotionComponents = async () => {
      try {
        const FM = await import('framer-motion')
        setMotionComponents({
          motion: {
            div: FM.motion.div
          },
          AnimatePresence: FM.AnimatePresence,
          Transition: {} as any // Transition is not used directly in the component
        })
      } catch (error) {
        console.warn('Failed to load framer-motion:', error)
        // W przypadku błędu renderuj bez animacji
        setMotionComponents(null)
      }
    }

    loadMotionComponents()
  }, [prefersReducedMotion])

  // Przewijamy na górę strony przy zmianie ścieżki
  useEffect(() => {
    if (!prefersReducedMotion) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, prefersReducedMotion])

  // Jeśli użytkownik preferuje reduced motion, renderuj bezpośrednio bez animacji
  if (prefersReducedMotion) {
    return <>{children}</>
  }

  // Jeśli komponenty animacji nie są jeszcze załadowane, renderuj bez animacji
  if (!motionComponents) {
    return <>{children}</>
  }

  const { motion, AnimatePresence } = motionComponents

  const animation = getAnimationForPath(pathname, prefersReducedMotion, duration)

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={isFirstRender ? false : animation.initial as any}
        animate={animation.animate as any}
        exit={animation.exit as any}
        transition={animation.transition as any}
        className="page-transition-container"
      >
        {children}

        {/* Overlay animacji - pojawia się podczas przejścia */}
        <motion.div
          className="fixed inset-0 pointer-events-none z-50 bg-eduhus-bg-light/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0.3 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </AnimatePresence>
  )
}
