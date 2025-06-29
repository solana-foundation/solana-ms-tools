import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from '@storybook/test'
import { Badge } from './badge'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Badge',
  component: Badge,
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
  render: (args) => <Badge {...args} />,
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    variant: 'default',
    size: 'xs',
    children: 'Badge',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    size: 'xxs',
    children: 'Success',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    size: 'xxs',
    children: 'Failed',
  },
}
