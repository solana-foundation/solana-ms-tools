import { composeStories } from '@storybook/react'
import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import * as stories from './progress.stories'

const { Default, WithLabel, CustomHeight, CustomColors, Loading, States, WithCustomStyling } =
  composeStories(stories)

describe('Progress Component Stories', () => {
  test('renders Default story without errors', () => {
    expect(() => render(<Default />)).not.toThrow()
  })

  test('renders WithLabel story without errors', () => {
    expect(() => render(<WithLabel />)).not.toThrow()
  })

  test('renders CustomHeight story without errors', () => {
    expect(() => render(<CustomHeight />)).not.toThrow()
  })

  test('renders CustomColors story without errors', () => {
    expect(() => render(<CustomColors />)).not.toThrow()
  })

  test('renders Loading story without errors', () => {
    expect(() => render(<Loading />)).not.toThrow()
  })

  test('renders States story without errors', () => {
    expect(() => render(<States />)).not.toThrow()
  })

  test('renders WithCustomStyling story without errors', () => {
    expect(() => render(<WithCustomStyling />)).not.toThrow()
  })
})
