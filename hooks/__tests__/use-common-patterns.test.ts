/**
 * Tests for use-common-patterns hooks
 */

import { renderHook, act, waitFor } from '@testing-library/react'
import { jest } from '@jest/globals'
import {
  useToggle,
  useCarousel,
  useFormState,
  useAsync,
  useLocalStorage,
} from '../use-common-patterns'

describe('use-common-patterns Hooks', () => {
  beforeEach(() => {
    jest.useFakeTimers()
    jest.clearAllMocks()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  describe('useToggle Hook', () => {
    it('should initialize with default value (false)', () => {
      const { result } = renderHook(() => useToggle())

      expect(result.current.isOpen).toBe(false)
      expect(typeof result.current.open).toBe('function')
      expect(typeof result.current.close).toBe('function')
      expect(typeof result.current.toggle).toBe('function')
    })

    it('should initialize with custom value (true)', () => {
      const { result } = renderHook(() => useToggle(true))

      expect(result.current.isOpen).toBe(true)
    })

    it('should open() sets isOpen to true', () => {
      const { result } = renderHook(() => useToggle())

      act(() => {
        result.current.open()
      })

      expect(result.current.isOpen).toBe(true)
    })

    it('should close() sets isOpen to false', () => {
      const { result } = renderHook(() => useToggle(true))

      act(() => {
        result.current.close()
      })

      expect(result.current.isOpen).toBe(false)
    })

    it('should toggle() switches between true/false', () => {
      const { result } = renderHook(() => useToggle())

      act(() => {
        result.current.toggle()
      })
      expect(result.current.isOpen).toBe(true)

      act(() => {
        result.current.toggle()
      })
      expect(result.current.isOpen).toBe(false)
    })

    it('should auto-close after delay', () => {
      const { result } = renderHook(() => useToggle(false, 1000))

      act(() => {
        result.current.open()
      })

      expect(result.current.isOpen).toBe(true)

      act(() => {
        jest.advanceTimersByTime(1000)
      })

      expect(result.current.isOpen).toBe(false)
    })

    it('should clear timeout on manual close', () => {
      const { result } = renderHook(() => useToggle(false, 1000))
      const clearTimeoutSpy = jest.spyOn(global, 'clearTimeout')

      act(() => {
        result.current.open()
      })

      act(() => {
        result.current.close()
      })

      expect(clearTimeoutSpy).toHaveBeenCalled()
      expect(result.current.isOpen).toBe(false)

      clearTimeoutSpy.mockRestore()
    })

    it('should clean up timeout on unmount', () => {
      const clearTimeoutSpy = jest.spyOn(global, 'clearTimeout')
      const { unmount } = renderHook(() => useToggle(false, 1000))

      act(() => {
        result.current.open()
      })

      unmount()

      expect(clearTimeoutSpy).toHaveBeenCalled()
      clearTimeoutSpy.mockRestore()
    })
  })

  describe('useCarousel Hook', () => {
    const items = ['Item 1', 'Item 2', 'Item 3']

    it('should initialize with first item (currentIndex = 0)', () => {
      const { result } = renderHook(() => useCarousel(items))

      expect(result.current.currentIndex).toBe(0)
      expect(result.current.hasNext).toBe(true)
      expect(result.current.hasPrev).toBe(false)
      expect(result.current.currentItem).toBe('Item 1')
    })

    it('should goToNext() advances to next item', () => {
      const { result } = renderHook(() => useCarousel(items))

      act(() => {
        result.current.goToNext()
      })

      expect(result.current.currentIndex).toBe(1)
      expect(result.current.currentItem).toBe('Item 2')
    })

    it('should goToPrev() goes to previous item', () => {
      const { result } = renderHook(() => useCarousel(items))

      act(() => {
        result.current.goToNext()
        result.current.goToNext()
      })

      expect(result.current.currentIndex).toBe(2)

      act(() => {
        result.current.goToPrev()
      })

      expect(result.current.currentIndex).toBe(1)
    })

    it('should goToIndex() jumps to specific index', () => {
      const { result } = renderHook(() => useCarousel(items))

      act(() => {
        result.current.goToIndex(2)
      })

      expect(result.current.currentIndex).toBe(2)
      expect(result.current.currentItem).toBe('Item 3')
    })

    it('should loop to start when reaching end (if loop = true)', () => {
      const { result } = renderHook(() => useCarousel(items, { loop: true }))

      act(() => {
        result.current.goToNext()
        result.current.goToNext()
        result.current.goToNext()
      })

      expect(result.current.currentIndex).toBe(0)
      expect(result.current.currentItem).toBe('Item 1')
    })

    it('should stop at end when loop = false', () => {
      const { result } = renderHook(() => useCarousel(items, { loop: false }))

      act(() => {
        result.current.goToNext()
        result.current.goToNext()
      })

      expect(result.current.currentIndex).toBe(2)
      expect(result.current.hasNext).toBe(false)

      act(() => {
        result.current.goToNext()
      })

      expect(result.current.currentIndex).toBe(2) // Should stay at end
    })

    it('should auto-play advances automatically (if autoPlay = true)', () => {
      const { result } = renderHook(() => useCarousel(items, { autoPlay: true, autoPlayInterval: 1000 }))

      expect(result.current.currentIndex).toBe(0)

      act(() => {
        jest.advanceTimersByTime(1000)
      })

      expect(result.current.currentIndex).toBe(1)
    })

    it('should pause() stops auto-play', () => {
      const { result } = renderHook(() => useCarousel(items, { autoPlay: true, autoPlayInterval: 1000 }))

      act(() => {
        result.current.pause()
        jest.advanceTimersByTime(2000)
      })

      expect(result.current.currentIndex).toBe(0)
    })

    it('should play() resumes auto-play', () => {
      const { result } = renderHook(() => useCarousel(items, { autoPlay: true, autoPlayInterval: 1000 }))

      act(() => {
        result.current.pause()
        result.current.play()
        jest.advanceTimersByTime(1000)
      })

      expect(result.current.currentIndex).toBe(1)
    })

    it('should cleans up interval on unmount', () => {
      const clearIntervalSpy = jest.spyOn(global, 'clearInterval')
      const { unmount } = renderHook(() => useCarousel(items, { autoPlay: true }))

      unmount()

      expect(clearIntervalSpy).toHaveBeenCalled()
      clearIntervalSpy.mockRestore()
    })
  })

  describe('useFormState Hook', () => {
    const initialValues = {
      name: '',
      email: '',
      age: '',
    }

    const validationRules = {
      name: (value: string) => value.length > 0 || 'Name is required',
      email: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || 'Invalid email',
      age: (value: string) => (value === '' || !isNaN(Number(value))) || 'Age must be a number',
    }

    it('should initialize with provided values', () => {
      const { result } = renderHook(() => useFormState(initialValues, validationRules))

      expect(result.current.values).toEqual(initialValues)
      expect(result.current.errors).toEqual({})
      expect(result.current.touched).toEqual({})
      expect(result.current.isValid).toBe(false)
    })

    it('should setValue() updates field value', () => {
      const { result } = renderHook(() => useFormState(initialValues, validationRules))

      act(() => {
        result.current.setValue('name', 'John Doe')
      })

      expect(result.current.values.name).toBe('John Doe')
    })

    it('should setValue() clears field error', () => {
      const { result } = renderHook(() => useFormState(initialValues, validationRules))

      act(() => {
        result.current.setValue('name', '')
        result.current.setFieldTouched('name')
        result.current.validateField('name')
      })

      expect(result.current.errors.name).toBe('Name is required')

      act(() => {
        result.current.setValue('name', 'John Doe')
      })

      expect(result.current.errors.name).toBeUndefined()
    })

    it('should setFieldTouched() marks field as touched', () => {
      const { result } = renderHook(() => useFormState(initialValues, validationRules))

      act(() => {
        result.current.setFieldTouched('name')
      })

      expect(result.current.touched.name).toBe(true)
    })

    it('should validateField() runs validation rule', () => {
      const { result } = renderHook(() => useFormState(initialValues, validationRules))

      act(() => {
        result.current.setValue('name', '')
        result.current.validateField('name')
      })

      expect(result.current.errors.name).toBe('Name is required')
    })

    it('should validateField() sets error if validation fails', () => {
      const { result } = renderHook(() => useFormState(initialValues, validationRules))

      act(() => {
        result.current.setValue('email', 'invalid-email')
        result.current.validateField('email')
      })

      expect(result.current.errors.email).toBe('Invalid email')
    })

    it('should validateAll() validates all fields', () => {
      const { result } = renderHook(() => useFormState(initialValues, validationRules))

      act(() => {
        result.current.setValue('name', '')
        result.current.setValue('email', 'invalid-email')
        result.current.validateAll()
      })

      expect(result.current.errors.name).toBe('Name is required')
      expect(result.current.errors.email).toBe('Invalid email')
    })

    it('should validateAll() returns true if all valid', () => {
      const { result } = renderHook(() => useFormState(initialValues, validationRules))

      act(() => {
        result.current.setValue('name', 'John Doe')
        result.current.setValue('email', 'john@example.com')
        result.current.setValue('age', '25')
        const isValid = result.current.validateAll()
      })

      expect(result.current.errors).toEqual({})
      expect(result.current.isValid).toBe(true)
    })

    it('should validateAll() returns false if any invalid', () => {
      const { result } = renderHook(() => useFormState(initialValues, validationRules))

      act(() => {
        result.current.setValue('name', '')
        result.current.setValue('email', 'john@example.com')
        const isValid = result.current.validateAll()
      })

      expect(result.current.isValid).toBe(false)
    })

    it('should reset() restores initial values', () => {
      const { result } = renderHook(() => useFormState(initialValues, validationRules))

      act(() => {
        result.current.setValue('name', 'John Doe')
        result.current.setValue('email', 'john@example.com')
        result.current.setFieldTouched('name')
        result.current.reset()
      })

      expect(result.current.values).toEqual(initialValues)
      expect(result.current.errors).toEqual({})
      expect(result.current.touched).toEqual({})
    })

    it('should handleSubmit() validates before submitting', async () => {
      const mockOnSubmit = jest.fn()
      const { result } = renderHook(() => useFormState(initialValues, validationRules))

      act(() => {
        result.current.setValue('name', '')
      })

      await act(async () => {
        const success = await result.current.handleSubmit(mockOnSubmit)
        expect(success).toBe(false)
      })

      expect(mockOnSubmit).not.toHaveBeenCalled()
      expect(result.current.errors.name).toBe('Name is required')
    })

    it('should handleSubmit() calls onSubmit if valid', async () => {
      const mockOnSubmit = jest.fn()
      const { result } = renderHook(() => useFormState(initialValues, validationRules))

      act(() => {
        result.current.setValue('name', 'John Doe')
        result.current.setValue('email', 'john@example.com')
        result.current.setValue('age', '25')
      })

      await act(async () => {
        const success = await result.current.handleSubmit(mockOnSubmit)
        expect(success).toBe(true)
      })

      expect(mockOnSubmit).toHaveBeenCalledWith({
        name: 'John Doe',
        email: 'john@example.com',
        age: '25',
      })
    })

    it('should handleSubmit() sets isSubmitting during submission', async () => {
      const mockOnSubmit = jest.fn(() => new Promise(resolve => setTimeout(resolve, 1000)))
      const { result } = renderHook(() => useFormState(initialValues, validationRules))

      act(() => {
        result.current.setValue('name', 'John Doe')
        result.current.setValue('email', 'john@example.com')
      })

      const promise = act(async () => {
        return result.current.handleSubmit(mockOnSubmit)
      })

      expect(result.current.isSubmitting).toBe(true)

      act(() => {
        jest.advanceTimersByTime(1000)
      })

      await promise
      await waitFor(() => {
        expect(result.current.isSubmitting).toBe(false)
      })
    })

    it('should handleSubmit() handles submission errors', async () => {
      const mockOnSubmit = jest.fn(() => Promise.reject(new Error('Submission failed')))
      const { result } = renderHook(() => useFormState(initialValues, validationRules))

      act(() => {
        result.current.setValue('name', 'John Doe')
        result.current.setValue('email', 'john@example.com')
      })

      await act(async () => {
        const success = await result.current.handleSubmit(mockOnSubmit)
        expect(success).toBe(false)
      })

      expect(result.current.isSubmitting).toBe(false)
    })

    it('should hasErrors flag be correct', () => {
      const { result } = renderHook(() => useFormState(initialValues, validationRules))

      expect(result.current.hasErrors).toBe(false)

      act(() => {
        result.current.setValue('name', '')
        result.current.validateField('name')
      })

      expect(result.current.hasErrors).toBe(true)
    })
  })

  describe('useAsync Hook', () => {
    const mockAsyncFunction = jest.fn()

    beforeEach(() => {
      mockAsyncFunction.mockClear()
    })

    it('should initialize with null data and no error', () => {
      const { result } = renderHook(() => useAsync(mockAsyncFunction))

      expect(result.current.data).toBeNull()
      expect(result.current.error).toBeNull()
      expect(result.current.isLoading).toBe(false)
    })

    it('should execute() sets isLoading to true', async () => {
      mockAsyncFunction.mockImplementation(() => new Promise(resolve => setTimeout(resolve, 1000)))
      const { result } = renderHook(() => useAsync(mockAsyncFunction))

      act(() => {
        result.current.execute()
      })

      expect(result.current.isLoading).toBe(true)
    })

    it('should execute() sets data on success', async () => {
      const mockData = { id: 1, name: 'Test' }
      mockAsyncFunction.mockResolvedValue(mockData)
      const { result } = renderHook(() => useAsync(mockAsyncFunction))

      await act(async () => {
        await result.current.execute()
      })

      expect(result.current.data).toEqual(mockData)
      expect(result.current.error).toBeNull()
      expect(result.current.isLoading).toBe(false)
    })

    it('should execute() sets isLoading to false after completion', async () => {
      mockAsyncFunction.mockResolvedValue('success')
      const { result } = renderHook(() => useAsync(mockAsyncFunction))

      await act(async () => {
        await result.current.execute()
      })

      expect(result.current.isLoading).toBe(false)
    })

    it('should execute() sets error on failure', async () => {
      const mockError = new Error('Test error')
      mockAsyncFunction.mockRejectedValue(mockError)
      const { result } = renderHook(() => useAsync(mockAsyncFunction))

      await act(async () => {
        try {
          await result.current.execute()
        } catch (error) {
          // Expected
        }
      })

      expect(result.current.data).toBeNull()
      expect(result.current.error).toEqual(mockError)
      expect(result.current.isLoading).toBe(false)
    })

    it('should execute() returns result on success', async () => {
      const mockData = 'success'
      mockAsyncFunction.mockResolvedValue(mockData)
      const { result } = renderHook(() => useAsync(mockAsyncFunction))

      const resultData = await act(async () => {
        return await result.current.execute()
      })

      expect(resultData).toBe(mockData)
    })

    it('should execute() throws error on failure', async () => {
      const mockError = new Error('Test error')
      mockAsyncFunction.mockRejectedValue(mockError)
      const { result } = renderHook(() => useAsync(mockAsyncFunction))

      await expect(result.current.execute()).rejects.toThrow('Test error')
    })

    it('should reset() clears data, error, and loading state', async () => {
      mockAsyncFunction.mockResolvedValue('success')
      const { result } = renderHook(() => useAsync(mockAsyncFunction))

      await act(async () => {
        await result.current.execute()
      })

      expect(result.current.data).toBe('success')

      act(() => {
        result.current.reset()
      })

      expect(result.current.data).toBeNull()
      expect(result.current.error).toBeNull()
      expect(result.current.isLoading).toBe(false)
    })

    it('should handles multiple sequential executions', async () => {
      mockAsyncFunction
        .mockResolvedValueOnce('first')
        .mockResolvedValueOnce('second')

      const { result } = renderHook(() => useAsync(mockAsyncFunction))

      await act(async () => {
        await result.current.execute()
      })

      expect(result.current.data).toBe('first')

      await act(async () => {
        await result.current.execute()
      })

      expect(result.current.data).toBe('second')
    })
  })

  describe('useLocalStorage Hook', () => {
    const mockLocalStorage = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      removeItem: jest.fn(),
      clear: jest.fn(),
    }

    beforeEach(() => {
      Object.defineProperty(window, 'localStorage', {
        value: mockLocalStorage,
        writable: true,
      })
      mockLocalStorage.getItem.mockClear()
      mockLocalStorage.setItem.mockClear()
      mockLocalStorage.removeItem.mockClear()
    })

    it('should initialize with value from localStorage (if exists)', () => {
      mockLocalStorage.getItem.mockReturnValue('{"name": "John", "age": 30}')

      const { result } = renderHook(() => useLocalStorage('test-key'))

      expect(mockLocalStorage.getItem).toHaveBeenCalledWith('test-key')
      expect(result.current[0]).toEqual({ name: 'John', age: 30 })
    })

    it('should initialize with default value (if localStorage empty)', () => {
      mockLocalStorage.getItem.mockReturnValue(null)

      const { result } = renderHook(() => useLocalStorage('test-key', 'default-value'))

      expect(mockLocalStorage.getItem).toHaveBeenCalledWith('test-key')
      expect(result.current[0]).toBe('default-value')
    })

    it('should setValue() updates state and localStorage', () => {
      mockLocalStorage.getItem.mockReturnValue(null)
      const { result } = renderHook(() => useLocalStorage('test-key', 'initial'))

      const [, setValue] = result.current

      act(() => {
        setValue('new-value')
      })

      expect(result.current[0]).toBe('new-value')
      expect(mockLocalStorage.setItem).toHaveBeenCalledWith('test-key', '"new-value"')
    })

    it('should setValue() handles function updater', () => {
      mockLocalStorage.getItem.mockReturnValue('10')
      const { result } = renderHook(() => useLocalStorage('counter', 0))

      const [, setValue] = result.current

      act(() => {
        setValue((prev) => prev + 5)
      })

      expect(result.current[0]).toBe(15)
      expect(mockLocalStorage.setItem).toHaveBeenCalledWith('counter', '15')
    })

    it('should removeValue() clears state and localStorage', () => {
      mockLocalStorage.getItem.mockReturnValue('{"name": "John"}')
      const { result } = renderHook(() => useLocalStorage('test-key'))

      const [, , removeValue] = result.current

      act(() => {
        removeValue()
      })

      expect(result.current[0]).toBeNull()
      expect(mockLocalStorage.removeItem).toHaveBeenCalledWith('test-key')
    })

    it('should handles JSON serialization/deserialization', () => {
      const testObject = { name: 'John', age: 30, active: true }
      mockLocalStorage.getItem.mockReturnValue(JSON.stringify(testObject))

      const { result } = renderHook(() => useLocalStorage('test-key', {}))

      expect(result.current[0]).toEqual(testObject)

      const [, setValue] = result.current
      const newObject = { name: 'Jane', age: 25, active: false }

      act(() => {
        setValue(newObject)
      })

      expect(mockLocalStorage.setItem).toHaveBeenCalledWith('test-key', JSON.stringify(newObject))
    })

    it('should handles localStorage errors gracefully', () => {
      mockLocalStorage.getItem.mockImplementation(() => {
        throw new Error('Storage error')
      })

      const { result } = renderHook(() => useLocalStorage('test-key', 'default'))

      expect(result.current[0]).toBe('default')
    })

    it('should works in SSR environment (typeof window === "undefined")', () => {
      const originalWindow = global.window
      delete (global as any).window

      const { result } = renderHook(() => useLocalStorage('test-key', 'default-value'))

      expect(result.current[0]).toBe('default-value')

      global.window = originalWindow
    })

    it('should handles complex objects', () => {
      const complexObject = {
        users: [
          { id: 1, name: 'John', roles: ['admin', 'user'] },
          { id: 2, name: 'Jane', roles: ['user'] },
        ],
        settings: { theme: 'dark', notifications: true },
        metadata: { created: '2023-01-01', version: 1 },
      }

      mockLocalStorage.getItem.mockReturnValue(JSON.stringify(complexObject))

      const { result } = renderHook(() => useLocalStorage('complex-data'))

      expect(result.current[0]).toEqual(complexObject)
    })

    it('should handles arrays', () => {
      const testArray = ['item1', 'item2', 'item3']
      mockLocalStorage.getItem.mockReturnValue(JSON.stringify(testArray))

      const { result } = renderHook(() => useLocalStorage('test-array'))

      expect(result.current[0]).toEqual(testArray)
    })
  })
})