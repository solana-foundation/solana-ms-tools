import type { Meta, StoryObj } from '@storybook/react-vite'
import { Label } from './label'
import { RadioGroup, RadioGroupItem } from './radio-group'

const meta = {
  title: 'RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  render: (args) => (
    <RadioGroup defaultValue="option-1" {...args}>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-1" id="option-1" />
        <Label htmlFor="option-1">Option 1</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-2" id="option-2" />
        <Label htmlFor="option-2">Option 2</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-3" id="option-3" />
        <Label htmlFor="option-3">Option 3</Label>
      </div>
    </RadioGroup>
  ),
}

export const WithDescription: Story = {
  render: (args) => (
    <RadioGroup defaultValue="card" {...args}>
      <div className="flex items-start gap-2">
        <RadioGroupItem value="card" id="card" className="mt-1" />
        <div>
          <Label htmlFor="card">Card Payment</Label>
          <p className="text-muted-foreground text-sm">Pay with your credit or debit card.</p>
        </div>
      </div>
      <div className="flex items-start gap-2">
        <RadioGroupItem value="paypal" id="paypal" className="mt-1" />
        <div>
          <Label htmlFor="paypal">PayPal</Label>
          <p className="text-muted-foreground text-sm">Pay with your PayPal account.</p>
        </div>
      </div>
    </RadioGroup>
  ),
}

export const Disabled: Story = {
  render: (args) => (
    <RadioGroup defaultValue="option-1" {...args}>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-1" id="disabled-1" disabled />
        <Label htmlFor="disabled-1">Disabled Option 1</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-2" id="disabled-2" disabled />
        <Label htmlFor="disabled-2">Disabled Option 2</Label>
      </div>
    </RadioGroup>
  ),
}

export const Invalid: Story = {
  render: (args) => (
    <div className="flex flex-col gap-1.5">
      <RadioGroup defaultValue="option-1" aria-invalid {...args}>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option-1" id="invalid-1" />
          <Label htmlFor="invalid-1">Invalid Option 1</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option-2" id="invalid-2" />
          <Label htmlFor="invalid-2">Invalid Option 2</Label>
        </div>
      </RadioGroup>
      <p className="text-destructive text-sm">Please select a valid option.</p>
    </div>
  ),
}

export const Horizontal: Story = {
  render: (args) => (
    <RadioGroup defaultValue="option-1" className="flex gap-6" {...args}>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-1" id="horizontal-1" />
        <Label htmlFor="horizontal-1">Option 1</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-2" id="horizontal-2" />
        <Label htmlFor="horizontal-2">Option 2</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-3" id="horizontal-3" />
        <Label htmlFor="horizontal-3">Option 3</Label>
      </div>
    </RadioGroup>
  ),
}

export const WithCustomSize: Story = {
  render: (args) => (
    <RadioGroup defaultValue="option-1" {...args}>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="option-1" id="size-1" className="size-6" />
        <Label htmlFor="size-1" className="text-lg">
          Large Option
        </Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="option-2" id="size-2" className="size-6" />
        <Label htmlFor="size-2" className="text-lg">
          Large Option
        </Label>
      </div>
    </RadioGroup>
  ),
}
