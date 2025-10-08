/**
 * Tests for useAnalytics hook
 */

import { renderHook } from '@testing-library/react'
import { jest } from '@jest/globals'
import { useAnalytics } from '../use-analytics'

// Mock analytics library
jest.mock('../../lib/analytics', () => ({
  event: jest.fn(),
}))

const { event } = require('../../lib/analytics')

describe('useAnalytics Hook', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('Hook Initialization', () => {
    it('should return all expected methods', () => {
      const { result } = renderHook(() => useAnalytics())

      expect(result.current).toHaveProperty('trackEvent')
      expect(result.current).toHaveProperty('trackBookingStart')
      expect(result.current).toHaveProperty('trackBookingComplete')
      expect(result.current).toHaveProperty('trackContactFormSubmit')
      expect(result.current).toHaveProperty('trackServiceView')
      expect(result.current).toHaveProperty('trackBlogPostView')
    })

    it('should return functions', () => {
      const { result } = renderHook(() => useAnalytics())

      expect(typeof result.current.trackEvent).toBe('function')
      expect(typeof result.current.trackBookingStart).toBe('function')
      expect(typeof result.current.trackBookingComplete).toBe('function')
      expect(typeof result.current.trackContactFormSubmit).toBe('function')
      expect(typeof result.current.trackServiceView).toBe('function')
      expect(typeof result.current.trackBlogPostView).toBe('function')
    })
  })

  describe('trackEvent Method', () => {
    it('should call analytics.event with correct parameters', () => {
      const { result } = renderHook(() => useAnalytics())

      result.current.trackEvent('button_click', 'Engagement', 'Contact button', 1)

      expect(event).toHaveBeenCalledWith({
        action: 'button_click',
        category: 'Engagement',
        label: 'Contact button',
        value: 1,
      })
    })

    it('should handle optional parameters (label only)', () => {
      const { result } = renderHook(() => useAnalytics())

      result.current.trackEvent('button_click', 'Engagement', 'Contact button')

      expect(event).toHaveBeenCalledWith({
        action: 'button_click',
        category: 'Engagement',
        label: 'Contact button',
        value: undefined,
      })
    })

    it('should handle optional parameters (no label, no value)', () => {
      const { result } = renderHook(() => useAnalytics())

      result.current.trackEvent('button_click', 'Engagement')

      expect(event).toHaveBeenCalledWith({
        action: 'button_click',
        category: 'Engagement',
        label: undefined,
        value: undefined,
      })
    })

    it('should handle missing parameters gracefully', () => {
      const { result } = renderHook(() => useAnalytics())

      // Should not throw error
      expect(() => {
        result.current.trackEvent('button_click')
      }).not.toThrow()

      expect(event).toHaveBeenCalledWith({
        action: 'button_click',
        category: undefined,
        label: undefined,
        value: undefined,
      })
    })
  })

  describe('Specific Tracking Methods', () => {
    it('trackBookingStart should call event with correct parameters', () => {
      const { result } = renderHook(() => useAnalytics())

      result.current.trackBookingStart()

      expect(event).toHaveBeenCalledWith({
        action: 'booking_start',
        category: 'Booking',
        label: 'User started booking process',
        value: undefined,
      })
    })

    it('trackBookingComplete should call event with service type', () => {
      const { result } = renderHook(() => useAnalytics())

      result.current.trackBookingComplete('Terapia ręki')

      expect(event).toHaveBeenCalledWith({
        action: 'booking_complete',
        category: 'Booking',
        label: 'Terapia ręki',
        value: undefined,
      })
    })

    it('trackContactFormSubmit should call event with correct parameters', () => {
      const { result } = renderHook(() => useAnalytics())

      result.current.trackContactFormSubmit()

      expect(event).toHaveBeenCalledWith({
        action: 'contact_form_submit',
        category: 'Contact',
        label: 'Contact form submitted',
        value: undefined,
      })
    })

    it('trackServiceView should call event with service name', () => {
      const { result } = renderHook(() => useAnalytics())

      result.current.trackServiceView('Terapia pedagogiczna')

      expect(event).toHaveBeenCalledWith({
        action: 'service_view',
        category: 'Services',
        label: 'Terapia pedagogiczna',
        value: undefined,
      })
    })

    it('trackBlogPostView should call event with post title', () => {
      const { result } = renderHook(() => useAnalytics())

      result.current.trackBlogPostView('Rozwój mowy u dzieci')

      expect(event).toHaveBeenCalledWith({
        action: 'blog_post_view',
        category: 'Blog',
        label: 'Rozwój mowy u dzieci',
        value: undefined,
      })
    })
  })

  describe('Multiple Calls', () => {
    it('should call multiple tracking methods in sequence', () => {
      const { result } = renderHook(() => useAnalytics())

      result.current.trackBookingStart()
      result.current.trackServiceView('Terapia ręki')
      result.current.trackContactFormSubmit()

      expect(event).toHaveBeenCalledTimes(3)

      expect(event).toHaveBeenNthCalledWith(1, {
        action: 'booking_start',
        category: 'Booking',
        label: 'User started booking process',
        value: undefined,
      })

      expect(event).toHaveBeenNthCalledWith(2, {
        action: 'service_view',
        category: 'Services',
        label: 'Terapia ręki',
        value: undefined,
      })

      expect(event).toHaveBeenNthCalledWith(3, {
        action: 'contact_form_submit',
        category: 'Contact',
        label: 'Contact form submitted',
        value: undefined,
      })
    })

    it('should track each call independently', () => {
      const { result } = renderHook(() => useAnalytics())

      result.current.trackBookingComplete('Service A')
      result.current.trackBookingComplete('Service B')

      expect(event).toHaveBeenCalledTimes(2)

      expect(event).toHaveBeenNthCalledWith(1, {
        action: 'booking_complete',
        category: 'Booking',
        label: 'Service A',
        value: undefined,
      })

      expect(event).toHaveBeenNthCalledWith(2, {
        action: 'booking_complete',
        category: 'Booking',
        label: 'Service B',
        value: undefined,
      })
    })

    it('should not interfere between different tracking methods', () => {
      const { result } = renderHook(() => useAnalytics())

      result.current.trackEvent('custom_action', 'Custom', 'Custom label', 42)
      result.current.trackBookingComplete('Service A')

      expect(event).toHaveBeenCalledTimes(2)

      expect(event).toHaveBeenNthCalledWith(1, {
        action: 'custom_action',
        category: 'Custom',
        label: 'Custom label',
        value: 42,
      })

      expect(event).toHaveBeenNthCalledWith(2, {
        action: 'booking_complete',
        category: 'Booking',
        label: 'Service A',
        value: undefined,
      })
    })
  })

  describe('Edge Cases', () => {
    it('should handle empty strings', () => {
      const { result } = renderHook(() => useAnalytics())

      result.current.trackEvent('', '', '', 0)

      expect(event).toHaveBeenCalledWith('', {
        event_category: '',
        event_label: '',
        value: 0,
      })
    })

    it('should handle special characters in labels', () => {
      const { result } = renderHook(() => useAnalytics())

      const specialChars = 'Test with polskie znaki: ąęśćłóźż'
      result.current.trackEvent('special_test', 'Special', specialChars)

      expect(event).toHaveBeenCalledWith('special_test', {
        event_category: 'Special',
        event_label: specialChars,
        value: undefined,
      })
    })

    it('should handle very long strings', () => {
      const { result } = renderHook(() => useAnalytics())

      const longString = 'A'.repeat(1000)
      result.current.trackEvent('long_test', 'Long Category', longString)

      expect(event).toHaveBeenCalledWith('long_test', {
        event_category: 'Long Category',
        event_label: longString,
        value: undefined,
      })
    })

    it('should handle numeric values correctly', () => {
      const { result } = renderHook(() => useAnalytics())

      result.current.trackEvent('numeric_test', 'Numbers', 'Test with numbers', 123.45)

      expect(event).toHaveBeenCalledWith('numeric_test', {
        event_category: 'Numbers',
        event_label: 'Test with numbers',
        value: 123.45,
      })
    })

    it('should handle zero values', () => {
      const { result } = renderHook(() => useAnalytics())

      result.current.trackEvent('zero_test', 'Zero', 'Test with zero', 0)

      expect(event).toHaveBeenCalledWith('zero_test', {
        event_category: 'Zero',
        event_label: 'Test with zero',
        value: 0,
      })
    })

    it('should handle negative values', () => {
      const { result } = renderHook(() => useAnalytics())

      result.current.trackEvent('negative_test', 'Negative', 'Test with negative', -1)

      expect(event).toHaveBeenCalledWith('negative_test', {
        event_category: 'Negative',
        event_label: 'Test with negative',
        value: -1,
      })
    })

    it('should handle null and undefined values', () => {
      const { result } = renderHook(() => useAnalytics())

      result.current.trackEvent('null_test', null as any, undefined as any, null as any)

      expect(event).toHaveBeenCalledWith('null_test', {
        event_category: null,
        event_label: undefined,
        value: null,
      })
    })
  })

  describe('Re-render Behavior', () => {
    it('should maintain same function references across re-renders', () => {
      const { result, rerender } = renderHook(() => useAnalytics())

      const initialTrackEvent = result.current.trackEvent
      const initialTrackBookingStart = result.current.trackBookingStart

      rerender()

      // Functions should remain the same reference (memoized)
      expect(result.current.trackEvent).toBe(initialTrackEvent)
      expect(result.current.trackBookingStart).toBe(initialTrackBookingStart)
    })
  })

  describe('Error Handling', () => {
    it('should handle analytics.event errors gracefully', () => {
      event.mockImplementationOnce(() => {
        throw new Error('Analytics error')
      })

      const { result } = renderHook(() => useAnalytics())

      // Should not throw error
      expect(() => {
        result.current.trackEvent('test', 'Test')
      }).not.toThrow()
    })
  })
})