import { composeStories } from '@storybook/react'
import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import * as stories from './toggle.stories'

const { Default, WithText, Sizes, Variants, Disabled } = composeStories(stories)

describe('Toggle Component Stories', () => {
  test('renders Default story without errors', () => {
    expect(() => render(<Default />)).not.toThrow()
  })

  test('renders WithText story without errors', () => {
    expect(() => render(<WithText />)).not.toThrow()
  })

  test('renders Sizes story without errors', () => {
    expect(() => render(<Sizes />)).not.toThrow()
  })

  test('renders Variants story without errors', () => {
    expect(() => render(<Variants />)).not.toThrow()
  })

  test('renders Disabled story without errors', () => {
    expect(() => render(<Disabled />)).not.toThrow()
  })
})
