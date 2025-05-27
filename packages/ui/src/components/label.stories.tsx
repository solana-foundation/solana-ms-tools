import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './input'
import { Label } from './label'

const meta = {
  title: 'Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof Label>

export const Default: Story = {
  args: {
    children: 'Label',
  },
}

export const WithInput: Story = {
  render: (args) => (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor="email" {...args}>
        Email address
      </Label>
      <Input id="email" type="email" placeholder="Enter your email" />
    </div>
  ),
}

export const Required: Story = {
  render: (args) => (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor="required-field" {...args}>
        Required field
        <span className="text-destructive">*</span>
      </Label>
      <Input id="required-field" required />
    </div>
  ),
}

export const Disabled: Story = {
  render: (args) => (
    <div className="group flex flex-col gap-1.5" data-disabled="true">
      <Label htmlFor="disabled-input" {...args}>
        Disabled input
      </Label>
      <Input id="disabled-input" disabled />
    </div>
  ),
}

export const WithHelpText: Story = {
  render: (args) => (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor="with-help" {...args}>
        Password
      </Label>
      <Input id="with-help" type="password" />
      <p className="text-muted-foreground text-sm">Password must be at least 8 characters long</p>
    </div>
  ),
}

export const WithIcon: Story = {
  render: (args) => (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor="with-icon" {...args}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
        </svg>
        Email address
      </Label>
      <Input id="with-icon" type="email" placeholder="Enter your email" />
    </div>
  ),
}
