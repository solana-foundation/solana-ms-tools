import { composeStories } from '@storybook/react-vite'
import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import * as stories from './tabs.stories'

const { Default, ThreeTabs, WithIcons, Disabled } = composeStories(stories)

describe('Tabs Component Stories', () => {
  test('renders Default story without errors', () => {
    expect(() => render(<Default />)).not.toThrow()
  })

  test('renders ThreeTabs story without errors', () => {
    expect(() => render(<ThreeTabs />)).not.toThrow()
  })

  test('renders WithIcons story without errors', () => {
    expect(() => render(<WithIcons />)).not.toThrow()
  })

  test('renders Disabled story without errors', () => {
    expect(() => render(<Disabled />)).not.toThrow()
  })
})
