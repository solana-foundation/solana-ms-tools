import type { Meta, StoryObj } from '@storybook/react'
import { expect, fn, within } from '@storybook/test'
import { Copyable } from './copyable'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Copyable',
  component: Copyable,
  parameters: {
    layout: 'left',
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
  render: (args) => <Copyable {...args} />,
} satisfies Meta<typeof Copyable>

export default meta

type Story = StoryObj<typeof meta>

const copyable = 'String to Copy'

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    text: copyable,
    children: copyable,
  },
  async play({ canvasElement }) {
    const canvas = within(canvasElement)
    const copyableButton = canvas.getByLabelText('button')
    expect(copyableButton).toBeInTheDOM()
  },
}

export const Copied: Story = {
  args: {
    text: copyable,
    children: 'Copied',
    _initialState: 'copied',
  },
}

export const Errored: Story = {
  args: {
    text: copyable,
    children: 'Not Copied',
    _initialState: 'errored',
  },
}

export const WithReplacedText: Story = {
  args: {
    text: copyable,
    children: copyable,
    replaceText: true,
  },
}
