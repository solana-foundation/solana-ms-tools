import type { Meta, StoryObj } from '@storybook/react-vite'
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
      <p className="text-sm">Enter your feedback or comments.</p>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="w-[400px]">
      <Textarea
        aria-label="Disabled textarea"
        disabled
        placeholder="You cannot edit this textarea."
      />
    </div>
  ),
}

export const WithError: Story = {
  render: () => (
    <div className="w-[400px] space-y-2">
      <label
        htmlFor="error-message-textarea"
        className="text-destructive text-sm leading-none font-medium"
      >
        Error message
      </label>
      <Textarea
        id="error-message-textarea"
        placeholder="Type your message here."
        aria-invalid="true"
      />
      <p className="text-destructive text-sm">This field is required.</p>
    </div>
  ),
}

export const WithValue: Story = {
  render: () => (
    <div className="w-[400px]">
      <label htmlFor="with-value" className="text-destructive text-sm leading-none font-medium">
        With value
      </label>
      <Textarea
        id="with-value"
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
        aria-label="Auto-resizing textarea"
        className="min-h-[100px]"
        placeholder="This textarea will auto-resize as you type more content..."
      />
    </div>
  ),
}

export const WithMaxLength: Story = {
  render: () => (
    <div className="w-[400px] space-y-2">
      <Textarea
        aria-label="Limited to 100 characters..."
        placeholder="Limited to 100 characters..."
        maxLength={100}
      />
      <p className="text-sm">Maximum 100 characters allowed.</p>
    </div>
  ),
}

export const ReadOnly: Story = {
  render: () => (
    <div className="w-[400px]">
      <Textarea
        aria-label="Read-only textarea"
        readOnly
        value="This content is read-only and cannot be modified."
      />
    </div>
  ),
}
