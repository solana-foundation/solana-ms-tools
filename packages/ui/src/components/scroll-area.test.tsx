import { composeStories } from '@storybook/react-vite'
import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import * as stories from './scroll-area.stories'

const { Default, Horizontal, Both, WithinCard, CustomScrollbar } = composeStories(stories)

describe('ScrollArea Component Stories', () => {
  test('renders Default story without errors', () => {
    expect(() => render(<Default />)).not.toThrow()
  })

  test('renders Horizontal story without errors', () => {
    expect(() => render(<Horizontal />)).not.toThrow()
  })

  test('renders Both story without errors', () => {
    expect(() => render(<Both />)).not.toThrow()
  })

  test('renders WithinCard story without errors', () => {
    expect(() => render(<WithinCard />)).not.toThrow()
  })

  test('renders CustomScrollbar story without errors', () => {
    expect(() => render(<CustomScrollbar />)).not.toThrow()
  })
})
