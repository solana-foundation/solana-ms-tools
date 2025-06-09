import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from './input'

const meta = {
  title: 'Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'search', 'tel', 'url', 'file'],
    },
    disabled: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
  },
  render: (args) => (
    <label>
      Input
      <Input {...args} />
    </label>
  ),
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    type: 'text',
  },
}

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password...',
  },
}

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'Enter email...',
  },
}

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: 'Enter number...',
  },
}

export const Search: Story = {
  args: {
    type: 'search',
    placeholder: 'Search...',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
    type: 'text',
  },
}

export const WithValue: Story = {
  args: {
    defaultValue: 'Hello World',
    type: 'text',
  },
}

export const Invalid: Story = {
  args: {
    'aria-invalid': true,
    defaultValue: 'Invalid input',
    type: 'text',
  },
}

export const File: Story = {
  args: {
    type: 'file',
    accept: 'image/*',
  },
}
