import { composeStories } from '@storybook/react'
import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import * as stories from './avatar.stories'

const { Default, WithFallback, CustomSizes, CustomFallbackColors, Group } = composeStories(stories)

describe('Avatar Component Stories', () => {
  test('renders Default story without errors', () => {
    expect(() => render(<Default />)).not.toThrow()
  })

  test('renders WithFallback story without errors', () => {
    expect(() => render(<WithFallback />)).not.toThrow()
  })

  test('renders CustomSizes story without errors', () => {
    expect(() => render(<CustomSizes />)).not.toThrow()
  })

  test('renders CustomFallbackColors story without errors', () => {
    expect(() => render(<CustomFallbackColors />)).not.toThrow()
  })

  test('renders Group story without errors', () => {
    expect(() => render(<Group />)).not.toThrow()
  })
})
