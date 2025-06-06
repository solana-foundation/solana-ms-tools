import { composeStories } from '@storybook/react-vite'
import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import * as stories from './checkbox.stories'

const { Default, Checked, Disabled, DisabledChecked, Required, WithLabel, WithError, InFormGroup } =
  composeStories(stories)

describe('Checkbox Component Stories', () => {
  test('renders Default story without errors', () => {
    expect(() => render(<Default />)).not.toThrow()
  })

  test('renders Checked story without errors', () => {
    expect(() => render(<Checked />)).not.toThrow()
  })

  test('renders Disabled story without errors', () => {
    expect(() => render(<Disabled />)).not.toThrow()
  })

  test('renders DisabledChecked story without errors', () => {
    expect(() => render(<DisabledChecked />)).not.toThrow()
  })

  test('renders Required story without errors', () => {
    expect(() => render(<Required />)).not.toThrow()
  })

  test('renders WithLabel story without errors', () => {
    expect(() => render(<WithLabel />)).not.toThrow()
  })

  test('renders WithError story without errors', () => {
    expect(() => render(<WithError />)).not.toThrow()
  })

  test('renders InFormGroup story without errors', () => {
    expect(() => render(<InFormGroup />)).not.toThrow()
  })
})
