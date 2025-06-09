import type { Meta, StoryObj } from '@storybook/react-vite'
import { Checkbox } from './checkbox'

const meta: Meta = {
  title: 'Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'The controlled checked state of the checkbox',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'The default checked state when initially rendered',
    },
    disabled: {
      control: 'boolean',
      description: 'When true, prevents the user from interacting with the checkbox',
    },
    required: {
      control: 'boolean',
      description: 'When true, indicates that the user must check the checkbox',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the checkbox',
    },
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" {...args} />
      <label
        htmlFor="terms"
        className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  ),
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {},
}

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
}

export const Required: Story = {
  args: {
    required: true,
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" {...args} />
      <label
        htmlFor="terms"
        className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  ),
}

export const WithLabel: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" {...args} />
      <label
        htmlFor="terms"
        className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  ),
}

export const WithError: Story = {
  args: {
    'aria-invalid': true,
  },
}

export const InFormGroup: Story = {
  render: (args) => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="option1" {...args} />
        <label htmlFor="option1" className="text-sm leading-none font-medium">
          Email notifications
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="option2" {...args} />
        <label htmlFor="option2" className="text-sm leading-none font-medium">
          SMS notifications
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="option3" {...args} />
        <label htmlFor="option3" className="text-sm leading-none font-medium">
          Push notifications
        </label>
      </div>
    </div>
  ),
}
