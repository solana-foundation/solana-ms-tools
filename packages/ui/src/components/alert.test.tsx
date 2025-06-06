import { composeStories } from '@storybook/react-vite'
import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import * as stories from './alert.stories'

const { Default, NoTitle, Success, Error, Warning, Info, WithCloseButton } = composeStories(stories)

describe('Alert Component Stories', () => {
  test('renders Default story without errors', () => {
    expect(() => render(<Default />)).not.toThrow()
  })

  test('renders NoTitle story without errors', () => {
    expect(() => render(<NoTitle />)).not.toThrow()
  })

  test('renders Success story without errors', () => {
    expect(() => render(<Success />)).not.toThrow()
  })

  test('renders Error story without errors', () => {
    expect(() => render(<Error />)).not.toThrow()
  })

  test('renders Warning story without errors', () => {
    expect(() => render(<Warning />)).not.toThrow()
  })

  test('renders Info story without errors', () => {
    expect(() => render(<Info />)).not.toThrow()
  })

  test('renders WithCloseButton story without errors', () => {
    expect(() => render(<WithCloseButton />)).not.toThrow()
  })
})
