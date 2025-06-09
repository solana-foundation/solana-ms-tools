import { DialogClose } from '@radix-ui/react-dialog'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog'

const meta: Meta<typeof Dialog> = {
  title: 'Dialog',
  component: Dialog,
  tags: ['autodocs'],
  render: (args) => <DialogClose {...args} />,
}

export default meta
type Story = StoryObj<typeof Dialog>

const BasicExample = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Basic Dialog</DialogTitle>
          <DialogDescription>A simple dialog with a title and description.</DialogDescription>
        </DialogHeader>
        <p className="py-4">This is the main content of the dialog.</p>
        <DialogFooter>
          <DialogClose>
            <Button variant="ghost">Cancel</Button>
          </DialogClose>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export const Basic: Story = {
  render: () => <BasicExample />,
}

const CustomStylingExample = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Custom Styled Dialog</Button>
      </DialogTrigger>
      <DialogContent className="border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-purple-500">
            Custom Styled Dialog
          </DialogTitle>
          <DialogDescription className="text-purple-300">
            This dialog demonstrates custom styling possibilities.
          </DialogDescription>
        </DialogHeader>
        <div className="py-6">
          <p className="text-center text-white/80">
            You can customize the appearance using Tailwind classes.
          </p>
        </div>
        <DialogFooter>
          <DialogClose>
            <Button className="bg-purple-500 hover:bg-purple-600">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export const CustomStyling: Story = {
  render: () => <CustomStylingExample />,
}
