import { composeStories } from '@storybook/react-vite'
import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import * as stories from './button.stories'

const { Default, Destructive, Outline, Secondary, Ghost, Link, Small, Large, Icon } =
  composeStories(stories)

describe('Button Component Stories', () => {
  test('renders Default story without errors', () => {
    expect(() => render(<Default />)).not.toThrow()
  })

  test('renders Destructive story without errors', () => {
    expect(() => render(<Destructive />)).not.toThrow()
  })

  test('renders Outline story without errors', () => {
    expect(() => render(<Outline />)).not.toThrow()
  })

  test('renders Secondary story without errors', () => {
    expect(() => render(<Secondary />)).not.toThrow()
  })

  test('renders Ghost story without errors', () => {
    expect(() => render(<Ghost />)).not.toThrow()
  })

  test('renders Link story without errors', () => {
    expect(() => render(<Link />)).not.toThrow()
  })

  test('renders Small story without errors', () => {
    expect(() => render(<Small />)).not.toThrow()
  })

  test('renders Large story without errors', () => {
    expect(() => render(<Large />)).not.toThrow()
  })

  test('renders Icon story without errors', () => {
    expect(() => render(<Icon />)).not.toThrow()
  })
})
