"use client"

import { useState, useEffect } from 'react'
import { Phone, MessageSquare, MessageCircle } from 'lucide-react'
import { EnhancedButton } from '@/components/ui/enhanced-button'
import { useAnalytics } from '@/hooks/use-analytics'

export default function MobileCTAButtons() {
  const { trackEvent } = useAnalytics()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 300
      setIsVisible(shouldShow)
    }

    // Initial check
    handleScroll()

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-20 right-4 z-50 lg:hidden">
        <EnhancedButton
          size="icon"
          variant="primary"
          glow="strong"
          className="h-14 w-14 rounded-full shadow-lg pulse-ring"
          onClick={() => {
            trackEvent("call_click", "CTA", "fab")
            window.location.href = "tel:+48531509008"
          }}
          aria-label="Zadzwoń teraz"
        >
          <Phone className="h-6 w-6" />
        </EnhancedButton>
      </div>

      {/* Sticky Bottom Bar */}
      <div
        className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40 lg:hidden transition-all duration-300"
        role="navigation"
        aria-label="Szybkie kontakty"
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex gap-2">
            <EnhancedButton
              size="sm"
              variant="primary"
              className="flex-1"
              onClick={() => {
                trackEvent("call_click", "CTA", "sticky")
                window.location.href = "tel:+48531509008"
              }}
              aria-label="Zadzwoń teraz"
            >
              <Phone className="mr-2 h-4 w-4" />
              Zadzwoń
            </EnhancedButton>

            <EnhancedButton
              size="sm"
              variant="secondary"
              className="flex-1"
              onClick={() => {
                trackEvent("whatsapp_click", "CTA", "sticky")
                window.location.href = "https://wa.me/48531509008?text=Dzień%20dobry,%20chciałbym%20umówić%20się%20na%20konsultację"
              }}
              aria-label="Napisz na WhatsApp"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              WhatsApp
            </EnhancedButton>

            <EnhancedButton
              size="sm"
              variant="outline"
              className="flex-1"
              onClick={() => {
                trackEvent("scroll_to_form", "CTA", "sticky")
                document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })
              }}
              aria-label="Przejdź do formularza"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Formularz
            </EnhancedButton>
          </div>
        </div>
      </div>
    </>
  )
}