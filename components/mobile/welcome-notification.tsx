"use client"

import { useState, useEffect } from "react"
import { X, Gift, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

export default function WelcomeNotification() {
  const [isVisible, setIsVisible] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    // Check if user has seen the notification before
    const hasSeenNotification = localStorage.getItem("eduhustawka-welcome-seen")
    
    if (!hasSeenNotification) {
      // Show notification after 3 seconds
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsVisible(false)
      localStorage.setItem("eduhustawka-welcome-seen", "true")
    }, 300)
  }

  const handleCallClick = () => {
    window.location.href = "tel:+48531509008"
    handleClose()
  }

  if (!isVisible) return null

  return (
    <div className={cn(
      "fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50 transition-all duration-300",
      isClosing ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
    )}>
      <div className="bg-gradient-to-r from-eduhus-accent to-eduhus-accent text-white p-6 rounded-xl shadow-2xl border border-teal-400">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-white/80 hover:text-white transition-colors"
          aria-label="Zamknij powiadomienie"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-start space-x-4">
          <div className="bg-white/20 p-3 rounded-full flex-shrink-0">
            <Gift className="w-6 h-6 text-white" />
          </div>
          
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-2">
              Witaj w EduHustawka! 👋
            </h3>
            <p className="text-white/90 text-sm mb-4 leading-relaxed">
              Pierwsza konsultacja <strong>BEZPŁATNA</strong>! 
              Zadzwoń i umów się na spotkanie z pedagogiem specjalnym.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={handleCallClick}
                className="bg-white text-eduhus-accent px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4" />
                Zadzwoń: 531 509 008
              </button>
              <button
                onClick={handleClose}
                className="text-white/80 hover:text-white px-4 py-2 rounded-lg border border-white/30 hover:border-white/50 transition-colors text-sm"
              >
                Może później
              </button>
            </div>
          </div>
        </div>

        {/* Animated pulse effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-teal-500 rounded-xl opacity-30 animate-pulse -z-10" />
      </div>
    </div>
  )
}
