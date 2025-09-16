"use client"

import { useEffect } from "react"

export default function MobileFormEnhancements() {
  useEffect(() => {
    // Prevent zoom on input focus on iOS
    const addMaximumScaleToMetaViewport = () => {
      const el = document.querySelector('meta[name=viewport]')
      if (el !== null) {
        let content = el.getAttribute('content')
        if (content) {
          const re = /maximum-scale=[0-9.]+/g
          if (re.test(content)) {
            content = content.replace(re, 'maximum-scale=1.0')
          } else {
            content = [content, 'maximum-scale=1.0'].join(', ')
          }
          el.setAttribute('content', content)
        }
      }
    }

    const disableIosTextFieldZoom = addMaximumScaleToMetaViewport

    // Detect iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
    
    if (isIOS) {
      disableIosTextFieldZoom()
    }

    // Improve touch targets
    const style = document.createElement('style')
    style.textContent = `
      @media (max-width: 768px) {
        button, 
        input[type="button"], 
        input[type="submit"], 
        input[type="reset"], 
        a[role="button"] {
          min-height: 44px !important;
          min-width: 44px !important;
        }
        
        input, 
        textarea, 
        select {
          font-size: 16px !important;
        }
        
        /* Prevent horizontal scroll on mobile */
        body {
          overflow-x: hidden;
        }
        
        /* Better focus states for mobile */
        input:focus,
        textarea:focus,
        select:focus {
          outline: 2px solid #0d9488;
          outline-offset: 2px;
        }
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return null
}
