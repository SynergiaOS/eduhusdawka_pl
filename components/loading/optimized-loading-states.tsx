"use client"

import React, { memo } from "react"
import { cn } from "@/lib/utils"

interface LoadingSkeletonProps {
  className?: string
  variant?: "text" | "circular" | "rectangular" | "card"
  lines?: number
  width?: string | number
  height?: string | number
}

const LoadingSkeleton = memo<LoadingSkeletonProps>(({
  className,
  variant = "rectangular",
  lines = 1,
  width = "100%",
  height = "1rem",
}) => {
  const baseClasses = "animate-pulse bg-gray-200 rounded"
  
  if (variant === "text" && lines > 1) {
    return (
      <div className={cn("space-y-2", className)}>
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={cn(baseClasses, "h-4")}
            style={{ 
              width: i === lines - 1 ? "75%" : "100%"
            }}
          />
        ))}
      </div>
    )
  }

  const variantClasses = {
    text: "h-4",
    circular: "rounded-full",
    rectangular: "",
    card: "rounded-lg",
  }

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        className
      )}
      style={{ width, height }}
    />
  )
})

LoadingSkeleton.displayName = "LoadingSkeleton"

// Optimized loading states for different components
export const FormLoadingSkeleton = memo(() => (
  <div className="space-y-6 p-6">
    <LoadingSkeleton variant="text" lines={1} height="2rem" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <LoadingSkeleton height="3rem" />
      <LoadingSkeleton height="3rem" />
    </div>
    <LoadingSkeleton height="8rem" />
    <LoadingSkeleton height="3rem" width="8rem" />
  </div>
))

FormLoadingSkeleton.displayName = "FormLoadingSkeleton"

export const CardLoadingSkeleton = memo(() => (
  <div className="p-6 space-y-4">
    <LoadingSkeleton variant="circular" width="4rem" height="4rem" />
    <LoadingSkeleton variant="text" lines={2} />
    <LoadingSkeleton height="2rem" width="6rem" />
  </div>
))

CardLoadingSkeleton.displayName = "CardLoadingSkeleton"

export const ImageLoadingSkeleton = memo<{ aspectRatio?: string }>(({ 
  aspectRatio = "aspect-video" 
}) => (
  <div className={cn("w-full bg-gray-200 animate-pulse rounded-lg", aspectRatio)} />
))

ImageLoadingSkeleton.displayName = "ImageLoadingSkeleton"

export const TestimonialsLoadingSkeleton = memo(() => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: 3 }).map((_, i) => (
      <div key={i} className="p-6 border rounded-lg space-y-4">
        <div className="flex items-center space-x-3">
          <LoadingSkeleton variant="circular" width="3rem" height="3rem" />
          <div className="flex-1">
            <LoadingSkeleton height="1rem" width="60%" />
            <LoadingSkeleton height="0.75rem" width="40%" className="mt-1" />
          </div>
        </div>
        <LoadingSkeleton variant="text" lines={3} />
      </div>
    ))}
  </div>
))

TestimonialsLoadingSkeleton.displayName = "TestimonialsLoadingSkeleton"

export const BlogLoadingSkeleton = memo(() => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: 6 }).map((_, i) => (
      <div key={i} className="space-y-4">
        <ImageLoadingSkeleton aspectRatio="aspect-[4/3]" />
        <div className="space-y-2">
          <LoadingSkeleton height="1.5rem" />
          <LoadingSkeleton variant="text" lines={2} />
          <LoadingSkeleton height="1rem" width="5rem" />
        </div>
      </div>
    ))}
  </div>
))

BlogLoadingSkeleton.displayName = "BlogLoadingSkeleton"

export const ServicesLoadingSkeleton = memo(() => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {Array.from({ length: 6 }).map((_, i) => (
      <div key={i} className="text-center space-y-4">
        <div className="mx-auto">
          <LoadingSkeleton variant="circular" width="5rem" height="5rem" />
        </div>
        <LoadingSkeleton height="1.5rem" width="80%" className="mx-auto" />
        <LoadingSkeleton variant="text" lines={3} />
        <LoadingSkeleton height="2.5rem" width="7rem" className="mx-auto" />
      </div>
    ))}
  </div>
))

ServicesLoadingSkeleton.displayName = "ServicesLoadingSkeleton"

// Enhanced loading spinner with better performance
export const OptimizedSpinner = memo<{
  size?: "sm" | "md" | "lg"
  className?: string
}>(({ size = "md", className }) => {
  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-2",
    lg: "w-12 h-12 border-4",
  }

  return (
    <div
      className={cn(
        "border-teal-600 border-t-transparent rounded-full animate-spin",
        sizeClasses[size],
        className
      )}
      role="status"
      aria-label="Ładowanie..."
    />
  )
})

OptimizedSpinner.displayName = "OptimizedSpinner"

// Fallback component for lazy loaded sections
export const SectionFallback = memo<{
  height?: string
  title?: string
}>(({ height = "h-64", title }) => (
  <div className={cn("w-full bg-gray-50 rounded-lg flex items-center justify-center", height)}>
    <div className="text-center space-y-3">
      <OptimizedSpinner size="lg" />
      {title && (
        <p className="text-gray-600 text-sm">{title}</p>
      )}
    </div>
  </div>
))

SectionFallback.displayName = "SectionFallback"

export { LoadingSkeleton }
