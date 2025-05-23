import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
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
  render(args) {
    return (
      <div className="w-[90px]">
        <Address {...args} />
      </div>
    )
  },
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
  },
  render(args) {
    return (
      <Address {...args}>
        <a onClick={args.onClick} href="javascript:void(0)">
          {args.address}
        </a>
      </Address>
    )
  },
}
