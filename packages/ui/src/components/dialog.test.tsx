import { composeStories } from '@storybook/react'
import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import * as stories from './dialog.stories'

const { Basic, Alert, CustomStyling } = composeStories(stories)

describe('Dialog Component Stories', () => {
  test('renders Basic story without errors', () => {
    expect(() => render(<Basic />)).not.toThrow()
  })

  test('renders Alert story without errors', () => {
    expect(() => render(<Alert />)).not.toThrow()
  })

  test('renders CustomStyling story without errors', () => {
    expect(() => render(<CustomStyling />)).not.toThrow()
  })
})
