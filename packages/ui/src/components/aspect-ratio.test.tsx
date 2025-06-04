import { composeStories } from '@storybook/react'
import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import * as stories from './aspect-ratio.stories'

const { Square, Landscape16by9, Portrait4by5, WithImage, WithVideo } = composeStories(stories)

describe('AspectRatio Component Stories', () => {
  test('renders Square story without errors', () => {
    expect(() => render(<Square />)).not.toThrow()
  })

  test('renders Landscape16by9 story without errors', () => {
    expect(() => render(<Landscape16by9 />)).not.toThrow()
  })

  test('renders Portrait4by5 story without errors', () => {
    expect(() => render(<Portrait4by5 />)).not.toThrow()
  })

  test('renders WithImage story without errors', () => {
    expect(() => render(<WithImage />)).not.toThrow()
  })

  test('renders WithVideo story without errors', () => {
    expect(() => render(<WithVideo />)).not.toThrow()
  })
})
