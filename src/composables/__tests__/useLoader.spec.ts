import { describe, it, expect, beforeEach, vi } from 'vitest'
import { useLoader } from '../useLoader'

vi.useFakeTimers()

describe('useLoader', () => {
  let loader: ReturnType<typeof useLoader>

  beforeEach(() => {
    loader = useLoader()
  })

  it('initially isLoading is false', () => {
    expect(loader.isLoading.value).toBe(false)
  })

  it('showLoader sets isLoading to true after the delay', () => {
    loader.showLoader(300)
    expect(loader.isLoading.value).toBe(false)
    vi.advanceTimersByTime(300)
    expect(loader.isLoading.value).toBe(true)
  })

  it('hideLoader clears the timeout and sets isLoading to false', () => {
    loader.showLoader(300)
    vi.advanceTimersByTime(150)
    loader.hideLoader()
    expect(loader.isLoading.value).toBe(false)
    vi.advanceTimersByTime(150)
    expect(loader.isLoading.value).toBe(false)
  })

  it('showLoader can handle default delay', () => {
    loader.showLoader()
    vi.advanceTimersByTime(300)
    expect(loader.isLoading.value).toBe(true)
  })
})
