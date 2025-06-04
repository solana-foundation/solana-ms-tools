import { composeStories } from '@storybook/react'
import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import * as stories from './form.stories'

const { Default, InitialValues, ValidationErrors, DisabledFields } = composeStories(stories)

describe('Form Component Stories', () => {
  test('renders Default story without errors', () => {
    expect(() => render(<Default />)).not.toThrow()
  })

  test('renders InitialValues story without errors', () => {
    expect(() => render(<InitialValues />)).not.toThrow()
  })

  test('renders ValidationErrors story without errors', () => {
    expect(() => render(<ValidationErrors />)).not.toThrow()
  })

  test('renders DisabledFields story without errors', () => {
    expect(() => render(<DisabledFields />)).not.toThrow()
  })
})
