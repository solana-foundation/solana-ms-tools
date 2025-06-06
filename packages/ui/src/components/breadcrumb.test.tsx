import { composeStories } from '@storybook/react-vite'
import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import * as stories from './breadcrumb.stories'

const { Default, WithEllipsis, CustomSeparator, WithCustomStyles, SingleItem, LongBreadcrumb } =
  composeStories(stories)

describe('Breadcrumb Component Stories', () => {
  test('renders Default story without errors', () => {
    expect(() => render(<Default />)).not.toThrow()
  })

  test('renders WithEllipsis story without errors', () => {
    expect(() => render(<WithEllipsis />)).not.toThrow()
  })

  test('renders CustomSeparator story without errors', () => {
    expect(() => render(<CustomSeparator />)).not.toThrow()
  })

  test('renders WithCustomStyles story without errors', () => {
    expect(() => render(<WithCustomStyles />)).not.toThrow()
  })

  test('renders SingleItem story without errors', () => {
    expect(() => render(<SingleItem />)).not.toThrow()
  })

  test('renders LongBreadcrumb story without errors', () => {
    expect(() => render(<LongBreadcrumb />)).not.toThrow()
  })
})
