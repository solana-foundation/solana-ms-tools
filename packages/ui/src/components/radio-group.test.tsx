import { composeStories } from '@storybook/react-vite'
import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import * as stories from './radio-group.stories'

const { Default, WithDescription, Disabled, Invalid, Horizontal, WithCustomSize } =
  composeStories(stories)

describe('RadioGroup Component Stories', () => {
  test('renders Default story without errors', () => {
    expect(() => render(<Default />)).not.toThrow()
  })

  test('renders WithDescription story without errors', () => {
    expect(() => render(<WithDescription />)).not.toThrow()
  })

  test('renders Disabled story without errors', () => {
    expect(() => render(<Disabled />)).not.toThrow()
  })

  test('renders Invalid story without errors', () => {
    expect(() => render(<Invalid />)).not.toThrow()
  })

  test('renders Horizontal story without errors', () => {
    expect(() => render(<Horizontal />)).not.toThrow()
  })

  test('renders WithCustomSize story without errors', () => {
    expect(() => render(<WithCustomSize />)).not.toThrow()
  })
})
