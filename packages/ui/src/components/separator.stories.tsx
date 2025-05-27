import type { Meta, StoryObj } from '@storybook/react'
import { Separator } from './separator'

const meta = {
  title: 'Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof Separator>

export const Default: Story = {
  render: (args) => (
    <div className="w-80">
      <div className="space-y-1">
        <h4 className="text-sm leading-none font-medium">Radix UI</h4>
        <p className="text-muted-foreground text-sm">An open-source UI component library.</p>
      </div>
      <Separator className="my-4" {...args} />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),
}

export const Horizontal: Story = {
  render: (args) => (
    <div className="w-80">
      <div className="space-y-1">
        <h4 className="text-sm leading-none font-medium">Navigation</h4>
        <p className="text-muted-foreground text-sm">Main navigation links</p>
      </div>
      <Separator className="my-4" {...args} />
      <div className="space-y-4 text-sm">
        <div>Dashboard</div>
        <Separator />
        <div>Settings</div>
        <Separator />
        <div>Messages</div>
        <Separator />
        <div>Account</div>
      </div>
    </div>
  ),
}

export const Vertical: Story = {
  render: (args) => (
    <div className="flex h-32 items-center">
      <div className="space-y-1">
        <h4 className="text-sm leading-none font-medium">Left Content</h4>
        <p className="text-muted-foreground text-sm">Description for left section.</p>
      </div>
      <Separator orientation="vertical" className="mx-8" {...args} />
      <div className="space-y-1">
        <h4 className="text-sm leading-none font-medium">Right Content</h4>
        <p className="text-muted-foreground text-sm">Description for right section.</p>
      </div>
    </div>
  ),
}

export const WithinList: Story = {
  render: (args) => (
    <div className="w-80 space-y-4">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h4 className="text-sm leading-none font-medium">Item One</h4>
          <p className="text-muted-foreground text-sm">Description for item one</p>
        </div>
        <button className="text-primary text-sm">Action</button>
      </div>
      <Separator {...args} />
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h4 className="text-sm leading-none font-medium">Item Two</h4>
          <p className="text-muted-foreground text-sm">Description for item two</p>
        </div>
        <button className="text-primary text-sm">Action</button>
      </div>
      <Separator {...args} />
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h4 className="text-sm leading-none font-medium">Item Three</h4>
          <p className="text-muted-foreground text-sm">Description for item three</p>
        </div>
        <button className="text-primary text-sm">Action</button>
      </div>
    </div>
  ),
}

export const CustomStyling: Story = {
  render: (args) => (
    <div className="w-80">
      <div className="space-y-1">
        <h4 className="text-sm leading-none font-medium">Custom Separator</h4>
        <p className="text-muted-foreground text-sm">With custom styling applied.</p>
      </div>
      <Separator className="bg-primary/50 my-4" {...args} />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>First</div>
        <Separator orientation="vertical" className="bg-primary/50" />
        <div>Second</div>
        <Separator orientation="vertical" className="bg-primary/50" />
        <div>Third</div>
      </div>
    </div>
  ),
}
