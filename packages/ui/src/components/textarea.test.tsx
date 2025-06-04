import { composeStories } from '@storybook/react'
import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import * as stories from './textarea.stories'

const {
  Default,
  WithLabel,
  Disabled,
  WithError,
  WithValue,
  AutoResizing,
  WithMaxLength,
  ReadOnly,
} = composeStories(stories)

describe('Textarea Component Stories', () => {
  test('renders Default story without errors', () => {
    expect(() => render(<Default />)).not.toThrow()
  })

  test('renders WithLabel story without errors', () => {
    expect(() => render(<WithLabel />)).not.toThrow()
  })

  test('renders Disabled story without errors', () => {
    expect(() => render(<Disabled />)).not.toThrow()
  })

  test('renders WithError story without errors', () => {
    expect(() => render(<WithError />)).not.toThrow()
  })

  test('renders WithValue story without errors', () => {
    expect(() => render(<WithValue />)).not.toThrow()
  })

  test('renders AutoResizing story without errors', () => {
    expect(() => render(<AutoResizing />)).not.toThrow()
  })

  test('renders WithMaxLength story without errors', () => {
    expect(() => render(<WithMaxLength />)).not.toThrow()
  })

  test('renders ReadOnly story without errors', () => {
    expect(() => render(<ReadOnly />)).not.toThrow()
  })
})
