/**
 * SEO utilities for enhanced search engine optimization
 */

import { Metadata } from 'next'

export interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article' | 'profile'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
  noindex?: boolean
  nofollow?: boolean
}

/**
 * Generate comprehensive metadata for Next.js pages
 */
export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    canonical,
    ogImage = '/images/og-default.jpg',
    ogType = 'website',
    publishedTime,
    modifiedTime,
    author,
    section,
    tags = [],
    noindex = false,
    nofollow = false,
  } = config

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://eduhustawka.pl'
  const fullTitle = `${title} | EduHustawka - Terapia Pedagogiczna`
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : undefined

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: author ? [{ name: author }] : [{ name: 'Joanna Hustawka' }],
    creator: 'EduHustawka',
    publisher: 'EduHustawka',
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: fullCanonical,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: fullCanonical,
      siteName: 'EduHustawka',
      images: [
        {
          url: `${baseUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'pl_PL',
      type: ogType,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(section && { section }),
      ...(tags.length > 0 && { tags }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [`${baseUrl}${ogImage}`],
      creator: '@eduhustawka',
    },
    other: {
      'article:author': author || 'Joanna Hustawka',
      'article:section': section || 'Terapia Pedagogiczna',
      'article:tag': tags.join(', '),
    },
  }
}

/**
 * Generate structured data (JSON-LD) for different content types
 */
export function generateStructuredData(type: string, data: any) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://eduhustawka.pl'

  const commonData = {
    '@context': 'https://schema.org',
    '@type': type,
  }

  switch (type) {
    case 'LocalBusiness':
      return {
        ...commonData,
        name: 'EduHustawka - Terapia Pedagogiczna',
        description: 'Profesjonalna terapia pedagogiczna dla dzieci. Wsparcie w nauce, rozwoju i przezwyciężaniu trudności edukacyjnych.',
        url: baseUrl,
        telephone: '+48531509008',
        email: 'kontakt@eduhustawka.pl',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Polna 17',
          addressLocality: 'Pomigacze',
          postalCode: '83-021',
          addressCountry: 'PL',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 54.2619,
          longitude: 19.0208,
        },
        openingHours: [
          'Mo-Fr 08:00-16:00',
        ],
        priceRange: '$$',
        image: `${baseUrl}/images/logo.png`,
        logo: `${baseUrl}/images/logo.png`,
        sameAs: [
          'https://www.facebook.com/eduhustawka',
          'https://www.instagram.com/eduhustawka',
        ],
        serviceArea: {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: 54.2619,
            longitude: 19.0208,
          },
          geoRadius: '50000', // 50km radius
        },
        ...data,
      }

    case 'Person':
      return {
        ...commonData,
        name: 'Joanna Hustawka',
        jobTitle: 'Terapeuta Pedagogiczny',
        worksFor: {
          '@type': 'Organization',
          name: 'EduHustawka',
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Pomigacze',
          addressCountry: 'PL',
        },
        email: 'kontakt@eduhustawka.pl',
        telephone: '+48531509008',
        url: baseUrl,
        image: `${baseUrl}/images/joanna-hustawka.jpg`,
        ...data,
      }

    case 'Service':
      return {
        ...commonData,
        provider: {
          '@type': 'LocalBusiness',
          name: 'EduHustawka',
        },
        areaServed: {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: 54.2619,
            longitude: 19.0208,
          },
          geoRadius: '50000',
        },
        ...data,
      }

    case 'Article':
      return {
        ...commonData,
        headline: data.title,
        description: data.description,
        author: {
          '@type': 'Person',
          name: data.author || 'Joanna Hustawka',
        },
        publisher: {
          '@type': 'Organization',
          name: 'EduHustawka',
          logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/images/logo.png`,
          },
        },
        datePublished: data.publishedTime,
        dateModified: data.modifiedTime || data.publishedTime,
        image: data.image ? `${baseUrl}${data.image}` : `${baseUrl}/images/og-default.jpg`,
        url: `${baseUrl}${data.url}`,
        mainEntityOfPage: `${baseUrl}${data.url}`,
        ...data,
      }

    case 'FAQPage':
      return {
        ...commonData,
        mainEntity: data.questions?.map((q: any) => ({
          '@type': 'Question',
          name: q.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: q.answer,
          },
        })) || [],
        ...data,
      }

    case 'BreadcrumbList':
      return {
        ...commonData,
        itemListElement: data.items?.map((item: any, index: number) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: `${baseUrl}${item.url}`,
        })) || [],
        ...data,
      }

    default:
      return {
        ...commonData,
        ...data,
      }
  }
}

/**
 * Generate breadcrumb data
 */
export function generateBreadcrumbs(path: string) {
  const segments = path.split('/').filter(Boolean)
  const breadcrumbs = [
    { name: 'Strona główna', url: '/' },
  ]

  let currentPath = ''
  segments.forEach((segment) => {
    currentPath += `/${segment}`
    
    // Convert URL segments to readable names
    const name = segment
      .replace(/-/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase())
    
    breadcrumbs.push({
      name,
      url: currentPath,
    })
  })

  return breadcrumbs
}

/**
 * Generate sitemap data
 */
export function generateSitemapUrls() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://eduhustawka.pl'
  
  const staticPages = [
    { url: '/', priority: 1.0, changefreq: 'weekly' },
    { url: '/o-mnie', priority: 0.8, changefreq: 'monthly' },
    { url: '/uslugi', priority: 0.9, changefreq: 'weekly' },
    { url: '/kontakt', priority: 0.7, changefreq: 'monthly' },
    { url: '/blog', priority: 0.8, changefreq: 'weekly' },
    { url: '/rezerwacja', priority: 0.6, changefreq: 'monthly' },
  ]

  const servicePages = [
    '/uslugi/terapia-pedagogiczna',
    '/uslugi/terapia-reki',
    '/uslugi/wsparcie-dzieci-z-autyzmem',
    '/uslugi/trening-sluchowy-johansena',
    '/uslugi/integracja-sensoryczna',
    '/uslugi/trening-umiejetnosci-spolecznych',
    '/uslugi/wsparcie-emocjonalne',
    '/uslugi/wczesne-wspomaganie-rozwoju',
  ].map(url => ({
    url,
    priority: 0.8,
    changefreq: 'monthly' as const,
  }))

  return [...staticPages, ...servicePages].map(page => ({
    ...page,
    url: `${baseUrl}${page.url}`,
    lastmod: new Date().toISOString(),
  }))
}

/**
 * Optimize images for SEO
 */
export function optimizeImageForSEO(src: string, alt: string, title?: string) {
  return {
    src,
    alt,
    title: title || alt,
    loading: 'lazy' as const,
    decoding: 'async' as const,
  }
}

/**
 * Generate canonical URL
 */
export function generateCanonicalUrl(path: string) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://eduhustawka.pl'
  return `${baseUrl}${path}`
}

/**
 * Validate and clean meta description
 */
export function optimizeMetaDescription(description: string, maxLength: number = 160) {
  if (description.length <= maxLength) {
    return description
  }
  
  return description.substring(0, maxLength - 3).trim() + '...'
}

/**
 * Generate keywords from content
 */
export function extractKeywords(content: string, maxKeywords: number = 10) {
  const commonWords = ['i', 'a', 'o', 'w', 'z', 'na', 'do', 'dla', 'się', 'że', 'to', 'jest', 'lub', 'oraz']
  
  const words = content
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 3 && !commonWords.includes(word))
  
  const wordCount = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1
    return acc
  }, {} as Record<string, number>)
  
  return Object.entries(wordCount)
    .sort(([, a], [, b]) => b - a)
    .slice(0, maxKeywords)
    .map(([word]) => word)
}
