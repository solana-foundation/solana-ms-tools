import { composeStories } from '@storybook/react'
import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import * as stories from './sonner.stories'

const {
  Default,
  TopLeft,
  TopRight,
  BottomLeft,
  BottomRight,
  CustomDuration,
  RichContent,
  CustomStyling,
  AlertToasts,
} = composeStories(stories)

describe('Sonner Component Stories', () => {
  test('renders Default story without errors', () => {
    expect(() => render(<Default />)).not.toThrow()
  })

  test('renders TopLeft story without errors', () => {
    expect(() => render(<TopLeft />)).not.toThrow()
  })

  test('renders TopRight story without errors', () => {
    expect(() => render(<TopRight />)).not.toThrow()
  })

  test('renders BottomLeft story without errors', () => {
    expect(() => render(<BottomLeft />)).not.toThrow()
  })

  test('renders BottomRight story without errors', () => {
    expect(() => render(<BottomRight />)).not.toThrow()
  })

  test('renders CustomDuration story without errors', () => {
    expect(() => render(<CustomDuration />)).not.toThrow()
  })

  test('renders RichContent story without errors', () => {
    expect(() => render(<RichContent />)).not.toThrow()
  })

  test('renders CustomStyling story without errors', () => {
    expect(() => render(<CustomStyling />)).not.toThrow()
  })

  test('renders AlertToasts story without errors', () => {
    expect(() => render(<AlertToasts />)).not.toThrow()
  })
})
