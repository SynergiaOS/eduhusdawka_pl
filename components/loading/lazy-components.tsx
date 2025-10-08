import dynamic from 'next/dynamic'
import {
  FormLoadingSkeleton,
  TestimonialsLoadingSkeleton,
  BlogLoadingSkeleton,
  SectionFallback,
  OptimizedSpinner
} from './optimized-loading-states'

// Lazy load heavy components
export const LazyContactForm = dynamic(() => import('../forms/contact-form'), {
  loading: () => <FormLoadingSkeleton />,
  ssr: false
})

export const LazyAppointmentForm = dynamic(() => import('../forms/appointment-form'), {
  loading: () => <SectionFallback height="h-32" title="Ładowanie formularza..." />,
  ssr: false
})

export const LazyPricingSection = dynamic(() => import('../sections/pricing-section'), {
  loading: () => <SectionFallback height="h-96" title="Ładowanie cennika..." />,
  ssr: false
})

export const LazyGoogleMap = dynamic(() => import('../media/google-map'), {
  loading: () => <div className="w-full h-96 bg-gray-200 animate-pulse rounded-lg" />,
  ssr: false
})

export const LazyFAQSection = dynamic(() => import('../sections/faq-section'), {
  loading: () => <SectionFallback height="h-64" title="Ładowanie FAQ..." />
})

export const LazyTestimonials = dynamic(() => import('../feedback/testimonials'), {
  loading: () => <TestimonialsLoadingSkeleton />
})

// Lazy load analytics components
export const LazyGoogleAnalytics = dynamic(() => import('../analytics/google-analytics'), {
  ssr: false
})

export const LazyGoogleTagManager = dynamic(() => import('../analytics/google-tag-manager'), {
  ssr: false
})

// Lazy load heavy sections
export const LazyTestimonialsSection = dynamic(() => import('../sections/testimonials-section'), {
  loading: () => <TestimonialsLoadingSkeleton />
})

export const LazyServiceArticlesSection = dynamic(() => import('../sections/service-articles-section'), {
  loading: () => <SectionFallback height="h-96" title="Ładowanie artykułów..." />
})

export const LazyAboutSection = dynamic(() => import('../sections/about-section'), {
  loading: () => <SectionFallback height="h-80" title="Ładowanie sekcji o mnie..." />
})

export const LazyBlogSection = dynamic(() => import('../sections/blog-section'), {
  loading: () => <BlogLoadingSkeleton />
})

// Lazy load interactive components
export const LazyInteractiveServicesMap = dynamic(() => import('../navigation/interactive-services-map'), {
  loading: () => <div className="w-full h-64 bg-gray-100 animate-pulse rounded-lg" />,
  ssr: false
})

export const LazyYouTubeEmbed = dynamic(() => import('../media/youtube-embed'), {
  loading: () => <div className="w-full aspect-video bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
    <div className="text-gray-500">Ładowanie wideo...</div>
  </div>,
  ssr: false
})

// Lazy load utility components
export const LazyCookieBanner = dynamic(() => import('../preferences/cookie-banner'), {
  ssr: false
})

export const LazyWelcomeNotification = dynamic(() => import('../mobile/welcome-notification'), {
  ssr: false
})

// Lazy load admin components
export const LazySMSQueueStats = dynamic(() => import('../admin/sms-queue-stats'), {
  loading: () => <SectionFallback height="h-64" title="Ładowanie statystyk SMS..." />,
  ssr: false
})

// Lazy load animation components
export const LazyAnimatedStats = dynamic(() => import('../animations/animated-stats'), {
  loading: () => <SectionFallback height="h-64" title="Ładowanie statystyk..." />,
  ssr: false
})

export const LazyDevelopmentTimeline = dynamic(() => import('../animations/development-timeline'), {
  loading: () => <SectionFallback height="h-96" title="Ładowanie osi czasu..." />,
  ssr: false
})

// Lazy load blog components
export const LazyBlogCard = dynamic(() => import('../blog/blog-card'), {
  loading: () => <div className="w-full h-48 bg-gray-200 animate-pulse rounded-lg" />
})

export const LazyBlogPostModal = dynamic(() => import('../blog/blog-post-modal'), {
  loading: () => <SectionFallback height="h-96" title="Ładowanie wpisu..." />,
  ssr: false
})

// Lazy load mobile components
export const LazyMobileCTAButtons = dynamic(() => import('../mobile/mobile-cta-buttons'), {
  loading: () => <OptimizedSpinner size="sm" className="fixed bottom-20 right-4" />,
  ssr: false
})
