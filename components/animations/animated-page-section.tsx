"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { useAnimationConfig } from "@/hooks/use-reduced-motion"

interface AnimatedPageSectionProps {
  children: ReactNode
  delay?: number
  className?: string
  animation?: "fade" | "slide" | "scale" | "rotate" | "custom"
  customAnimation?: {
    initial: object;
    animate: object;
    transition: object;
  }
}

export default function AnimatedPageSection({
  children,
  delay = 0,
  className = "",
  animation = "fade",
  customAnimation,
}: AnimatedPageSectionProps) {
  const { prefersReducedMotion, duration, easing } = useAnimationConfig()

  // Optimized animations with reduced motion support
  const animations = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: {
        delay: prefersReducedMotion ? 0 : delay,
        duration: duration.normal / 1000,
        ease: easing.ease
      },
    },
    slide: {
      initial: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
      animate: { opacity: 1, y: 0 },
      transition: {
        delay: prefersReducedMotion ? 0 : delay,
        duration: duration.slow / 1000,
        ease: easing.easeOut
      },
    },
    scale: {
      initial: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: {
        delay: prefersReducedMotion ? 0 : delay,
        duration: duration.normal / 1000,
        ease: easing.ease
      },
    },
    rotate: {
      initial: {
        opacity: 0,
        rotateX: prefersReducedMotion ? 0 : 10,
        y: prefersReducedMotion ? 0 : 20
      },
      animate: { opacity: 1, rotateX: 0, y: 0 },
      transition: {
        delay: prefersReducedMotion ? 0 : delay,
        duration: duration.slow / 1000,
        ease: easing.bounce
      },
    },
  }

  const animationProps = customAnimation || animations[animation as keyof typeof animations]

  return (
    <motion.div
      className={className}
      initial={animationProps.initial as any}
      whileInView={animationProps.animate as any}
      viewport={{ once: true, margin: "-100px" }}
      transition={animationProps.transition as any}
    >
      {children}
    </motion.div>
  )
}
