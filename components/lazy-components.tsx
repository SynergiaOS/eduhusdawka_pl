import dynamic from 'next/dynamic'
import { LoadingSpinner } from './loading-spinner'
import {
  FormLoadingSkeleton,
  TestimonialsLoadingSkeleton,
  BlogLoadingSkeleton,
  SectionFallback,
  OptimizedSpinner
} from './optimized-loading-states'

// Lazy load heavy components
export const LazyContactForm = dynamic(() => import('./contact-form'), {
  loading: () => <FormLoadingSkeleton />,
  ssr: false
})

export const LazyAppointmentForm = dynamic(() => import('./appointment-form'), {
  loading: () => <SectionFallback height="h-32" title="Ładowanie formularza..." />,
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

// Lazy load heavy sections
export const LazyTestimonialsSection = dynamic(() => import('./testimonials-section'), {
  loading: () => <TestimonialsLoadingSkeleton />
})

export const LazyServiceArticlesSection = dynamic(() => import('./service-articles-section'), {
  loading: () => <SectionFallback height="h-96" title="Ładowanie artykułów..." />
})

export const LazyAboutSection = dynamic(() => import('./about-section'), {
  loading: () => <SectionFallback height="h-80" title="Ładowanie sekcji o mnie..." />
})

export const LazyBlogSection = dynamic(() => import('./blog-section'), {
  loading: () => <BlogLoadingSkeleton />
})

// Lazy load interactive components
export const LazyInteractiveServicesMap = dynamic(() => import('./interactive-services-map'), {
  loading: () => <div className="w-full h-64 bg-gray-100 animate-pulse rounded-lg" />,
  ssr: false
})

export const LazyYouTubeEmbed = dynamic(() => import('./youtube-embed'), {
  loading: () => <div className="w-full aspect-video bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
    <div className="text-gray-500">Ładowanie wideo...</div>
  </div>,
  ssr: false
})

// Lazy load utility components
export const LazyCookieBanner = dynamic(() => import('./cookie-banner'), {
  ssr: false
})

export const LazyWelcomeNotification = dynamic(() => import('./welcome-notification'), {
  ssr: false
})

// Lazy load admin components
export const LazySMSQueueStats = dynamic(() => import('./sms-queue-stats'), {
  loading: () => <LoadingSpinner />,
  ssr: false
})
