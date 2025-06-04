import { composeStories } from '@storybook/react'
import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import * as stories from './address.stories'

const { Default, Truncated, TruncatedWithLimit, OverrideText, AsLink } = composeStories(stories)

describe('Address Component Stories', () => {
  test('renders Default story without errors', () => {
    expect(() => render(<Default />)).not.toThrow()
  })

  test('renders Truncated story without errors', () => {
    expect(() => render(<Truncated />)).not.toThrow()
  })

  test('renders TruncatedWithLimit story without errors', () => {
    expect(() => render(<TruncatedWithLimit />)).not.toThrow()
  })

  test('renders OverrideText story without errors', () => {
    expect(() => render(<OverrideText />)).not.toThrow()
  })

  test('renders AsLink story without errors', () => {
    expect(() => render(<AsLink />)).not.toThrow()
  })
})
