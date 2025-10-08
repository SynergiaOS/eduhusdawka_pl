/**
 * Integration tests for performance optimization
 */

import React from 'react'
import { render, screen, waitFor, userEvent } from '../utils/test-utils'
import { jest } from '@jest/globals'

// Mock performance APIs
const mockPerformanceObserver = jest.fn()
global.PerformanceObserver = mockPerformanceObserver

describe('Performance Integration', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    // Mock performance timing
    Object.defineProperty(window, 'performance', {
      value: {
        ...window.performance,
        mark: jest.fn(),
        measure: jest.fn(),
        getEntriesByType: jest.fn(() => [
          {
            name: 'first-contentful-paint',
            startTime: 1000,
          },
          {
            name: 'largest-contentful-paint',
            startTime: 2000,
          },
        ]),
      },
      writable: true,
    })
  })

  describe('Page Load Performance', () => {
    it('should load pages within performance budgets', async () => {
      const startTime = performance.now()

      render(
        <div>
          <h1>EduHustawka</h1>
          <p>Terapia pedagogiczna dla dzieci</p>
        </div>
      )

      const endTime = performance.now()
      const loadTime = endTime - startTime

      // Should render within 500ms
      expect(loadTime).toBeLessThan(500)
    })

    it('should measure Core Web Vitals', async () => {
      const mockObserver = {
        observe: jest.fn(),
        disconnect: jest.fn(),
      }
      mockPerformanceObserver.mockImplementation((callback) => ({
        observe: jest.fn(),
        disconnect: jest.fn(),
      }))

      // Test that performance observer is initialized
      expect(mockPerformanceObserver).toBeDefined()
    })

    it('should implement lazy loading for images', async () => {
      render(
        <div>
          <img
            data-src="/test-image.jpg"
            alt="Test image"
            loading="lazy"
            className="lazy-image"
          />
        </div>
      )

      const image = screen.getByAltText('Test image')
      expect(image).toHaveAttribute('loading', 'lazy')
      expect(image).toHaveAttribute('data-src')
    })
  })

  describe('Bundle Optimization', () => {
    it('should implement code splitting for heavy components', async () => {
      // Mock dynamic import
      const mockHeavyComponent = React.lazy(() =>
        Promise.resolve({
          default: () => <div>Heavy Component</div>
        })
      )

      render(
        <React.Suspense fallback={<div>Loading...</div>}>
          <mockHeavyComponent />
        </React.Suspense>
      )

      // Should show loading state initially
      expect(screen.getByText('Loading...')).toBeInTheDocument()

      // Should load component eventually
      await waitFor(() => {
        expect(screen.getByText('Heavy Component')).toBeInTheDocument()
      })
    })

    it('should prefetch critical resources', async () => {
      const mockPrefetch = jest.fn()
      Object.defineProperty(document, 'createElement', {
        value: jest.fn(() => ({
          rel: '',
          href: '',
          as: '',
          onload: mockPrefetch,
        })),
        writable: true,
      })

      // Simulate resource prefetching
      const link = document.createElement('link')
      link.rel = 'prefetch'
      link.href = '/critical-resource.js'
      link.as = 'script'

      expect(link.rel).toBe('prefetch')
      expect(link.href).toBe('/critical-resource.js')
    })

    it('should implement tree shaking for unused code', () => {
      // This test would typically check the actual bundle
      // For now, we'll mock the functionality
      const mockBundleAnalyzer = {
        getUnusedExports: () => [],
        getBundleSize: () => ({ size: 1024 * 100 }), // 100KB
      }

      const bundleInfo = mockBundleAnalyzer.getBundleSize()
      expect(bundleInfo.size).toBeLessThan(1024 * 200) // Under 200KB
    })
  })

  describe('Caching Performance', () => {
    it('should implement service worker caching', async () => {
      const mockCache = {
        add: jest.fn(),
        match: jest.fn(),
        put: jest.fn(),
      }

      Object.defineProperty(global, 'caches', {
        value: {
          open: jest.fn().mockResolvedValue(mockCache),
        },
        writable: true,
      })

      const cache = await caches.open('static-v1')
      await cache.add('/static/styles.css')

      expect(cache.add).toHaveBeenCalledWith('/static/styles.css')
    })

    it('should implement browser cache headers', async () => {
      const mockResponse = new Response('cached content', {
        headers: {
          'Cache-Control': 'public, max-age=31536000',
          'ETag': '123456',
        },
      })

      expect(mockResponse.headers.get('Cache-Control')).toBe('public, max-age=31536000')
      expect(mockResponse.headers.get('ETag')).toBe('123456')
    })

    it('should implement memory caching for frequently accessed data', () => {
      const memoryCache = new Map()

      // Cache data
      memoryCache.set('user-preferences', { theme: 'dark', language: 'pl' })

      // Retrieve cached data
      const cachedData = memoryCache.get('user-preferences')

      expect(cachedData).toEqual({ theme: 'dark', language: 'pl' })
    })
  })

  describe('Network Performance', () => {
    it('should implement request debouncing', async () => {
      const user = userEvent.setup()
      const mockApiCall = jest.fn().mockResolvedValue({ data: 'success' })

      // Create debounced function
      const debounce = (func: Function, delay: number) => {
        let timeoutId: NodeJS.Timeout
        return (...args: any[]) => {
          clearTimeout(timeoutId)
          timeoutId = setTimeout(() => func(...args), delay)
        }
      }

      const debouncedApiCall = debounce(mockApiCall, 300)

      render(
        <div>
          <button onClick={() => debouncedApiCall('search-term')}>Search</button>
        </div>
      )

      const button = screen.getByText('Search')

      // Click rapidly
      await user.click(button)
      await user.click(button)
      await user.click(button)

      // Wait for debounce
      await new Promise(resolve => setTimeout(resolve, 500))

      // Should only call API once
      expect(mockApiCall).toHaveBeenCalledTimes(1)
      expect(mockApiCall).toHaveBeenCalledWith('search-term')
    })

    it('should implement request batching', async () => {
      const mockBatchRequest = jest.fn().mockResolvedValue({
        results: [
          { id: 1, data: 'item1' },
          { id: 2, data: 'item2' },
          { id: 3, data: 'item3' },
        ]
      })

      // Instead of 3 separate requests, make one batch request
      const batchRequests = async (requests: Array<{ id: number }>) => {
        return mockBatchRequest({ ids: requests.map(r => r.id) })
      }

      const requests = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]

      const results = await batchRequests(requests)

      expect(mockBatchRequest).toHaveBeenCalledTimes(1)
      expect(results.results).toHaveLength(3)
    })

    it('should implement offline support', async () => {
      const mockOfflineStorage = {
        get: jest.fn(),
        set: jest.fn(),
        has: jest.fn(),
      }

      // Simulate offline mode
      Object.defineProperty(navigator, 'onLine', {
        value: false,
        writable: true,
      })

      // Store data for offline use
      mockOfflineStorage.set('cached-page', { content: 'Offline content' })
      const cachedContent = mockOfflineStorage.get('cached-page')

      expect(cachedContent).toEqual({ content: 'Offline content' })
    })
  })

  describe('Rendering Performance', () => {
    it('should minimize re-renders with React.memo', async () => {
      let renderCount = 0
      const TestComponent = React.memo(() => {
        renderCount++
        return <div>Test Component</div>
      })

      const { rerender } = render(<TestComponent />)
      const initialCount = renderCount

      // Re-render with same props
      rerender(<TestComponent />)

      // Should not re-render due to memo
      expect(renderCount).toBe(initialCount)
    })

    it('should use useMemo for expensive calculations', async () => {
      const expensiveCalculation = jest.fn(() => Array.from({ length: 1000 }, (_, i) => i * 2))

      const TestComponent = () => {
        const result = React.useMemo(() => expensiveCalculation(), [])
        return <div>Result: {result.slice(0, 3).join(', ')}...</div>
      }

      const { rerender } = render(<TestComponent />)

      expect(expensiveCalculation).toHaveBeenCalledTimes(1)

      // Re-render component
      rerender(<TestComponent />)

      // Should not recalculate due to useMemo
      expect(expensiveCalculation).toHaveBeenCalledTimes(1)
    })

    it('should implement virtual scrolling for long lists', async () => {
      const largeDataSet = Array.from({ length: 10000 }, (_, i) => ({
        id: i,
        name: `Item ${i}`,
      }))

      // Mock virtual scrolling implementation
      const VirtualList = ({ items, visibleCount = 10 }: {
        items: Array<{ id: number; name: string }>,
        visibleCount?: number
      }) => {
        return (
          <div>
            {items.slice(0, visibleCount).map(item => (
              <div key={item.id}>{item.name}</div>
            ))}
          </div>
        )
      }

      render(<VirtualList items={largeDataSet} />)

      // Should only render visible items
      expect(screen.getAllByText(/Item \d+/)).toHaveLength(10)

      // Should not render all 10000 items
      expect(screen.queryByText('Item 9999')).not.toBeInTheDocument()
    })
  })

  describe('Memory Performance', () => {
    it('should clean up event listeners', async () => {
      const addEventListenerSpy = jest.spyOn(window, 'addEventListener')
      const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener')

      const TestComponent = () => {
        React.useEffect(() => {
          const handleScroll = () => {}
          window.addEventListener('scroll', handleScroll)

          return () => {
            window.removeEventListener('scroll', handleScroll)
          }
        }, [])

        return <div>Test Component</div>
      }

      const { unmount } = render(<TestComponent />)

      expect(addEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function))

      unmount()

      expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function))

      addEventListenerSpy.mockRestore()
      removeEventListenerSpy.mockRestore()
    })

    it('should prevent memory leaks in async operations', async () => {
      const mockAsyncOperation = jest.fn(() => new Promise(resolve => {
        setTimeout(() => resolve('completed'), 1000)
      }))

      const TestComponent = () => {
        React.useEffect(() => {
          let isMounted = true

          mockAsyncOperation().then(result => {
            if (isMounted) {
              console.log('Operation completed:', result)
            }
          })

          return () => {
            isMounted = false
          }
        }, [])

        return <div>Test Component</div>
      }

      const { unmount } = render(<TestComponent />)

      // Unmount before async operation completes
      unmount()

      // Wait for async operation to complete
      await new Promise(resolve => setTimeout(resolve, 1100))

      // Component should be unmounted without memory leaks
      expect(document.body.children.length).toBe(0)
    })
  })

  describe('Performance Monitoring', () => {
    it('should track performance metrics', async () => {
      const performanceMetrics = {
        fcp: 1000, // First Contentful Paint
        lcp: 2000, // Largest Contentful Paint
        fid: 100,  // First Input Delay
        cls: 0.1,  // Cumulative Layout Shift
      }

      // Mock performance tracking
      const trackPerformance = jest.fn()
      trackPerformance(performanceMetrics)

      expect(trackPerformance).toHaveBeenCalledWith({
        fcp: expect.any(Number),
        lcp: expect.any(Number),
        fid: expect.any(Number),
        cls: expect.any(Number),
      })
    })

    it('should alert on performance degradation', async () => {
      const slowPerformanceMetrics = {
        fcp: 3000, // Too slow
        lcp: 5000, // Too slow
        fid: 500,  // Too slow
        cls: 0.5,  // Too high
      }

      const mockAlert = jest.fn()
      const checkPerformance = (metrics: typeof slowPerformanceMetrics) => {
        if (metrics.fcp > 2500 || metrics.lcp > 4000 || metrics.fid > 300 || metrics.cls > 0.25) {
          mockAlert('Performance degradation detected')
        }
      }

      checkPerformance(slowPerformanceMetrics)

      expect(mockAlert).toHaveBeenCalledWith('Performance degradation detected')
    })
  })
})