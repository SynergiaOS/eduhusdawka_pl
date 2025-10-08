/**
 * Tests for SEO utilities
 */

import { jest } from '@jest/globals'
import {
  generateMetadata,
  generateStructuredData,
  generateBreadcrumbs,
  generateSitemapUrls,
  optimizeImageForSEO,
  generateCanonicalUrl,
  optimizeMetaDescription,
  extractKeywords,
} from '../seo-utils'

describe('SEO Utilities', () => {
  beforeEach(() => {
    jest.clearAllMocks()

    // Mock environment variables
    process.env.NEXT_PUBLIC_BASE_URL = 'https://eduhustawka.pl'
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  describe('generateMetadata Function', () => {
    const baseConfig = {
      title: 'Test Page',
      description: 'Test description',
      keywords: ['test', 'seo'],
      canonical: '/test-page',
    }

    it('should generate complete metadata object', () => {
      const metadata = generateMetadata(baseConfig)

      expect(metadata).toHaveProperty('title')
      expect(metadata).toHaveProperty('description')
      expect(metadata).toHaveProperty('keywords')
      expect(metadata).toHaveProperty('authors')
      expect(metadata).toHaveProperty('robots')
      expect(metadata).toHaveProperty('alternates')
      expect(metadata).toHaveProperty('openGraph')
      expect(metadata).toHaveProperty('twitter')
    })

    it('should include title with site suffix', () => {
      const metadata = generateMetadata(baseConfig)

      expect(metadata.title).toBe('Test Page | EduHustawka - Terapia Pedagogiczna')
    })

    it('should include description', () => {
      const metadata = generateMetadata(baseConfig)

      expect(metadata.description).toBe('Test description')
    })

    it('should include keywords (comma-separated)', () => {
      const metadata = generateMetadata(baseConfig)

      expect(metadata.keywords).toBe('test, seo')
    })

    it('should include authors (default: Joanna Hustawka)', () => {
      const metadata = generateMetadata(baseConfig)

      expect(metadata.authors).toContain({ name: 'Joanna Hustawka' })
    })

    it('should include robots configuration', () => {
      const metadata = generateMetadata(baseConfig)

      expect(metadata.robots).toHaveProperty('index')
      expect(metadata.robots).toHaveProperty('follow')
    })

    it('should include canonical URL in alternates', () => {
      const metadata = generateMetadata(baseConfig)

      expect(metadata.alternates.canonical).toBe('https://eduhustawka.pl/test-page')
    })

    it('should include OpenGraph data', () => {
      const metadata = generateMetadata(baseConfig)

      expect(metadata.openGraph).toHaveProperty('title')
      expect(metadata.openGraph).toHaveProperty('description')
      expect(metadata.openGraph).toHaveProperty('url')
      expect(metadata.openGraph).toHaveProperty('images')
      expect(metadata.openGraph).toHaveProperty('locale')
      expect(metadata.openGraph).toHaveProperty('type')
    })

    it('should include Twitter card data', () => {
      const metadata = generateMetadata(baseConfig)

      expect(metadata.twitter).toHaveProperty('card')
      expect(metadata.twitter).toHaveProperty('title')
      expect(metadata.twitter).toHaveProperty('description')
    })

    it('should include article metadata', () => {
      const config = {
        ...baseConfig,
        ogType: 'article' as const,
        publishedTime: '2023-01-01T00:00:00Z',
        modifiedTime: '2023-01-02T00:00:00Z',
        section: 'Blog',
        tags: ['therapy', 'education'],
      }

      const metadata = generateMetadata(config)

      expect(metadata.openGraph.type).toBe('article')
      expect(metadata.openGraph.publishedTime).toBe('2023-01-01T00:00:00Z')
      expect(metadata.openGraph.modifiedTime).toBe('2023-01-02T00:00:00Z')
      expect(metadata.openGraph.section).toBe('Blog')
      expect(metadata.openGraph.tags).toEqual(['therapy', 'education'])
    })

    it('should handle noindex and nofollow flags', () => {
      const config = {
        ...baseConfig,
        noindex: true,
        nofollow: true,
      }

      const metadata = generateMetadata(config)

      expect(metadata.robots.index).toBe(false)
      expect(metadata.robots.follow).toBe(false)
    })

    it('should use default OG image if not provided', () => {
      const metadata = generateMetadata(baseConfig)

      expect(metadata.openGraph.images).toHaveLength(1)
      expect(metadata.openGraph.images[0].url).toContain('eduhustawka')
    })

    it('should handle different ogType values', () => {
      const types = ['website', 'article', 'profile'] as const

      types.forEach(ogType => {
        const metadata = generateMetadata({ ...baseConfig, ogType })
        expect(metadata.openGraph.type).toBe(ogType)
      })
    })
  })

  describe('generateStructuredData Function', () => {
    it('should generate LocalBusiness schema with all required fields', () => {
      const structuredData = generateStructuredData('LocalBusiness', {})

      expect(structuredData['@context']).toBe('https://schema.org')
      expect(structuredData['@type']).toBe('LocalBusiness')
      expect(structuredData.name).toBe('EduHustawka - Terapia Pedagogiczna')
      expect(structuredData.description).toContain('terapia pedagogiczna')
      expect(structuredData.url).toBe('https://eduhustawka.pl')
      expect(structuredData.telephone).toBe('+48531509008')
      expect(structuredData.email).toBe('kontakt@eduhustawka.pl')
    })

    it('should generate Person schema for Joanna Hustawka', () => {
      const structuredData = generateStructuredData('Person', {})

      expect(structuredData['@type']).toBe('Person')
      expect(structuredData.name).toBe('Joanna Hustawka')
      expect(structuredData.jobTitle).toBe('Terapeuta Pedagogiczny')
      expect(structuredData.url).toBe('https://eduhustawka.pl')
    })

    it('should generate Service schema with provider and area served', () => {
      const structuredData = generateStructuredData('Service', {})

      expect(structuredData['@type']).toBe('Service')
      expect(structuredData.provider).toHaveProperty('name', 'EduHustawka')
      expect(structuredData.areaServed).toHaveProperty('geoRadius', '50000')
    })

    it('should generate Article schema with author and publisher', () => {
      const customData = {
        title: 'Test Article',
        publishedTime: '2023-01-01',
        author: 'Test Author',
      }

      const structuredData = generateStructuredData('Article', customData)

      expect(structuredData['@type']).toBe('Article')
      expect(structuredData.headline).toBe('Test Article')
      expect(structuredData.datePublished).toBe('2023-01-01')
      expect(structuredData.author).toHaveProperty('name', 'Test Author')
      expect(structuredData.publisher).toHaveProperty('name', 'EduHustawka')
    })

    it('should generate FAQPage schema with questions array', () => {
      const customData = {
        questions: [
          {
            question: 'Test Question',
            answer: 'Test Answer',
          },
        ],
      }

      const structuredData = generateStructuredData('FAQPage', customData)

      expect(structuredData['@type']).toBe('FAQPage')
      expect(structuredData.mainEntity).toHaveLength(1)
      expect(structuredData.mainEntity[0].name).toBe('Test Question')
    })

    it('should generate BreadcrumbList schema with items', () => {
      const customData = {
        items: [
          {
            name: 'Home',
            url: '/',
          },
        ],
      }

      const structuredData = generateStructuredData('BreadcrumbList', customData)

      expect(structuredData['@type']).toBe('BreadcrumbList')
      expect(structuredData.itemListElement).toHaveLength(1)
    })

    it('should include @context and @type for all schemas', () => {
      const schemaTypes = ['LocalBusiness', 'Person', 'Service', 'Article', 'FAQPage', 'BreadcrumbList']

      schemaTypes.forEach(type => {
        const structuredData = generateStructuredData(type, {})
        expect(structuredData['@context']).toBe('https://schema.org')
        expect(structuredData['@type']).toBe(type)
      })
    })

    it('should handle custom data merging', () => {
      const customData = {
        customField: 'custom value',
        anotherField: 'another value',
      }

      const structuredData = generateStructuredData('LocalBusiness', customData)

      expect(structuredData.customField).toBe('custom value')
      expect(structuredData.anotherField).toBe('another value')
    })

    it('should use correct base URL for all URLs', () => {
      const structuredData = generateStructuredData('Service', {})

      expect(structuredData.url).toBe('https://eduhustawka.pl')
      expect(structuredData.provider.name).toBe('EduHustawka')
    })
  })

  describe('generateBreadcrumbs Function', () => {
    it('should generate breadcrumbs from URL path', () => {
      const breadcrumbs = generateBreadcrumbs('/uslugi/terapia-reki')

      expect(breadcrumbs).toHaveLength(3)
      expect(breadcrumbs[0]).toMatchObject({
        name: 'Strona główna',
        url: '/',
      })
    })

    it('should include "Strona główna" as first item', () => {
      const breadcrumbs = generateBreadcrumbs('/test')

      expect(breadcrumbs[0]).toMatchObject({
        name: 'Strona główna',
        url: '/',
      })
    })

    it('should convert URL segments to readable names', () => {
      const breadcrumbs = generateBreadcrumbs('/uslugi/terapia-pedagogiczna')

      expect(breadcrumbs[1]).toMatchObject({
        name: 'Usługi',
        url: '/uslugi',
      })
      expect(breadcrumbs[2]).toMatchObject({
        name: 'Terapia pedagogiczna',
        url: '/uslugi/terapia-pedagogiczna',
      })
    })

    it('should handle single-level paths', () => {
      const breadcrumbs = generateBreadcrumbs('/o-mnie')

      expect(breadcrumbs).toHaveLength(2)
      expect(breadcrumbs[1]).toMatchObject({
        name: 'O mnie',
        url: '/o-mnie',
      })
    })

    it('should handle multi-level paths', () => {
      const breadcrumbs = generateBreadcrumbs('/blog/category/post-title')

      expect(breadcrumbs).toHaveLength(4)
      expect(breadcrumbs[1]).toMatchObject({ name: 'Blog' })
      expect(breadcrumbs[2]).toMatchObject({ name: 'Category' })
      expect(breadcrumbs[3]).toMatchObject({ name: 'Post title' })
    })

    it('should handle empty path (root)', () => {
      const breadcrumbs = generateBreadcrumbs('/')

      expect(breadcrumbs).toHaveLength(1)
      expect(breadcrumbs[0]).toMatchObject({
        name: 'Strona główna',
        url: '/',
      })
    })

    it('should replace hyphens with spaces', () => {
      const breadcrumbs = generateBreadcrumbs('/terapia-dla-dzieci-z-autyzmem')

      const lastItem = breadcrumbs[breadcrumbs.length - 1]
      expect(lastItem.name).toBe('Terapia dla dzieci z autyzmem')
    })

    it('should capitalize first letter of each word', () => {
      const breadcrumbs = generateBreadcrumbs('/uslugi-specjalistyczne')

      const lastItem = breadcrumbs[breadcrumbs.length - 1]
      expect(lastItem.name).toBe('Usługi specjalistyczne')
    })
  })

  describe('generateSitemapUrls Function', () => {
    it('should return array of sitemap URLs', () => {
      const urls = generateSitemapUrls()

      expect(Array.isArray(urls)).toBe(true)
      expect(urls.length).toBeGreaterThan(0)
    })

    it('should include static pages', () => {
      const urls = generateSitemapUrls()
      const urlStrings = urls.map(url => url.url)

      expect(urlStrings).toContain('https://eduhustawka.pl/')
      expect(urlStrings).toContain('https://eduhustawka.pl/o-mnie')
      expect(urlStrings).toContain('https://eduhustawka.pl/uslugi')
      expect(urlStrings).toContain('https://eduhustawka.pl/kontakt')
      expect(urlStrings).toContain('https://eduhustawka.pl/blog')
      expect(urlStrings).toContain('https://eduhustawka.pl/rezerwacja')
    })

    it('should include service pages', () => {
      const urls = generateSitemapUrls()
      const urlStrings = urls.map(url => url.url)

      const servicePages = urlStrings.filter(url => url.includes('/uslugi/'))
      expect(servicePages.length).toBeGreaterThan(0)
    })

    it('should include priority for each URL', () => {
      const urls = generateSitemapUrls()

      urls.forEach(url => {
        expect(url).toHaveProperty('priority')
        expect(typeof url.priority).toBe('number')
        expect(url.priority).toBeGreaterThanOrEqual(0)
        expect(url.priority).toBeLessThanOrEqual(1)
      })
    })

    it('should include changefreq for each URL', () => {
      const urls = generateSitemapUrls()

      urls.forEach(url => {
        expect(url).toHaveProperty('changefreq')
        expect(['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never']).toContain(url.changefreq)
      })
    })

    it('should include lastmod (ISO date string)', () => {
      const urls = generateSitemapUrls()

      urls.forEach(url => {
        expect(url).toHaveProperty('lastmod')
        expect(url.lastmod).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/)
      })
    })

    it('should use full URLs with base URL', () => {
      const urls = generateSitemapUrls()

      urls.forEach(url => {
        expect(url.url).toMatch(/^https:\/\/eduhustawka\.pl\//)
      })
    })
  })

  describe('optimizeImageForSEO Function', () => {
    it('should return object with src, alt, title', () => {
      const result = optimizeImageForSEO('/test-image.jpg', 'Test image')

      expect(result).toHaveProperty('src', '/test-image.jpg')
      expect(result).toHaveProperty('alt', 'Test image')
      expect(result).toHaveProperty('title')
    })

    it('should use alt as title if title not provided', () => {
      const result = optimizeImageForSEO('/test-image.jpg', 'Test image')

      expect(result.title).toBe('Test image')
    })

    it('should use provided title if available', () => {
      const result = optimizeImageForSEO('/test-image.jpg', 'Test image', 'Custom title')

      expect(result.title).toBe('Custom title')
    })

    it('should include loading="lazy"', () => {
      const result = optimizeImageForSEO('/test-image.jpg', 'Test image')

      expect(result).toHaveProperty('loading', 'lazy')
    })

    it('should include decoding="async"', () => {
      const result = optimizeImageForSEO('/test-image.jpg', 'Test image')

      expect(result).toHaveProperty('decoding', 'async')
    })
  })

  describe('generateCanonicalUrl Function', () => {
    it('should combine base URL with path', () => {
      const url = generateCanonicalUrl('/services')

      expect(url).toBe('https://eduhustawka.pl/services')
    })

    it('should handle paths with leading slash', () => {
      const url = generateCanonicalUrl('/services')

      expect(url).toBe('https://eduhustawka.pl/services')
    })

    it('should handle paths without leading slash', () => {
      const url = generateCanonicalUrl('services')

      expect(url).toBe('https://eduhustawka.pl/services')
    })

    it('should handle root path', () => {
      const url = generateCanonicalUrl('/')

      expect(url).toBe('https://eduhustawka.pl/')
    })

    it('should handle complex paths', () => {
      const url = generateCanonicalUrl('/blog/category/post-title')

      expect(url).toBe('https://eduhustawka.pl/blog/category/post-title')
    })
  })

  describe('optimizeMetaDescription Function', () => {
    it('should return description unchanged if under maxLength', () => {
      const description = 'Short description'
      const result = optimizeMetaDescription(description)

      expect(result).toBe(description)
    })

    it('should truncate description if over maxLength', () => {
      const longDescription = 'A'.repeat(200)
      const result = optimizeMetaDescription(longDescription, 160)

      expect(result.length).toBeLessThanOrEqual(163) // 160 + "..."
      expect(result).toMatch(/\.\.\.$/)
    })

    it('should add ellipsis (...) when truncating', () => {
      const longDescription = 'This is a very long description that should be truncated'
      const result = optimizeMetaDescription(longDescription, 30)

      expect(result).toMatch(/\.\.\.$/)
    })

    it('should use default maxLength of 160', () => {
      const longDescription = 'A'.repeat(200)
      const result = optimizeMetaDescription(longDescription)

      expect(result.length).toBeLessThanOrEqual(163) // 160 + "..."
    })

    it('should respect custom maxLength', () => {
      const longDescription = 'A'.repeat(100)
      const result = optimizeMetaDescription(longDescription, 50)

      expect(result.length).toBeLessThanOrEqual(53) // 50 + "..."
    })

    it('should trim whitespace before adding ellipsis', () => {
      const description = 'A'.repeat(158) + '  ' // With trailing spaces
      const result = optimizeMetaDescription(description, 160)

      expect(result).toMatch(/^A+\.+\.\.$/) // Should not have trailing spaces before ellipsis
    })
  })

  describe('extractKeywords Function', () => {
    it('should extract keywords from content', () => {
      const content = 'terapia pedagogiczna dla dzieci z trudnościami w nauce'
      const keywords = extractKeywords(content)

      expect(keywords).toContain('terapia')
      expect(keywords).toContain('pedagogiczna')
      expect(keywords).toContain('dzieci')
    })

    it('should filter out common Polish words', () => {
      const content = 'i a o w z na do dla się że to jest lub oraz'
      const keywords = extractKeywords(content)

      expect(keywords).toHaveLength(0) // All should be filtered out
    })

    it('should filter out words shorter than 4 characters', () => {
      const content = 'są ma kot duży pies mały'
      const keywords = extractKeywords(content)

      expect(keywords).toContain('duży')
      expect(keywords).toContain('mały')
      expect(keywords).not.toContain('ma')
      expect(keywords).not.toContain('kot')
    })

    it('should convert to lowercase', () => {
      const content = 'TERAPIA PEDAGOGICZNA DLA DZIECI'
      const keywords = extractKeywords(content)

      keywords.forEach(keyword => {
        expect(keyword).toBe(keyword.toLowerCase())
      })
    })

    it('should remove punctuation', () => {
      const content = 'terapia, pedagogiczna! dla dzieci? z trudnościami.'
      const keywords = extractKeywords(content)

      expect(keywords).toContain('terapia')
      expect(keywords).toContain('pedagogiczna')
      expect(keywords).not.toContain(',')
      expect(keywords).not.toContain('!')
      expect(keywords).not.toContain('?')
      expect(keywords).not.toContain('.')
    })

    it('should count word frequency', () => {
      const content = 'terapia terapia pedagogiczna terapia dzieci dzieci'
      const keywords = extractKeywords(content, 10)

      expect(keywords[0]).toBe('terapia') // Most frequent
      expect(keywords[1]).toBe('dzieci') // Second most frequent
      expect(keywords[2]).toBe('pedagogiczna') // Third most frequent
    })

    it('should return top N keywords (default: 10)', () => {
      const content = 'terapia pedagogiczna dzieci nauka edukacja rozwój wspieranie trudności diagnoza'
      const keywords = extractKeywords(content)

      expect(keywords.length).toBeLessThanOrEqual(10)
    })

    it('should respect custom maxKeywords parameter', () => {
      const content = 'terapia pedagogiczna dzieci nauka edukacja rozwój wspieranie trudności diagnoza metody'
      const keywords = extractKeywords(content, 5)

      expect(keywords.length).toBeLessThanOrEqual(5)
    })

    it('should handle empty content', () => {
      const keywords = extractKeywords('')

      expect(keywords).toHaveLength(0)
    })

    it('should handle content with only common words', () => {
      const content = 'i a o w z na do dla się że to jest lub oraz'
      const keywords = extractKeywords(content)

      expect(keywords).toHaveLength(0)
    })

    it('should handle content with repeated words', () => {
      const content = 'terapia terapia terapia terapia terapia'
      const keywords = extractKeywords(content)

      expect(keywords).toHaveLength(1)
      expect(keywords[0]).toBe('terapia')
    })
  })
})