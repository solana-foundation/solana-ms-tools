import type { Meta, StoryObj } from '@storybook/react'
import { toast } from 'sonner'
import { Alert, AlertDescription, AlertTitle } from './alert'
import { Button } from './button'
import { Toaster } from './sonner'

const meta = {
  title: 'Toaster (Sonner)',
  component: Toaster,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

const ToastTrigger = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Button onClick={() => toast('Default toast message')}>Default Toast</Button>
        <Button onClick={() => toast.success('Success toast message')}>Success Toast</Button>
        <Button onClick={() => toast.error('Error toast message')}>Error Toast</Button>
      </div>
      <div className="flex gap-4">
        <Button onClick={() => toast.info('Info toast message')}>Info Toast</Button>
        <Button onClick={() => toast.warning('Warning toast message')}>Warning Toast</Button>
        <Button onClick={() => toast.loading('Loading toast message')}>Loading Toast</Button>
      </div>
      <div className="flex gap-4">
        <Button
          onClick={() =>
            toast('Custom toast', {
              description: 'This is a more detailed description of the toast.',
              action: {
                label: 'Undo',
                onClick: () => console.log('Undo'),
              },
            })
          }
        >
          Toast with Action
        </Button>
        <Button
          onClick={() =>
            toast.promise(
              () =>
                new Promise((resolve) => {
                  setTimeout(resolve, 2000)
                }),
              {
                loading: 'Loading...',
                success: 'Promise resolved',
                error: 'Promise rejected',
              }
            )
          }
        >
          Promise Toast
        </Button>
      </div>
    </div>
  )
}

export const Default: Story = {
  render: () => (
    <>
      <ToastTrigger />
      <Toaster />
    </>
  ),
}

export const TopLeft: Story = {
  render: () => (
    <>
      <ToastTrigger />
      <Toaster position="top-left" />
    </>
  ),
}

export const TopRight: Story = {
  render: () => (
    <>
      <ToastTrigger />
      <Toaster position="top-right" />
    </>
  ),
}

export const BottomLeft: Story = {
  render: () => (
    <>
      <ToastTrigger />
      <Toaster position="bottom-left" />
    </>
  ),
}

export const BottomRight: Story = {
  render: () => (
    <>
      <ToastTrigger />
      <Toaster position="bottom-right" />
    </>
  ),
}

export const CustomDuration: Story = {
  render: () => (
    <>
      <div className="flex gap-4">
        <Button onClick={() => toast('Quick toast', { duration: 1000 })}>Quick Toast (1s)</Button>
        <Button onClick={() => toast('Long toast', { duration: 5000 })}>Long Toast (5s)</Button>
        <Button onClick={() => toast('Permanent toast', { duration: Infinity })}>
          Permanent Toast
        </Button>
      </div>
      <Toaster />
    </>
  ),
}

export const RichContent: Story = {
  render: () => (
    <>
      <div className="flex gap-4">
        <Button
          onClick={() =>
            toast(
              <div className="flex gap-2">
                <span className="text-lg">🎉</span>
                <div>
                  <p className="font-semibold">Rich Content Toast</p>
                  <p className="text-muted-foreground text-sm">With custom styling and elements</p>
                </div>
              </div>
            )
          }
        >
          Rich Content
        </Button>
        <Button
          onClick={() =>
            toast('Multi-action toast', {
              description: 'This toast has multiple action buttons.',
              action: {
                label: 'Primary',
                onClick: () => console.log('Primary action'),
              },
              cancel: {
                label: 'Cancel',
                onClick: () => console.log('Cancel action'),
              },
            })
          }
        >
          Multiple Actions
        </Button>
      </div>
      <Toaster />
    </>
  ),
}

export const CustomStyling: Story = {
  render: () => (
    <>
      <Button
        onClick={() =>
          toast('Custom styled toast', {
            className: 'bg-primary text-primary-foreground border-none',
            description: 'This toast has custom styling applied.',
          })
        }
      >
        Show Custom Styled Toast
      </Button>
      <Toaster />
    </>
  ),
}

export const AlertToasts: Story = {
  render: () => (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <Button
            onClick={() =>
              toast(
                <Alert variant="info">
                  <AlertTitle>Information</AlertTitle>
                  <AlertDescription>
                    This is an informative message using the Alert component.
                  </AlertDescription>
                </Alert>
              )
            }
          >
            Info Alert Toast
          </Button>
          <Button
            onClick={() =>
              toast(
                <Alert variant="warning">
                  <AlertTitle>Warning</AlertTitle>
                  <AlertDescription>
                    Please be cautious! This is a warning message.
                  </AlertDescription>
                </Alert>
              )
            }
          >
            Warning Alert Toast
          </Button>
        </div>
        <div className="flex gap-4">
          <Button
            onClick={() =>
              toast(
                <Alert variant="success">
                  <AlertTitle>Success</AlertTitle>
                  <AlertDescription>Your action was completed successfully!</AlertDescription>
                </Alert>
              )
            }
          >
            Success Alert Toast
          </Button>
          <Button
            onClick={() =>
              toast(
                <Alert variant="error">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>Something went wrong. Please try again.</AlertDescription>
                </Alert>
              )
            }
          >
            Error Alert Toast
          </Button>
        </div>
        <div className="flex gap-4">
          <Button
            onClick={() =>
              toast(
                <Alert variant="default">
                  <AlertTitle className="text-highlight">Custom Alert</AlertTitle>
                  <AlertDescription>
                    This alert uses custom styling with highlight color.
                  </AlertDescription>
                </Alert>,
                {
                  className: 'p-0', // Remove default toast padding
                }
              )
            }
          >
            Custom Alert Toast
          </Button>
          <Button
            onClick={() =>
              toast(
                <Alert variant="warning">
                  <AlertTitle>Alert with Action</AlertTitle>
                  <AlertDescription>This alert has an action button.</AlertDescription>
                </Alert>,
                {
                  action: {
                    label: 'Handle',
                    onClick: () => console.log('Action clicked'),
                  },
                }
              )
            }
          >
            Alert with Action
          </Button>
        </div>
      </div>
      <Toaster />
    </>
  ),
}
