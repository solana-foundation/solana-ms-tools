import { composeStories } from '@storybook/react'
import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import * as stories from './skeleton.stories'

const { Default, Text, Circle, Card, List, CustomStyling, WithContent } = composeStories(stories)

describe('Skeleton Component Stories', () => {
  test('renders Default story without errors', () => {
    expect(() => render(<Default />)).not.toThrow()
  })

  test('renders Text story without errors', () => {
    expect(() => render(<Text />)).not.toThrow()
  })

  test('renders Circle story without errors', () => {
    expect(() => render(<Circle />)).not.toThrow()
  })

  test('renders Card story without errors', () => {
    expect(() => render(<Card />)).not.toThrow()
  })

  test('renders List story without errors', () => {
    expect(() => render(<List />)).not.toThrow()
  })

  test('renders CustomStyling story without errors', () => {
    expect(() => render(<CustomStyling />)).not.toThrow()
  })

  test('renders WithContent story without errors', () => {
    expect(() => render(<WithContent />)).not.toThrow()
  })
})
