"use client"

import React, { useState, useCallback } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface UnifiedImageProps {
  src?: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  priority?: boolean
  quality?: number
  sizes?: string
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down"
  objectPosition?: string
  placeholder?: "blur" | "empty"
  blurDataURL?: string
  errorFallback?: React.ReactNode
  loadingFallback?: React.ReactNode
  onLoad?: () => void
  onError?: () => void
}

const UnifiedImage = React.memo<UnifiedImageProps>(({
  src,
  alt,
  width,
  height,
  fill = false,
  className,
  priority = false,
  quality = 85,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  objectFit = "contain",
  objectPosition = "center",
  placeholder = "empty",
  blurDataURL,
  errorFallback,
  loadingFallback,
  onLoad,
  onError,
}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoad = useCallback(() => {
    setIsLoading(false)
    onLoad?.()
  }, [onLoad])

  const handleError = useCallback(() => {
    setIsLoading(false)
    setHasError(true)
    onError?.()
  }, [onError])

  // Error fallback
  if (hasError) {
    if (errorFallback) {
      return <>{errorFallback}</>
    }
    
    return (
      <div 
        className={cn(
          "flex items-center justify-center bg-gray-100 text-gray-400 rounded",
          className
        )}
        style={{ 
          width: fill ? '100%' : width, 
          height: fill ? '100%' : height 
        }}
      >
        <div className="text-center">
          <svg 
            className="w-8 h-8 mx-auto mb-2 text-gray-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="text-xs">Nie można załadować obrazu</p>
        </div>
      </div>
    )
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Loading fallback */}
      {isLoading && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center"
          style={{ 
            width: fill ? '100%' : width, 
            height: fill ? '100%' : height 
          }}
        >
          {loadingFallback || (
            <div className="w-6 h-6 border-2 border-eduhus-accent border-t-transparent rounded-full animate-spin" />
          )}
        </div>
      )}
      
      {/* Main image */}
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        priority={priority}
        quality={quality}
        sizes={sizes}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          fill ? "object-cover" : ""
        )}
        style={{
          objectFit: fill ? objectFit : undefined,
          objectPosition: fill ? objectPosition : undefined,
        }}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  )
})

UnifiedImage.displayName = "UnifiedImage"

export default UnifiedImage

// Export types for external use
export type { UnifiedImageProps }
