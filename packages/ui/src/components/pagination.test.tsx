import { composeStories } from '@storybook/react-vite'
import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import * as stories from './pagination.stories'

const { Default, WithEllipsis, DisabledControls, CustomStyling, Compact } = composeStories(stories)

describe('Pagination Component Stories', () => {
  test('renders Default story without errors', () => {
    expect(() => render(<Default />)).not.toThrow()
  })

  test('renders WithEllipsis story without errors', () => {
    expect(() => render(<WithEllipsis />)).not.toThrow()
  })

  test('renders DisabledControls story without errors', () => {
    expect(() => render(<DisabledControls />)).not.toThrow()
  })

  test('renders CustomStyling story without errors', () => {
    expect(() => render(<CustomStyling />)).not.toThrow()
  })

  test('renders Compact story without errors', () => {
    expect(() => render(<Compact />)).not.toThrow()
  })
})
