import { composeStories } from '@storybook/react'
import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import * as stories from './collapsible.stories'

const { Basic, WithAnimation, Nested } = composeStories(stories)

describe('Collapsible Component Stories', () => {
  test('renders Basic story without errors', () => {
    expect(() => render(<Basic />)).not.toThrow()
  })

  test('renders WithAnimation story without errors', () => {
    expect(() => render(<WithAnimation />)).not.toThrow()
  })

  test('renders Nested story without errors', () => {
    expect(() => render(<Nested />)).not.toThrow()
  })
})
