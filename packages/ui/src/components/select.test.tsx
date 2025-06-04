import { composeStories } from '@storybook/react'
import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import * as stories from './select.stories'

const { Default, Disabled, GroupedOptions, WithIcon } = composeStories(stories)

describe('Select Component Stories', () => {
  test('renders Default story without errors', () => {
    expect(() => render(<Default />)).not.toThrow()
  })

  test('renders Disabled story without errors', () => {
    expect(() => render(<Disabled />)).not.toThrow()
  })

  test('renders GroupedOptions story without errors', () => {
    expect(() => render(<GroupedOptions />)).not.toThrow()
  })

  test('renders WithIcon story without errors', () => {
    expect(() => render(<WithIcon />)).not.toThrow()
  })
})
