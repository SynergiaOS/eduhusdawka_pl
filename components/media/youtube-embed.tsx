"use client"

import { useState } from "react"
import { Play, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import UnifiedImage from "./unified-image"

interface YouTubeEmbedProps {
  videoId: string
  title: string
  className?: string
  thumbnailQuality?: "default" | "mqdefault" | "hqdefault" | "sddefault" | "maxresdefault"
}

export default function YouTubeEmbed({ 
  videoId, 
  title, 
  className,
  thumbnailQuality = "hqdefault" 
}: YouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/${thumbnailQuality}.jpg`

  const handlePlay = () => {
    setIsLoading(true)
    setIsLoaded(true)
  }

  if (isLoaded) {
    return (
      <div className={cn("relative w-full aspect-video", className)}>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-xl"
          onLoad={() => setIsLoading(false)}
        />
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900 rounded-xl">
            <Loader2 className="w-8 h-8 text-white animate-spin" />
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={cn("relative w-full aspect-video cursor-pointer group", className)}>
      <UnifiedImage
        src={thumbnailUrl}
        alt={`Miniatura filmu: ${title}`}
        width={640}
        height={360}
        className="w-full h-full object-cover rounded-xl"
        priority={false}
        objectFit="cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors rounded-xl" />
      
      {/* Play button */}
      <button
        onClick={handlePlay}
        className="absolute inset-0 flex items-center justify-center group"
        aria-label={`Odtwórz film: ${title}`}
      >
        <div className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform">
          <Play className="w-8 h-8 ml-1" />
        </div>
      </button>

      {/* Title overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-xl">
        <h3 className="text-white font-semibold text-sm md:text-base">
          {title}
        </h3>
      </div>
    </div>
  )
}
