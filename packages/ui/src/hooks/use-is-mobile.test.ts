import { act, renderHook } from '@testing-library/react'
import { useIsMobile } from './use-is-mobile'

describe('useIsMobile', () => {
  const originalInnerWidth = window.innerWidth
  const originalMatchMedia = window.matchMedia

  let listeners = new Set<(event: MediaQueryListEvent) => void>()
  let mql: MediaQueryList

  beforeEach(() => {
    listeners = new Set()
    // @ts-ignore
    mql = {
      matches: false,
      media: '(max-width: 767px)',
      onchange: null,
      // @ts-ignore
      addEventListener: (_, cb) => listeners.add(cb),
      // @ts-ignore
      removeEventListener: (_, cb) => listeners.delete(cb),
      dispatchEvent: (e) => {
        // @ts-ignore
        listeners.forEach((cb) => cb(e))
        return true
      },
    }

    window.matchMedia = () => mql
  })

  afterEach(() => {
    window.innerWidth = originalInnerWidth
    window.matchMedia = originalMatchMedia
  })

  it('returns true when width is less than 768px', () => {
    window.innerWidth = 500
    // @ts-ignore
    mql.matches = true

    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(true)
  })

  it('returns false when width is 768px or more', () => {
    window.innerWidth = 1024
    // @ts-ignore
    mql.matches = false

    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(false)
  })

  it('responds to viewport size changes', () => {
    window.innerWidth = 800
    // @ts-ignore
    mql.matches = false

    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(false)

    act(() => {
      window.innerWidth = 600
      // @ts-ignore
      mql.matches = true
      mql.dispatchEvent(new Event('change') as MediaQueryListEvent)
    })

    expect(result.current).toBe(true)
  })
})
