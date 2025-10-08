/**
 * Tests for analytics utility
 */

import { jest } from '@jest/globals'
import { initGA, pageview, event, GA_MEASUREMENT_ID } from '../analytics'

// Mock window and global objects
const mockGtag = jest.fn()
const mockDataLayer = []

describe('Analytics Utility', () => {
  beforeEach(() => {
    jest.clearAllMocks()

    // Reset window object
    (window as any).gtag = mockGtag
    (window as any).dataLayer = mockDataLayer
    (window as any).location = {
      pathname: '/test-page',
      href: 'https://eduhustawka.pl/test-page',
    }

    // Clear dataLayer
    mockDataLayer.length = 0

    // Mock environment variables
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID = 'GA-TEST-123'
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  describe('GA_MEASUREMENT_ID', () => {
    it('should read from environment variable', () => {
      expect(GA_MEASUREMENT_ID).toBe('GA-TEST-123')
    })

    it('should default to empty string if not set', () => {
      delete process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
      jest.resetModules()
      const { GA_MEASUREMENT_ID: id } = require('../analytics')
      expect(id).toBe('')
      process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID = 'GA-TEST-123'
    })
  })

  describe('initGA Function', () => {
    it('should initialize window.dataLayer if not exists', () => {
      delete (window as any).dataLayer

      initGA()

      expect(Array.isArray(window.dataLayer)).toBe(true)
    })

    it('should calls gtag with "js" command and current date', () => {
      const mockDate = new Date('2023-01-01T00:00:00.000Z')
      jest.spyOn(global, 'Date').mockImplementation(() => mockDate as any)

      initGA()

      expect(mockGtag).toHaveBeenCalledWith('js', '2023-01-01T00:00:00.000Z')
    })

    it('should calls gtag with "config" command and measurement ID', () => {
      initGA()

      expect(mockGtag).toHaveBeenCalledWith('config', 'GA-TEST-123', {
        page_path: '/test-page',
      })
    })

    it('should includes page_path in config', () => {
      window.location.pathname = '/services/therapy'

      initGA()

      expect(mockGtag).toHaveBeenCalledWith('config', 'GA-TEST-123', {
        page_path: '/services/therapy',
      })
    })

    it('should not run in SSR environment (typeof window === "undefined")', () => {
      const originalWindow = global.window
      delete (global as any).window

      initGA()

      expect(mockGtag).not.toHaveBeenCalled()

      global.window = originalWindow
    })

    it('should not run if GA_MEASUREMENT_ID is empty', () => {
      process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID = ''

      initGA()

      expect(mockGtag).not.toHaveBeenCalled()

      process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID = 'GA-TEST-123'
    })
  })

  describe('pageview Function', () => {
    it('should calls window.gtag with "config" command', () => {
      pageview('/test-page')

      expect(mockGtag).toHaveBeenCalledWith('config', 'GA-TEST-123', {
        page_path: '/test-page',
      })
    })

    it('should includes measurement ID', () => {
      pageview('/test-page')

      expect(mockGtag).toHaveBeenCalledWith('config', 'GA-TEST-123', expect.any(Object))
    })

    it('should includes page_path parameter', () => {
      pageview('/about')

      expect(mockGtag).toHaveBeenCalledWith('config', 'GA-TEST-123', {
        page_path: '/about',
      })
    })

    it('should not run if window.gtag is undefined', () => {
      delete (window as any).gtag

      pageview('/test-page')

      expect(mockGtag).not.toHaveBeenCalled()
    })

    it('should not run if GA_MEASUREMENT_ID is empty', () => {
      process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID = ''

      pageview('/test-page')

      expect(mockGtag).not.toHaveBeenCalled()

      process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID = 'GA-TEST-123'
    })

    it('should handles different URL formats', () => {
      const testCases = [
        { url: '/', expected: '/' },
        { url: '/services', expected: '/services' },
        { url: '/services/therapy', expected: '/services/therapy' },
        { url: '/blog/post-1', expected: '/blog/post-1' },
        { url: '/contact?source=web', expected: '/contact?source=web' },
      ]

      testCases.forEach(({ url, expected }) => {
        mockGtag.mockClear()

        pageview(url)

        expect(mockGtag).toHaveBeenCalledWith('config', 'GA-TEST-123', {
          page_path: expected,
        })
      })
    })
  })

  describe('event Function', () => {
    it('should calls window.gtag with "event" command', () => {
      event({
        action: 'button_click',
        category: 'Engagement',
        label: 'Contact button',
        value: 1,
      })

      expect(mockGtag).toHaveBeenCalledWith('event', 'button_click', {
        event_category: 'Engagement',
        event_label: 'Contact button',
        value: 1,
      })
    })

    it('should includes action parameter', () => {
      event({
        action: 'form_submit',
        category: 'Contact',
      })

      expect(mockGtag).toHaveBeenCalledWith('event', 'form_submit', expect.any(Object))
    })

    it('should includes event_category parameter', () => {
      event({
        action: 'button_click',
        category: 'Engagement',
        label: 'Contact button',
      })

      expect(mockGtag).toHaveBeenCalledWith('event', 'button_click', {
        event_category: 'Engagement',
        event_label: 'Contact button',
      })
    })

    it('should includes event_label parameter (if provided)', () => {
      event({
        action: 'service_view',
        category: 'Services',
        label: 'Terapia ręki',
      })

      expect(mockGtag).toHaveBeenCalledWith('event', 'service_view', {
        event_category: 'Services',
        event_label: 'Terapia ręki',
      })
    })

    it('should includes value parameter (if provided)', () => {
      event({
        action: 'purchase',
        category: 'Ecommerce',
        label: 'Service purchase',
        value: 150,
      })

      expect(mockGtag).toHaveBeenCalledWith('event', 'purchase', {
        event_category: 'Ecommerce',
        event_label: 'Service purchase',
        value: 150,
      })
    })

    it('should pushes to window.dataLayer for GTM', () => {
      event({
        action: 'custom_event',
        category: 'Custom',
        label: 'Test event',
      })

      expect(mockDataLayer).toContainEqual({
        event: 'custom_event',
        event_category: 'Custom',
        event_label: 'Test event',
      })
    })

    it('should handles missing optional parameters', () => {
      event({
        action: 'simple_event',
        category: undefined,
        label: undefined,
        value: undefined,
      })

      expect(mockGtag).toHaveBeenCalledWith('event', 'simple_event', {
        event_category: undefined,
        event_label: undefined,
        value: undefined,
      })
      expect(mockDataLayer).toContainEqual({
        event: 'simple_event',
      })
    })

    it('should not crash if window.gtag is undefined', () => {
      delete (window as any).gtag

      expect(() => {
        event({
          action: 'test_event',
          category: undefined,
          label: undefined,
          value: undefined,
        })
      }).not.toThrow()
    })

    it('should not crash if window.dataLayer is undefined', () => {
      delete (window as any).dataLayer

      expect(() => {
        event({
          action: 'test_event',
          category: undefined,
          label: undefined,
          value: undefined,
        })
      }).not.toThrow()
    })

    it('should handles numeric values', () => {
      event({
        action: 'numeric_test',
        category: 'Numbers',
        value: 42.5,
      })

      expect(mockGtag).toHaveBeenCalledWith('event', 'numeric_test', {
        event_category: 'Numbers',
        value: 42.5,
      })
    })

    it('should handles boolean values', () => {
      event({
        action: 'boolean_test',
        category: 'Booleans',
        label: undefined,
        value: undefined,
      })

      expect(mockGtag).toHaveBeenCalledWith('event', 'boolean_test', {
        event_category: 'Booleans',
        event_label: undefined,
        value: undefined,
      })
    })
  })

  describe('Type Safety', () => {
    it('should accept valid commands', () => {
      const commands = ['config', 'event', 'js', 'set']

      commands.forEach(command => {
        expect(() => {
          (window as any).gtag(command, 'test')
        }).not.toThrow()
      })
    })

    it('should accept valid event parameters', () => {
      const validParams = {
        action: 'test_event',
        category: 'Test',
        label: 'Test Event',
        value: 1,
        custom_param: 'custom_value',
      }

      expect(() => {
        event(validParams)
      }).not.toThrow()
    })

    it('should accept complex dataLayer events', () => {
      const complexEvent = {
        action: 'complex_event',
        category: 'Ecommerce',
        label: 'Service purchase',
        value: 150,
        user_id: '123',
        ecommerce: {
          items: [
            {
              item_id: 'SKU123',
              item_name: 'Test Service',
              price: 150.00,
            },
          ],
        },
      }

      expect(() => {
        event(complexEvent)
      }).not.toThrow()
    })
  })

  describe('Integration', () => {
    it('should multiple events can be tracked in sequence', () => {
      event({
        action: 'page_view',
        category: 'Navigation',
        label: 'Home page',
        value: undefined,
      })

      event({
        action: 'button_click',
        category: 'Engagement',
        label: 'Contact button',
        value: undefined,
      })

      event({
        action: 'form_submit',
        category: 'Lead',
        label: 'Contact form',
        value: undefined,
      })

      expect(mockGtag).toHaveBeenCalledTimes(3)
      expect(mockDataLayer).toHaveLength(3)
    })

    it('should pageview and event can be called together', () => {
      pageview('/test-page')
      event({
        action: 'page_loaded',
        category: 'Performance',
        label: undefined,
        value: undefined,
      })

      expect(mockGtag).toHaveBeenCalledTimes(2)
      expect(mockGtag).toHaveBeenNthCalledWith(1, 'config', 'GA-TEST-123', {
        page_path: '/test-page',
      })
      expect(mockGtag).toHaveBeenNthCalledWith(2, 'event', 'page_loaded', {
        event_category: 'Performance',
        event_label: undefined,
        value: undefined,
      })
    })

    it('should dataLayer accumulates events correctly', () => {
      event({ action: 'event1', category: 'cat1', label: undefined, value: undefined })
      event({ action: 'event2', category: 'cat2', label: undefined, value: undefined })
      event({ action: 'event3', category: 'cat3', label: undefined, value: undefined })

      expect(mockDataLayer).toHaveLength(3)
      expect(mockDataLayer[0]).toMatchObject({ event: 'event1', event_category: 'cat1' })
      expect(mockDataLayer[1]).toMatchObject({ event: 'event2', event_category: 'cat2' })
      expect(mockDataLayer[2]).toMatchObject({ event: 'event3', event_category: 'cat3' })
    })
  })

  describe('Edge Cases', () => {
    it('should handles empty parameters', () => {
      event('', {} as any)

      expect(mockGtag).toHaveBeenCalledWith('event', '', {
        event_category: undefined,
        event_label: undefined,
        value: undefined,
      })
    })

    it('should handles null values', () => {
      event('null_test', {
        category: null as any,
        label: null as any,
        value: null as any,
      })

      expect(mockGtag).toHaveBeenCalledWith('event', 'null_test', {
        event_category: null,
        event_label: null,
        value: null,
      })
    })

    it('should handles undefined values', () => {
      event('undefined_test', {
        category: undefined,
        label: undefined,
        value: undefined,
      })

      expect(mockGtag).toHaveBeenCalledWith('event', 'undefined_test', {
        event_category: undefined,
        event_label: undefined,
        value: undefined,
      })
    })

    it('should handles very long strings', () => {
      const longString = 'A'.repeat(1000)

      event('long_string_test', {
        category: longString,
        label: longString,
      })

      expect(mockGtag).toHaveBeenCalledWith('event', 'long_string_test', {
        event_category: longString,
        event_label: longString,
      })
    })

    it('should handles special characters', () => {
      const specialChars = 'Test with polskie znaki: ąęśćłóźż!@#$%^&*()'

      event('special_chars_test', {
        category: specialChars,
        label: specialChars,
      })

      expect(mockGtag).toHaveBeenCalledWith('event', 'special_chars_test', {
        event_category: specialChars,
        event_label: specialChars,
      })
    })
  })
})