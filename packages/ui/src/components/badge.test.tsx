import { composeStories } from '@storybook/react'
import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import * as stories from './badge.stories'

const { Default, Success, Failure } = composeStories(stories)

describe('Badge Component Stories', () => {
  test('renders Default story without errors', () => {
    expect(() => render(<Default />)).not.toThrow()
  })

  test('renders Success story without errors', () => {
    expect(() => render(<Success />)).not.toThrow()
  })

  test('renders Failure story without errors', () => {
    expect(() => render(<Failure />)).not.toThrow()
  })
})
