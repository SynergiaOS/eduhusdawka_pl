import { headers } from 'next/headers'
import crypto from 'crypto'

/**
 * Generate a nonce for CSP inline scripts
 */
export function generateNonce(): string {
  return crypto.randomBytes(16).toString('base64')
}

/**
 * Get CSP nonce from headers (if available)
 */
export function getCSPNonce(): string | undefined {
  try {
    const headersList = headers()
    const cspHeader = headersList.get('content-security-policy')
    
    if (!cspHeader) return undefined
    
    const nonceMatch = cspHeader.match(/nonce-([a-zA-Z0-9+/=]+)/)
    return nonceMatch ? nonceMatch[1] : undefined
  } catch {
    return undefined
  }
}

/**
 * CSP configuration for EduHustawka
 */
export const CSP_CONFIG = {
  'default-src': ["'self'"],
  'script-src': [
    "'self'",
    "'unsafe-inline'", // Needed for GTM and GA
    "'unsafe-eval'", // Needed for development
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    "https://tagmanager.google.com"
  ],
  'style-src': [
    "'self'",
    "'unsafe-inline'", // Needed for Tailwind and dynamic styles
    "https://fonts.googleapis.com"
  ],
  'font-src': [
    "'self'",
    "https://fonts.gstatic.com"
  ],
  'img-src': [
    "'self'",
    "data:",
    "blob:",
    "https://www.google-analytics.com",
    "https://www.googletagmanager.com",
    "https://images.unsplash.com",
    "https://source.unsplash.com",
    "https://placeholder.pics",
    "https://via.placeholder.com",
    "https://img.youtube.com"
  ],
  'connect-src': [
    "'self'",
    "https://www.google-analytics.com",
    "https://www.googletagmanager.com",
    "https://region1.google-analytics.com"
  ],
  'frame-src': [
    "'self'",
    "https://www.google.com",
    "https://maps.google.com",
    "https://www.youtube.com"
  ],
  'object-src': ["'none'"],
  'base-uri': ["'self'"],
  'form-action': ["'self'"],
  'frame-ancestors': ["'none'"],
  'upgrade-insecure-requests': []
}

/**
 * Convert CSP config to header string
 */
export function buildCSPHeader(config: typeof CSP_CONFIG): string {
  return Object.entries(config)
    .map(([directive, sources]) => {
      if (sources.length === 0) return directive
      return `${directive} ${sources.join(' ')}`
    })
    .join('; ')
}
