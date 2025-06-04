import { composeStories } from '@storybook/react'
import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import * as stories from './tooltip.stories'

const { Default, WithButton, Positions, WithDelay, CustomStyling } = composeStories(stories)

describe('Tooltip Component Stories', () => {
  test('renders Default story without errors', () => {
    expect(() => render(<Default />)).not.toThrow()
  })

  test('renders WithButton story without errors', () => {
    expect(() => render(<WithButton />)).not.toThrow()
  })

  test('renders Positions story without errors', () => {
    expect(() => render(<Positions />)).not.toThrow()
  })

  test('renders WithDelay story without errors', () => {
    expect(() => render(<WithDelay />)).not.toThrow()
  })

  test('renders CustomStyling story without errors', () => {
    expect(() => render(<CustomStyling />)).not.toThrow()
  })
})
