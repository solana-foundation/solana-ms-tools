import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { withTestProvider } from '../../test/test-utils'
import { Address } from './address'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Address',
  component: Address,
  parameters: {
    layout: 'left',
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
  decorators: [withTestProvider],
  render: (args) => <Address {...args} />,
} satisfies Meta<typeof Address>

export default meta

type Story = StoryObj<typeof meta>

const wSolAddress = 'So11111111111111111111111111111111111111112'

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    address: wSolAddress,
  },
}

export const Truncated: Story = {
  args: {
    address: wSolAddress,
    truncateUnknown: true,
    displayAddress: wSolAddress,
  },
  decorators: [
    (Story) => (
      <div className="w-[90px]">
        <Story />
      </div>
    ),
  ],
}

export const TruncatedWithLimit: Story = {
  args: {
    address: wSolAddress,
    truncateChars: 10,
  },
}

export const OverrideText: Story = {
  args: {
    address: wSolAddress,
    truncateChars: 10,
    overrideText: 'wSol',
  },
}

export const AsLink: Story = {
  args: {
    address: wSolAddress,
    asChild: true,
    children: (
      <a
        href="javascript:void(0)"
        onClick={(e) => {
          e.preventDefault()
          meta.args.onClick()
        }}
      >
        {wSolAddress}
      </a>
    ),
  },
}
