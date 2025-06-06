import type { Meta, StoryObj } from '@storybook/react-vite'
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

const meta: Meta<typeof AlertDialog> = {
  title: 'AlertDialog',
  component: AlertDialog,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AlertDialog>

export const Default: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger
        className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2"
        aria-label="Delete account"
      >
        Delete Account
      </AlertDialogTrigger>
      <AlertDialogContent role="alertdialog" aria-modal="true">
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
      <AlertDialogTrigger className="bg-destructive-foreground light:bg-destructive light:text-black hover:bg-destructive/90 rounded-md px-4 py-2 text-white">
        Dangerous Action
      </AlertDialogTrigger>
      <AlertDialogContent
        role="alertdialog"
        aria-modal="true"
        className="border-destructive light:bg-white light:text-white"
      >
        <AlertDialogHeader>
          <AlertDialogTitle className="light:text-black">
            Warning: Destructive Action
          </AlertDialogTitle>
          <AlertDialogDescription className="text-destructive light:text-black">
            <p>
              <strong>Warning:</strong> You are about to perform an irreversible action.
            </p>
            <p>
              This will permanently delete your data and cannot be undone. Please confirm that you
              understand the consequences of this action.
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-destructive-foreground hover:bg-destructive/90 light:bg-destructive light:text-black text-white">
            I Understand the Risk, Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const WithLongContent: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger
        className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2"
        aria-label="View terms of service"
      >
        Show Terms
      </AlertDialogTrigger>
      <AlertDialogContent role="dialog" aria-modal="true">
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
