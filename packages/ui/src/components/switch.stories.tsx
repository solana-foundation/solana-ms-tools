import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Switch } from './switch'

const meta = {
  title: 'Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: (args) => <Switch {...args} />,
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Switch aria-label="switch" />,
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="airplane-mode" />
      <label
        htmlFor="airplane-mode"
        className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Airplane Mode
      </label>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Switch id="disabled-unchecked" disabled />
        <label
          htmlFor="disabled-unchecked"
          className="text-muted-foreground text-sm leading-none font-medium"
        >
          Disabled (Unchecked)
        </label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="disabled-checked" disabled defaultChecked />
        <label
          htmlFor="disabled-checked"
          className="text-muted-foreground text-sm leading-none font-medium"
        >
          Disabled (Checked)
        </label>
      </div>
    </div>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <div className="flex space-x-2">
      <Switch id="notifications" />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="notifications"
          className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Enable notifications
        </label>
        <p className="text-sm">Receive notifications when someone mentions you.</p>
      </div>
    </div>
  ),
}

const ControlledSwitch = () => {
  const [checked, setChecked] = React.useState(false)
  return (
    <div className="flex items-center gap-2">
      <Switch id="controlled" checked={checked} onCheckedChange={setChecked} />
      <label htmlFor="controlled" className="text-sm leading-none font-medium">
        {checked ? 'On' : 'Off'}
      </label>
    </div>
  )
}

export const Controlled: Story = {
  render: () => <ControlledSwitch />,
}

export const FormExample: Story = {
  render: () => (
    <form className="w-[400px] space-y-4 rounded-lg border p-4">
      <div className="space-y-4">
        <h4 className="text-sm font-medium">Notification Preferences</h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label htmlFor="email-notifications" className="text-sm leading-none font-medium">
              Email notifications
            </label>
            <Switch id="email-notifications" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="marketing-emails" className="text-sm leading-none font-medium">
              Marketing emails
            </label>
            <Switch id="marketing-emails" />
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="security-alerts" className="text-sm leading-none font-medium">
              Security alerts
            </label>
            <Switch id="security-alerts" defaultChecked />
          </div>
        </div>
      </div>
    </form>
  ),
}
