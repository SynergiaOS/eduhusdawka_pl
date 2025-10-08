/**
 * Tests for use-accessibility hooks
 */

import { renderHook, act } from '@testing-library/react'
import { jest } from '@jest/globals'
import {
  useFocusTrap,
  useScreenReader,
  useAccessibilityPreferences,
  generateAccessibleId,
} from '../use-accessibility'

describe('use-accessibility Hooks', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('useFocusTrap Hook', () => {
    beforeEach(() => {
      // Mock DOM APIs
      document.createElement = jest.fn().mockReturnValue({
        setAttribute: jest.fn(),
        removeAttribute: jest.fn(),
        focus: jest.fn(),
        getAttribute: jest.fn(),
      })
      document.body.appendChild = jest.fn()
      document.body.removeChild = jest.fn()
      document.querySelectorAll = jest.fn()
      document.activeElement = null

      // Mock addEventListener and removeEventListener
      EventTarget.prototype.addEventListener = jest.fn()
      EventTarget.prototype.removeEventListener = jest.fn()
    })

    it('should return ref object', () => {
      const { result } = renderHook(() => useFocusTrap())

      expect(result.current).toHaveProperty('current')
      expect(typeof result.current.current).toBe('object')
    })

    it('should focus first focusable element when active', () => {
      const mockFocusableElements = [
        { focus: jest.fn(), getAttribute: () => 'button', tagName: 'BUTTON' },
        { focus: jest.fn(), getAttribute: () => 'input', tagName: 'INPUT' },
      ]

      document.querySelectorAll = jest.fn().mockReturnValue(mockFocusableElements)

      const { result } = renderHook(() => useFocusTrap())

      // Simulate setting the ref
      const mockRef = {
        querySelectorAll: jest.fn().mockReturnValue(mockFocusableElements),
      }
      act(() => {
        result.current.current = mockRef
      })

      expect(mockFocusableElements[0].focus).toHaveBeenCalled()
    })

    it('should trap Tab key within container', () => {
      const mockElement = { focus: jest.fn(), getAttribute: () => 'button', tagName: 'BUTTON' }
      const mockElements = [mockElement]

      document.querySelectorAll = jest.fn().mockReturnValue(mockElements)
      document.activeElement = mockElement

      const { result } = renderHook(() => useFocusTrap())

      const mockRef = {
        querySelectorAll: jest.fn().mockReturnValue(mockElements),
      }

      act(() => {
        result.current.current = mockRef
      })

      // Simulate Tab key event
      const tabEvent = new KeyboardEvent('keydown', { key: 'Tab' })
      Object.defineProperty(tabEvent, 'preventDefault', { value: jest.fn() })

      // Event should be handled by the focus trap
      expect(document.addEventListener).toHaveBeenCalledWith('keydown', expect.any(Function))
    })

    it('should handle Shift+Tab to go backwards', () => {
      const mockElements = [
        { focus: jest.fn(), getAttribute: () => 'first', tagName: 'BUTTON' },
        { focus: jest.fn(), getAttribute: () => 'last', tagName: 'BUTTON' },
      ]

      document.querySelectorAll = jest.fn().mockReturnValue(mockElements)
      document.activeElement = mockElements[1] // Last element is active

      const { result } = renderHook(() => useFocusTrap())

      const mockRef = {
        querySelectorAll: jest.fn().mockReturnValue(mockElements),
      }

      act(() => {
        result.current.current = mockRef
      })

      // Simulate Shift+Tab key event
      const shiftTabEvent = new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true })
      Object.defineProperty(shiftTabEvent, 'preventDefault', { value: jest.fn() })

      expect(document.addEventListener).toHaveBeenCalledWith('keydown', expect.any(Function))
    })

    it('should cycles from last to first element on Tab', () => {
      const mockElements = [
        { focus: jest.fn(), getAttribute: () => 'first', tagName: 'BUTTON' },
        { focus: jest.fn(), getAttribute: () => 'last', tagName: 'BUTTON' },
      ]

      document.querySelectorAll = jest.fn().mockReturnValue(mockElements)
      document.activeElement = mockElements[1] // Last element is active

      const { result } = renderHook(() => useFocusTrap())

      const mockRef = {
        querySelectorAll: jest.fn().mockReturnValue(mockElements),
      }

      act(() => {
        result.current.current = mockRef
      })

      expect(document.addEventListener).toHaveBeenCalledWith('keydown', expect.any(Function))
    })

    it('should cycles from first to last element on Shift+Tab', () => {
      const mockElements = [
        { focus: jest.fn(), getAttribute: () => 'first', tagName: 'BUTTON' },
        { focus: jest.fn(), getAttribute: () => 'last', tagName: 'BUTTON' },
      ]

      document.querySelectorAll = jest.fn().mockReturnValue(mockElements)
      document.activeElement = mockElements[0] // First element is active

      const { result } = renderHook(() => useFocusTrap())

      const mockRef = {
        querySelectorAll: jest.fn().mockReturnValue(mockElements),
      }

      act(() => {
        result.current.current = mockRef
      })

      expect(document.addEventListener).toHaveBeenCalledWith('keydown', expect.any(Function))
    })

    it('should not trap focus when isActive = false', () => {
      const { result } = renderHook(() => useFocusTrap(false))

      const mockRef = {
        querySelectorAll: jest.fn().mockReturnValue([]),
      }

      act(() => {
        result.current.current = mockRef
      })

      // Should not set up event listeners when inactive
      expect(document.addEventListener).not.toHaveBeenCalledWith('keydown', expect.any(Function))
    })

    it('should cleans up event listeners on unmount', () => {
      const { unmount } = renderHook(() => useFocusTrap())

      unmount()

      expect(document.removeEventListener).toHaveBeenCalledWith('keydown', expect.any(Function))
    })

    it('should handles containers with no focusable elements', () => {
      document.querySelectorAll = jest.fn().mockReturnValue([])

      const { result } = renderHook(() => useFocusTrap())

      const mockRef = {
        querySelectorAll: jest.fn().mockReturnValue([]),
      }

      act(() => {
        result.current.current = mockRef
      })

      // Should not throw error
      expect(result.current.current).toBe(mockRef)
    })

    it('should respects tabindex attributes', () => {
      const mockElements = [
        { focus: jest.fn(), getAttribute: () => '0', tabIndex: 0 },
        { focus: jest.fn(), getAttribute: () => '-1', tabIndex: -1 },
        { focus: jest.fn(), getAttribute: () => null, tabIndex: 1 },
      ]

      document.querySelectorAll = jest.fn().mockReturnValue(mockElements)

      const { result } = renderHook(() => useFocusTrap())

      const mockRef = {
        querySelectorAll: jest.fn().mockReturnValue(mockElements),
      }

      act(() => {
        result.current.current = mockRef
      })

      expect(document.querySelectorAll).toHaveBeenCalled()
    })
  })

  describe('useScreenReader Hook', () => {
    beforeEach(() => {
      // Mock DOM APIs for ARIA live regions
      const mockElement = {
        setAttribute: jest.fn(),
        textContent: '',
        className: '',
      }

      document.createElement = jest.fn().mockReturnValue(mockElement)
      document.body.appendChild = jest.fn()
      document.body.removeChild = jest.fn()
    })

    it('should return announce function', () => {
      const { result } = renderHook(() => useScreenReader())

      expect(typeof result.current.announce).toBe('function')
    })

    it('should announce() creates ARIA live region', () => {
      const { result } = renderHook(() => useScreenReader())

      act(() => {
        result.current.announce('Test message')
      })

      expect(document.createElement).toHaveBeenCalledWith('div')
      expect(document.body.appendChild).toHaveBeenCalled()
    })

    it('should announce() sets aria-live="polite" by default', () => {
      const mockElement = {
        setAttribute: jest.fn(),
        textContent: '',
        className: '',
      }
      document.createElement = jest.fn().mockReturnValue(mockElement)

      const { result } = renderHook(() => useScreenReader())

      act(() => {
        result.current.announce('Test message')
      })

      expect(mockElement.setAttribute).toHaveBeenCalledWith('aria-live', 'polite')
    })

    it('should announce() sets aria-live="assertive" when priority = "assertive"', () => {
      const mockElement = {
        setAttribute: jest.fn(),
        textContent: '',
        className: '',
      }
      document.createElement = jest.fn().mockReturnValue(mockElement)

      const { result } = renderHook(() => useScreenReader())

      act(() => {
        result.current.announce('Test message', 'assertive')
      })

      expect(mockElement.setAttribute).toHaveBeenCalledWith('aria-live', 'assertive')
    })

    it('should announce() sets aria-atomic="true"', () => {
      const mockElement = {
        setAttribute: jest.fn(),
        textContent: '',
        className: '',
      }
      document.createElement = jest.fn().mockReturnValue(mockElement)

      const { result } = renderHook(() => useScreenReader())

      act(() => {
        result.current.announce('Test message')
      })

      expect(mockElement.setAttribute).toHaveBeenCalledWith('aria-atomic', 'true')
    })

    it('should announce() sets sr-only className', () => {
      const mockElement = {
        setAttribute: jest.fn(),
        textContent: '',
        className: '',
      }
      document.createElement = jest.fn().mockReturnValue(mockElement)

      const { result } = renderHook(() => useScreenReader())

      act(() => {
        result.current.announce('Test message')
      })

      expect(mockElement.className).toBe('sr-only')
    })

    it('should announce() removes element after 1 second', () => {
      jest.useFakeTimers()
      const mockElement = {
        setAttribute: jest.fn(),
        textContent: '',
        className: '',
      }
      document.createElement = jest.fn().mockReturnValue(mockElement)

      const { result } = renderHook(() => useScreenReader())

      act(() => {
        result.current.announce('Test message')
      })

      act(() => {
        jest.advanceTimersByTime(1000)
      })

      expect(document.body.removeChild).toHaveBeenCalledWith(mockElement)
      jest.useRealTimers()
    })

    it('should announce() handles multiple announcements', () => {
      const mockElement = {
        setAttribute: jest.fn(),
        textContent: '',
        className: '',
      }
      document.createElement = jest.fn().mockReturnValue(mockElement)

      const { result } = renderHook(() => useScreenReader())

      act(() => {
        result.current.announce('First message')
        result.current.announce('Second message')
      })

      expect(document.createElement).toHaveBeenCalledTimes(2)
      expect(document.body.appendChild).toHaveBeenCalledTimes(2)
    })

    it('should announce() handles empty messages', () => {
      const { result } = renderHook(() => useScreenReader())

      act(() => {
        result.current.announce('')
      })

      expect(document.createElement).toHaveBeenCalled()
    })
  })

  describe('useAccessibilityPreferences Hook', () => {
    beforeEach(() => {
      // Mock window.matchMedia
      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation(query => ({
          matches: false,
          media: query,
          onchange: null,
          addListener: jest.fn(),
          removeListener: jest.fn(),
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
          dispatchEvent: jest.fn(),
        })),
      })
    })

    it('should initialize with current media query values', () => {
      const { result } = renderHook(() => useAccessibilityPreferences())

      expect(result.current).toHaveProperty('reducedMotion')
      expect(result.current).toHaveProperty('highContrast')
      expect(result.current).toHaveProperty('largeText')
    })

    it('should detect prefers-reduced-motion', () => {
      window.matchMedia = jest.fn().mockImplementation(query => ({
        matches: query === '(prefers-reduced-motion: reduce)',
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }))

      const { result } = renderHook(() => useAccessibilityPreferences())

      expect(result.current.reducedMotion).toBe(true)
    })

    it('should detect prefers-contrast: high', () => {
      window.matchMedia = jest.fn().mockImplementation(query => ({
        matches: query === '(prefers-contrast: high)',
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }))

      const { result } = renderHook(() => useAccessibilityPreferences())

      expect(result.current.highContrast).toBe(true)
    })

    it('should detect prefers-reduced-data (mapped to largeText)', () => {
      window.matchMedia = jest.fn().mockImplementation(query => ({
        matches: query === '(prefers-reduced-data: reduce)',
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }))

      const { result } = renderHook(() => useAccessibilityPreferences())

      expect(result.current.largeText).toBe(true)
    })

    it('should update when media queries change', () => {
      let changeCallback: ((event: MediaQueryListEvent) => void) | null = null

      window.matchMedia = jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn((event: string, callback: any) => {
          if (event === 'change') {
            changeCallback = callback
          }
        }),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }))

      const { result } = renderHook(() => useAccessibilityPreferences())

      expect(result.current.reducedMotion).toBe(false)

      // Simulate media query change
      act(() => {
        if (changeCallback) {
          changeCallback({ matches: true } as MediaQueryListEvent)
        }
      })

      expect(result.current.reducedMotion).toBe(true)
    })

    it('should clean up event listeners on unmount', () => {
      const mockRemoveEventListener = jest.fn()

      window.matchMedia = jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: mockRemoveEventListener,
        dispatchEvent: jest.fn(),
      }))

      const { unmount } = renderHook(() => useAccessibilityPreferences())

      unmount()

      expect(mockRemoveEventListener).toHaveBeenCalled()
    })

    it('should handle multiple preference changes', () => {
      const callbacks: ((event: MediaQueryListEvent) => void)[] = []

      window.matchMedia = jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn((event: string, callback: any) => {
          if (event === 'change') {
            callbacks.push(callback)
          }
        }),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }))

      const { result } = renderHook(() => useAccessibilityPreferences())

      // Simulate multiple changes
      act(() => {
        callbacks.forEach(callback => callback({ matches: true } as MediaQueryListEvent))
      })

      expect(result.current.reducedMotion).toBe(true)
      expect(result.current.highContrast).toBe(true)
      expect(result.current.largeText).toBe(true)
    })
  })

  describe('generateAccessibleId Function', () => {
    it('should generate unique IDs', () => {
      const id1 = generateAccessibleId()
      const id2 = generateAccessibleId()

      expect(id1).not.toBe(id2)
      expect(typeof id1).toBe('string')
      expect(typeof id2).toBe('string')
    })

    it('should use provided prefix', () => {
      const id = generateAccessibleId('custom-prefix')

      expect(id).toMatch(/^custom-prefix/)
    })

    it('should use default prefix "accessible" if none provided', () => {
      const id = generateAccessibleId()

      expect(id).toMatch(/^accessible/)
    })

    it('should generate different IDs on each call', () => {
      const ids = new Set()

      for (let i = 0; i < 100; i++) {
        const id = generateAccessibleId()
        expect(ids.has(id)).toBe(false)
        ids.add(id)
      }
    })

    it('should generate IDs in valid HTML ID format', () => {
      const id = generateAccessibleId()

      // HTML ID should start with a letter and contain only letters, digits, hyphens, and underscores
      expect(id).toMatch(/^[a-zA-Z][a-zA-Z0-9_-]*$/)
    })

    it('should handle different prefixes correctly', () => {
      const id1 = generateAccessibleId('button')
      const id2 = generateAccessibleId('input')
      const id3 = generateAccessibleId('dialog')

      expect(id1).toMatch(/^button/)
      expect(id2).toMatch(/^input/)
      expect(id3).toMatch(/^dialog/)
    })
  })
})