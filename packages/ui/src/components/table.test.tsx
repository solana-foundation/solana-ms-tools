import { composeStories } from '@storybook/react'
import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import * as stories from './table.stories'

const { Default, Caption, Header, Body, Footer } = composeStories(stories)

describe('Table Component Stories', () => {
  test('renders Default story without errors', () => {
    expect(() => render(<Default />)).not.toThrow()
  })

  test('renders Caption story without errors', () => {
    expect(() => render(<Caption />)).not.toThrow()
  })

  test('renders Header story without errors', () => {
    expect(() => render(<Header />)).not.toThrow()
  })

  test('renders Body story without errors', () => {
    expect(() => render(<Body />)).not.toThrow()
  })

  test('renders Footer story without errors', () => {
    expect(() => render(<Footer />)).not.toThrow()
  })
})
