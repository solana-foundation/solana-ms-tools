import type { Meta, StoryObj } from '@storybook/react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './alert-dialog'

const meta = {
  title: 'AlertDialog',
  component: AlertDialog,
  tags: ['autodocs'],
  render: (args) => <AlertDialog {...args} />,
}

export default meta
type Story = StoryObj<typeof AlertDialog>

export const Default: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2">
        Delete Account
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Delete Account</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const CustomStyling: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger className="bg-destructive text-accent-foreground hover:bg-destructive/90 rounded-md px-4 py-2">
        Dangerous Action
      </AlertDialogTrigger>
      <AlertDialogContent className="border-destructive">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-destructive-foreground">
            Warning: Dangerous Action
          </AlertDialogTitle>
          <AlertDialogDescription className="text-destructive-foreground/80">
            You are about to perform a dangerous action that could have serious consequences. Please
            confirm that you understand the risks involved.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Go Back</AlertDialogCancel>
          <AlertDialogAction className="bg-destructive text-accent-foreground hover:bg-destructive/90">
            I Understand, Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const WithLongContent: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2">
        Show Terms
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Terms of Service</AlertDialogTitle>
          <AlertDialogDescription className="max-h-[200px] overflow-y-auto">
            <div className="space-y-4">
              <p>
                By accessing and using this application, you agree to be bound by these Terms of
                Service. Please read them carefully before proceeding.
              </p>
              <p>
                1. Your use of the service is subject to these terms and conditions. By using the
                service, you agree to these terms.
              </p>
              <p>
                2. We reserve the right to modify these terms at any time. Your continued use of the
                service constitutes acceptance of the modified terms.
              </p>
              <p>
                3. You are responsible for maintaining the confidentiality of your account and
                password.
              </p>
              <p>
                4. We may terminate or suspend your access to the service immediately, without prior
                notice or liability.
              </p>
              <p>
                5. The service is provided &apos;as is&apos; without any warranties, express or
                implied.
              </p>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Decline</AlertDialogCancel>
          <AlertDialogAction>Accept Terms</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}
