import { composeStories } from '@storybook/react'
import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import * as stories from './drawer.stories'

const { Bottom, Right, Top, Left } = composeStories(stories)

describe('Drawer Component Stories', () => {
  test('renders Bottom story without errors', () => {
    expect(() => render(<Bottom />)).not.toThrow()
  })

  test('renders Right story without errors', () => {
    expect(() => render(<Right />)).not.toThrow()
  })

  test('renders Top story without errors', () => {
    expect(() => render(<Top />)).not.toThrow()
  })

  test('renders Left story without errors', () => {
    expect(() => render(<Left />)).not.toThrow()
  })
})
