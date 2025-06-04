import { composeStories } from '@storybook/react'
import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import * as stories from './input.stories'

const { Default, Password, Email, Number, Search, Disabled, WithValue, Invalid, File } =
  composeStories(stories)

describe('Input Component Stories', () => {
  test('renders Default story without errors', () => {
    expect(() => render(<Default />)).not.toThrow()
  })

  test('renders Password story without errors', () => {
    expect(() => render(<Password />)).not.toThrow()
  })

  test('renders Email story without errors', () => {
    expect(() => render(<Email />)).not.toThrow()
  })

  test('renders Number story without errors', () => {
    expect(() => render(<Number />)).not.toThrow()
  })

  test('renders Search story without errors', () => {
    expect(() => render(<Search />)).not.toThrow()
  })

  test('renders Disabled story without errors', () => {
    expect(() => render(<Disabled />)).not.toThrow()
  })

  test('renders WithValue story without errors', () => {
    expect(() => render(<WithValue />)).not.toThrow()
  })

  test('renders Invalid story without errors', () => {
    expect(() => render(<Invalid />)).not.toThrow()
  })

  test('renders File story without errors', () => {
    expect(() => render(<File />)).not.toThrow()
  })
})
