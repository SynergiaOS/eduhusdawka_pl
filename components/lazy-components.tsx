import dynamic from 'next/dynamic'
import { LoadingSpinner } from './loading-spinner'

// Lazy load heavy components
export const LazyContactForm = dynamic(() => import('./contact-form'), {
  loading: () => <LoadingSpinner />,
  ssr: false
})

export const LazyAppointmentForm = dynamic(() => import('./appointment-form'), {
  loading: () => <LoadingSpinner />,
  ssr: false
})

export const LazyPricingSection = dynamic(() => import('./pricing-section'), {
  loading: () => <LoadingSpinner />
})

export const LazyGoogleMap = dynamic(() => import('./google-map'), {
  loading: () => <div className="w-full h-96 bg-gray-200 animate-pulse rounded-lg" />,
  ssr: false
})

export const LazyFAQSection = dynamic(() => import('./faq-section'), {
  loading: () => <LoadingSpinner />
})

export const LazyTestimonials = dynamic(() => import('./testimonials'), {
  loading: () => <LoadingSpinner />
})

// Lazy load analytics components
export const LazyGoogleAnalytics = dynamic(() => import('./google-analytics'), {
  ssr: false
})

export const LazyGoogleTagManager = dynamic(() => import('./google-tag-manager'), {
  ssr: false
})
