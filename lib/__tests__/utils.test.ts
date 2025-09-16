import { cn } from '../utils'

describe('cn utility function', () => {
  it('merges class names correctly', () => {
    const result = cn('text-red-500', 'bg-blue-500')
    expect(result).toBe('text-red-500 bg-blue-500')
  })

  it('handles conditional classes', () => {
    const result = cn('base-class', true && 'conditional-class', false && 'hidden-class')
    expect(result).toBe('base-class conditional-class')
  })

  it('handles undefined and null values', () => {
    const result = cn('base-class', undefined, null, 'another-class')
    expect(result).toBe('base-class another-class')
  })

  it('merges conflicting Tailwind classes correctly', () => {
    const result = cn('text-red-500', 'text-blue-500')
    expect(result).toBe('text-blue-500')
  })

  it('handles empty input', () => {
    const result = cn()
    expect(result).toBe('')
  })

  it('handles array of classes', () => {
    const result = cn(['text-red-500', 'bg-blue-500'])
    expect(result).toBe('text-red-500 bg-blue-500')
  })
})
