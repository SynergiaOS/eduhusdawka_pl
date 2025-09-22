"use client"

import { useState, useEffect } from "react"
import { ArrowUp, MessageCircle } from "lucide-react"

export default function MobileOptimizations() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/48531509008?text=Dzień%20dobry!%20Chciałbym%20dowiedzieć%20się%20więcej%20o%20ofercie%20EduHustawka."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 lg:bottom-6 lg:right-6"
        aria-label="Napisz na WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 z-40 bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 lg:bottom-24 lg:right-6"
          aria-label="Przewiń do góry"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  )
}
