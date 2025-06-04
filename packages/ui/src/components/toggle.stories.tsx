import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Toggle } from './toggle'

const meta = {
  title: 'Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: (args) => <Toggle {...args} />,
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    'aria-label': 'Toggle italic',
  },
  render: () => (
    <Toggle aria-label="Toggle italic">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="19" x2="10" y1="4" y2="4" />
        <line x1="14" x2="5" y1="20" y2="20" />
        <line x1="15" x2="9" y1="4" y2="20" />
      </svg>
    </Toggle>
  ),
}

export const WithText: Story = {
  args: {
    'aria-label': 'Toggle italic',
  },
  render: () => (
    <Toggle aria-label="Toggle italic">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="19" x2="10" y1="4" y2="4" />
        <line x1="14" x2="5" y1="20" y2="20" />
        <line x1="15" x2="9" y1="4" y2="20" />
      </svg>
      Italic
    </Toggle>
  ),
}

export const Sizes: Story = {
  args: {
    'aria-label': 'Toggle sizes',
  },
  render: () => (
    <div className="flex items-center gap-4">
      <Toggle size="sm" aria-label="Toggle small">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" />
          <line x1="4" x2="20" y1="21" y2="21" />
        </svg>
        Small
      </Toggle>
      <Toggle aria-label="Toggle default">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" />
          <line x1="4" x2="20" y1="21" y2="21" />
        </svg>
        Default
      </Toggle>
      <Toggle size="lg" aria-label="Toggle large">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" />
          <line x1="4" x2="20" y1="21" y2="21" />
        </svg>
        Large
      </Toggle>
    </div>
  ),
}

export const Variants: Story = {
  args: {
    'aria-label': 'Toggle variants',
  },
  render: () => (
    <div className="flex items-center gap-4">
      <Toggle variant="default" aria-label="Toggle default variant">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 3v10" />
          <path d="M7 3v10" />
          <path d="M7 13h10" />
          <path d="M7 17h10" />
          <path d="M7 21h10" />
        </svg>
        Default
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle outline variant">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 3v10" />
          <path d="M7 3v10" />
          <path d="M7 13h10" />
          <path d="M7 17h10" />
          <path d="M7 21h10" />
        </svg>
        Outline
      </Toggle>
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    'aria-label': 'Toggle disabled',
    disabled: true,
  },
  render: () => (
    <div className="flex items-center gap-4">
      <Toggle disabled aria-label="Toggle disabled">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" />
          <line x1="4" x2="20" y1="21" y2="21" />
        </svg>
        Disabled
      </Toggle>
      <Toggle variant="outline" disabled aria-label="Toggle outline disabled">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" />
          <line x1="4" x2="20" y1="21" y2="21" />
        </svg>
        Outline Disabled
      </Toggle>
    </div>
  ),
}
