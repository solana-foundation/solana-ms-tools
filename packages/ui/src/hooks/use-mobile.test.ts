import { act, renderHook } from '@testing-library/react'
import { useIsMobile } from './useIsMobile'

// Mock `matchMedia` implementation
function createMatchMedia(width: number): typeof window.matchMedia {
  return (query: string): MediaQueryList => {
    const listeners = new Set<(ev: MediaQueryListEvent) => void>()
    const mql: MediaQueryList = {
      media: query,
      matches: width < 768,
      onchange: null,
      addEventListener: (_, listener) => listeners.add(listener),
      removeEventListener: (_, listener) => listeners.delete(listener),
      dispatchEvent: (event: MediaQueryListEvent) => {
        listeners.forEach((listener) => listener(event))
        return true
      },
    }
    return mql
  }
}

describe('useIsMobile', () => {
  const originalInnerWidth = window.innerWidth
  const originalMatchMedia = window.matchMedia

  afterEach(() => {
    window.innerWidth = originalInnerWidth
    window.matchMedia = originalMatchMedia
  })

  it('returns true when width is less than 768px', () => {
    window.innerWidth = 500
    window.matchMedia = createMatchMedia(500)

    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(true)
  })

  it('returns false when width is 768px or more', () => {
    window.innerWidth = 1024
    window.matchMedia = createMatchMedia(1024)

    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(false)
  })

  it('responds to viewport size changes', () => {
    let width = 800
    window.innerWidth = width
    const mql = createMatchMedia(width)('(max-width: 767px)')
    window.matchMedia = () => mql

    const { result } = renderHook(() => useIsMobile())

    expect(result.current).toBe(false)

    act(() => {
      width = 600
      window.innerWidth = width
      mql.matches = true
      mql.dispatchEvent(new Event('change') as MediaQueryListEvent)
    })

    expect(result.current).toBe(true)
  })
})
