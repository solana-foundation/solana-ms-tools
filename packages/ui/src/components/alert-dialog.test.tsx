import { composeStories } from '@storybook/react-vite'
import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import * as stories from './alert-dialog.stories'

const { Default, CustomStyling, WithLongContent } = composeStories(stories)

describe('AlertDialog Component Stories', () => {
  test('renders Default story without errors', () => {
    expect(() => render(<Default />)).not.toThrow()
  })

  test('renders CustomStyling story without errors', () => {
    expect(() => render(<CustomStyling />)).not.toThrow()
  })

  test('renders WithLongContent story without errors', () => {
    expect(() => render(<WithLongContent />)).not.toThrow()
  })
})
