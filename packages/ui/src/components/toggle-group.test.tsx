import { composeStories } from '@storybook/react-vite'
import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import * as stories from './toggle-group.stories'

const { Default, WithText, Multiple } = composeStories(stories)

describe('ToggleGroup Component Stories', () => {
  test('renders Default story without errors', () => {
    expect(() => render(<Default />)).not.toThrow()
  })

  test('renders WithText story without errors', () => {
    expect(() => render(<WithText />)).not.toThrow()
  })

  test('renders Multiple story without errors', () => {
    expect(() => render(<Multiple />)).not.toThrow()
  })
})
