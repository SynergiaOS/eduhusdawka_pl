/**
 * Enhanced testing utilities for optimized components
 */

import React, { ReactElement } from 'react'
import { render, RenderOptions, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { jest } from '@jest/globals'

// Mock Next.js router
const mockRouter = {
  push: jest.fn(),
  replace: jest.fn(),
  prefetch: jest.fn(),
  back: jest.fn(),
  forward: jest.fn(),
  refresh: jest.fn(),
  pathname: '/',
  query: {},
  asPath: '/',
  route: '/',
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
}

jest.mock('next/navigation', () => ({
  useRouter: () => mockRouter,
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}))

// Mock IntersectionObserver
const mockIntersectionObserver = jest.fn()
mockIntersectionObserver.mockReturnValue({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
})
window.IntersectionObserver = mockIntersectionObserver

// Mock ResizeObserver
const mockResizeObserver = jest.fn()
mockResizeObserver.mockReturnValue({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
})
window.ResizeObserver = mockResizeObserver

// Mock matchMedia
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

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
})

// Test wrapper with providers
interface TestProvidersProps {
  children: React.ReactNode
}

const TestProviders: React.FC<TestProvidersProps> = ({ children }) => {
  return (
    <div data-testid="test-wrapper">
      {children}
    </div>
  )
}

// Custom render function
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: TestProviders, ...options })

// Performance testing utilities
export const performanceUtils = {
  measureRenderTime: async (component: ReactElement) => {
    const start = performance.now()
    customRender(component)
    const end = performance.now()
    return end - start
  },

  measureReRenders: (component: ReactElement, interactions: () => Promise<void>) => {
    let renderCount = 0
    const WrappedComponent = () => {
      renderCount++
      return component
    }
    
    customRender(<WrappedComponent />)
    const initialRenders = renderCount
    
    return interactions().then(() => ({
      initialRenders,
      totalRenders: renderCount,
      reRenders: renderCount - initialRenders,
    }))
  },

  checkMemoryLeaks: async (component: ReactElement) => {
    const { unmount } = customRender(component)
    
    // Force garbage collection if available
    if (global.gc) {
      global.gc()
    }
    
    const beforeMemory = (performance as any).memory?.usedJSHeapSize || 0
    unmount()
    
    // Wait for cleanup
    await new Promise(resolve => setTimeout(resolve, 100))
    
    if (global.gc) {
      global.gc()
    }
    
    const afterMemory = (performance as any).memory?.usedJSHeapSize || 0
    
    return {
      beforeMemory,
      afterMemory,
      leaked: afterMemory > beforeMemory,
      difference: afterMemory - beforeMemory,
    }
  },
}

// Accessibility testing utilities
export const a11yUtils = {
  checkFocusManagement: async (container: HTMLElement) => {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    
    const results = {
      totalFocusable: focusableElements.length,
      hasTabIndex: Array.from(focusableElements).every(el => 
        el.hasAttribute('tabindex') || ['BUTTON', 'A', 'INPUT', 'SELECT', 'TEXTAREA'].includes(el.tagName)
      ),
      hasAriaLabels: Array.from(focusableElements).every(el =>
        el.hasAttribute('aria-label') || 
        el.hasAttribute('aria-labelledby') ||
        el.textContent?.trim() ||
        el.hasAttribute('title')
      ),
    }
    
    return results
  },

  checkColorContrast: (element: HTMLElement) => {
    const styles = window.getComputedStyle(element)
    const color = styles.color
    const backgroundColor = styles.backgroundColor
    
    // Simple contrast check (would need more sophisticated implementation)
    return {
      color,
      backgroundColor,
      hasGoodContrast: color !== backgroundColor, // Simplified check
    }
  },

  checkAriaAttributes: (element: HTMLElement) => {
    const ariaAttributes = Array.from(element.attributes)
      .filter(attr => attr.name.startsWith('aria-'))
      .map(attr => ({ name: attr.name, value: attr.value }))
    
    return {
      hasAriaAttributes: ariaAttributes.length > 0,
      ariaAttributes,
      hasRole: element.hasAttribute('role'),
      role: element.getAttribute('role'),
    }
  },
}

// Animation testing utilities
export const animationUtils = {
  mockReducedMotion: (enabled: boolean = true) => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: query === '(prefers-reduced-motion: reduce)' ? enabled : false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    })
  },

  waitForAnimation: async (element: HTMLElement, timeout: number = 1000) => {
    return waitFor(() => {
      const styles = window.getComputedStyle(element)
      expect(styles.animationName).not.toBe('none')
    }, { timeout })
  },

  checkAnimationPerformance: (element: HTMLElement) => {
    const styles = window.getComputedStyle(element)
    return {
      usesTransform: styles.transform !== 'none',
      usesOpacity: styles.opacity !== '1',
      hasWillChange: styles.willChange !== 'auto',
      animationName: styles.animationName,
      transitionProperty: styles.transitionProperty,
    }
  },
}

// Form testing utilities
export const formUtils = {
  fillForm: async (formData: Record<string, string>) => {
    const user = userEvent.setup()
    
    for (const [fieldName, value] of Object.entries(formData)) {
      const field = screen.getByLabelText(new RegExp(fieldName, 'i')) ||
                   screen.getByPlaceholderText(new RegExp(fieldName, 'i')) ||
                   screen.getByDisplayValue('')
      
      if (field) {
        await user.clear(field)
        await user.type(field, value)
      }
    }
  },

  submitForm: async () => {
    const user = userEvent.setup()
    const submitButton = screen.getByRole('button', { name: /submit|wyślij|zapisz/i })
    await user.click(submitButton)
  },

  checkFormValidation: async (expectedErrors: string[]) => {
    for (const error of expectedErrors) {
      expect(screen.getByText(new RegExp(error, 'i'))).toBeInTheDocument()
    }
  },
}

// Component testing utilities
export const componentUtils = {
  testMemoization: async (Component: React.ComponentType<any>, props: any) => {
    let renderCount = 0
    const TestComponent = React.memo(() => {
      renderCount++
      return <Component {...props} />
    })
    
    const { rerender } = customRender(<TestComponent />)
    const initialRenders = renderCount
    
    // Re-render with same props
    rerender(<TestComponent />)
    
    return {
      initialRenders,
      afterRerender: renderCount,
      isMemoized: renderCount === initialRenders,
    }
  },

  testErrorBoundary: async (Component: React.ComponentType<any>, errorProps: any) => {
    const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
      if (shouldThrow) {
        throw new Error('Test error')
      }
      return <Component {...errorProps} />
    }
    
    const { rerender } = customRender(<ThrowError shouldThrow={false} />)
    
    // Should not throw initially
    expect(screen.queryByText(/error/i)).not.toBeInTheDocument()
    
    // Should catch error when thrown
    rerender(<ThrowError shouldThrow={true} />)
    
    return {
      caughtError: screen.queryByText(/error/i) !== null,
    }
  },
}

// Export everything
export * from '@testing-library/react'
export { customRender as render, userEvent, mockRouter }
export { screen, waitFor }

// Add test component to satisfy Jest requirement
export const TestComponent = () => <div>Test</div>

describe('Test Utils', () => {
  it('should have test component', () => {
    expect(TestComponent).toBeDefined()
  })
})
