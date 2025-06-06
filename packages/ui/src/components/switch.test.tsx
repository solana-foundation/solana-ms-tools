import { composeStories } from '@storybook/react-vite'
import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import * as stories from './switch.stories'

const { Default, WithLabel, Disabled, WithDescription, Controlled } = composeStories(stories)

describe('Switch Component Stories', () => {
  test('renders Default story without errors', () => {
    expect(() => render(<Default />)).not.toThrow()
  })

  test('renders WithLabel story without errors', () => {
    expect(() => render(<WithLabel />)).not.toThrow()
  })

  test('renders Disabled story without errors', () => {
    expect(() => render(<Disabled />)).not.toThrow()
  })

  test('renders WithDescription story without errors', () => {
    expect(() => render(<WithDescription />)).not.toThrow()
  })

  test('renders Controlled story without errors', () => {
    expect(() => render(<Controlled />)).not.toThrow()
  })
})
