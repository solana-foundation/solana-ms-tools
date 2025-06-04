import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from './textarea'

const meta = {
  title: 'Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: (args) => <Textarea {...args} />,
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-[400px]">
      <Textarea placeholder="Type your message here." />
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="w-[400px] space-y-2">
      <label
        htmlFor="message"
        className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Your message
      </label>
      <Textarea id="message" placeholder="Type your message here." />
      <p className="text-muted-foreground text-sm">Enter your feedback or comments.</p>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="w-[400px]">
      <Textarea disabled placeholder="You cannot edit this textarea." />
    </div>
  ),
}

export const WithError: Story = {
  render: () => (
    <div className="w-[400px] space-y-2">
      <label htmlFor="error-message" className="text-destructive text-sm leading-none font-medium">
        Error message
      </label>
      <Textarea id="error-message" placeholder="Type your message here." aria-invalid="true" />
      <p className="text-destructive text-sm">This field is required.</p>
    </div>
  ),
}

export const WithValue: Story = {
  render: () => (
    <div className="w-[400px]">
      <Textarea
        value="This is some preset content that you can edit."
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  ),
}

export const AutoResizing: Story = {
  render: () => (
    <div className="w-[400px]">
      <Textarea
        className="min-h-[100px]"
        placeholder="This textarea will auto-resize as you type more content..."
      />
    </div>
  ),
}

export const WithMaxLength: Story = {
  render: () => (
    <div className="w-[400px] space-y-2">
      <Textarea placeholder="Limited to 100 characters..." maxLength={100} />
      <p className="text-muted-foreground text-sm">Maximum 100 characters allowed.</p>
    </div>
  ),
}

export const ReadOnly: Story = {
  render: () => (
    <div className="w-[400px]">
      <Textarea readOnly value="This content is read-only and cannot be modified." />
    </div>
  ),
}
