import { composeStories } from '@storybook/react-vite'
import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import * as stories from './separator.stories'

const { Default, Horizontal, Vertical, WithinList, CustomStyling } = composeStories(stories)

describe('Separator Component Stories', () => {
  test('renders Default story without errors', () => {
    expect(() => render(<Default />)).not.toThrow()
  })

  test('renders Horizontal story without errors', () => {
    expect(() => render(<Horizontal />)).not.toThrow()
  })

  test('renders Vertical story without errors', () => {
    expect(() => render(<Vertical />)).not.toThrow()
  })

  test('renders WithinList story without errors', () => {
    expect(() => render(<WithinList />)).not.toThrow()
  })

  test('renders CustomStyling story without errors', () => {
    expect(() => render(<CustomStyling />)).not.toThrow()
  })
})
