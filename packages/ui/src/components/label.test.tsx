import { composeStories } from '@storybook/react'
import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import * as stories from './label.stories'

const { Default, WithInput, Required, Disabled, WithHelpText, WithIcon } = composeStories(stories)

describe('Label Component Stories', () => {
  test('renders Default story without errors', () => {
    expect(() => render(<Default />)).not.toThrow()
  })

  test('renders WithInput story without errors', () => {
    expect(() => render(<WithInput />)).not.toThrow()
  })

  test('renders Required story without errors', () => {
    expect(() => render(<Required />)).not.toThrow()
  })

  test('renders Disabled story without errors', () => {
    expect(() => render(<Disabled />)).not.toThrow()
  })

  test('renders WithHelpText story without errors', () => {
    expect(() => render(<WithHelpText />)).not.toThrow()
  })

  test('renders WithIcon story without errors', () => {
    expect(() => render(<WithIcon />)).not.toThrow()
  })
})
