import type { Meta, StoryObj } from '@storybook/react'
import { Alert, AlertDescription, AlertTitle } from './alert'

const meta = {
  title: 'Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof Alert>

export const Default: Story = {
  args: {
    children: (
      <>
        <AlertTitle>Default Alert</AlertTitle>
        <AlertDescription>This is a default alert message.</AlertDescription>
      </>
    ),
  },
}

export const NoTitle: Story = {
  args: {
    className: 'bg-cyan-500',
    children: (
      <>
        <AlertDescription>
          This is a default alert message without title and custom background.
        </AlertDescription>
      </>
    ),
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    children: (
      <>
        <AlertTitle>Test account has been created</AlertTitle>
        <AlertDescription>You can now use your test account.</AlertDescription>
      </>
    ),
  },
}

export const Error: Story = {
  args: {
    variant: 'error',
    children: (
      <>
        <AlertTitle>Error occurred</AlertTitle>
        <AlertDescription>Something went wrong. Please try again.</AlertDescription>
      </>
    ),
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: (
      <>
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>Please review your changes before continuing.</AlertDescription>
      </>
    ),
  },
}

export const Info: Story = {
  args: {
    variant: 'info',
    children: (
      <>
        <AlertTitle>Information</AlertTitle>
        <AlertDescription>This feature is currently in beta.</AlertDescription>
      </>
    ),
  },
}

export const WithCloseButton: Story = {
  args: {
    variant: 'success',
    onClose: () => console.log('Alert closed'),
    children: (
      <>
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>Action completed successfully.</AlertDescription>
      </>
    ),
  },
}
