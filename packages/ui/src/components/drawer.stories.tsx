import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerHeaderFull,
  DrawerTitle,
  DrawerTrigger,
} from './drawer'

const meta: Meta<typeof Drawer> = {
  title: 'Drawer',
  component: Drawer,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Drawer>

const BottomDrawerExample = () => {
  return (
    <Drawer direction="bottom">
      <DrawerTrigger asChild>
        <Button variant="outline">Open Bottom Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Bottom Drawer</DrawerTitle>
          <DrawerDescription>
            This drawer slides up from the bottom of the screen.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p className="text-sm">
            Drawers are great for mobile-first experiences and can be used as an alternative to
            modal dialogs.
          </p>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="ghost">Cancel</Button>
          </DrawerClose>
          <Button>Save changes</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export const Bottom: Story = {
  render: () => <BottomDrawerExample />,
}

const RightDrawerExample = () => {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline">Open Right Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Navigation Menu</DrawerTitle>
          <DrawerDescription>Access quick navigation links and settings.</DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col gap-2 p-4">
          <Button variant="ghost" className="justify-start">
            Dashboard
          </Button>
          <Button variant="ghost" className="justify-start">
            Profile
          </Button>
          <Button variant="ghost" className="justify-start">
            Settings
          </Button>
          <Button variant="ghost" className="justify-start">
            Help
          </Button>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close Menu</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export const Right: Story = {
  render: () => <RightDrawerExample />,
}

const TopDrawerExample = () => {
  return (
    <Drawer direction="top">
      <DrawerTrigger asChild>
        <Button variant="outline">Open Top Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Notifications</DrawerTitle>
          <DrawerDescription>Stay updated with your latest notifications.</DrawerDescription>
        </DrawerHeader>
        <div className="space-y-4 p-4">
          <div className="rounded-lg border p-3">
            <h4 className="font-medium">New Message</h4>
            <p className="text-muted-foreground text-sm">You have a new message from Alice.</p>
          </div>
          <div className="rounded-lg border p-3">
            <h4 className="font-medium">System Update</h4>
            <p className="text-muted-foreground text-sm">
              Your system has been updated successfully.
            </p>
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button>Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export const Top: Story = {
  render: () => <TopDrawerExample />,
}

const LeftDrawerExample = () => {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button variant="outline">Open Left Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Filters</DrawerTitle>
          <DrawerDescription>Apply filters to refine your search results.</DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col gap-4 p-4">
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Categories</h4>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm">
                Electronics
              </Button>
              <Button variant="outline" size="sm">
                Clothing
              </Button>
              <Button variant="outline" size="sm">
                Books
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Price Range</h4>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm">
                $0 - $50
              </Button>
              <Button variant="outline" size="sm">
                $50 - $100
              </Button>
              <Button variant="outline" size="sm">
                $100+
              </Button>
            </div>
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="ghost">Cancel</Button>
          </DrawerClose>
          <Button>Apply Filters</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export const Left: Story = {
  render: () => <LeftDrawerExample />,
}

const SizesExample = () => {
  return (
    <div className="flex flex-col gap-4">
      <Drawer direction="bottom">
        <DrawerTrigger asChild>
          <Button variant="outline">Full Width Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Full Width</DrawerTitle>
            <DrawerDescription>
              This drawer takes up the full width of the screen.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <p className="text-muted-foreground text-sm">
              Content area with default padding and full width layout.
            </p>
          </div>
        </DrawerContent>
      </Drawer>

      <Drawer direction="bottom">
        <DrawerTrigger asChild>
          <Button variant="outline">Medium Width Drawer</Button>
        </DrawerTrigger>
        <DrawerContent className="mx-auto max-w-2xl">
          <DrawerHeader>
            <DrawerTitle>Medium Width</DrawerTitle>
            <DrawerDescription>This drawer has a max width of 42rem (max-w-2xl).</DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <p className="text-muted-foreground text-sm">
              A centered drawer with medium width is great for forms and medium-sized content.
            </p>
          </div>
        </DrawerContent>
      </Drawer>

      <Drawer direction="bottom">
        <DrawerTrigger asChild>
          <Button variant="outline">Small Width Drawer</Button>
        </DrawerTrigger>
        <DrawerContent className="mx-auto max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Small Width</DrawerTitle>
            <DrawerDescription>This drawer has a max width of 24rem (max-w-sm).</DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <p className="text-muted-foreground text-sm">
              A compact drawer is perfect for simple interactions and small content areas.
            </p>
          </div>
        </DrawerContent>
      </Drawer>

      <Drawer direction="bottom">
        <DrawerTrigger asChild>
          <Button variant="outline">Custom Height Drawer</Button>
        </DrawerTrigger>
        <DrawerContent className="h-[60vh]">
          <DrawerHeader>
            <DrawerTitle>Custom Height</DrawerTitle>
            <DrawerDescription>This drawer has a max height of 40vh.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <p className="text-muted-foreground text-sm">
              You can customize both the height and width of drawers to fit your needs.
            </p>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export const Sizes: Story = {
  render: () => <SizesExample />,
}

const CustomHeaderExample = () => {
  const handleClearLog = () => {
    console.log('Clear log clicked')
  }

  return (
    <Drawer direction="bottom">
      <DrawerTrigger asChild>
        <Button variant="outline">Drawer with Custom Header</Button>
      </DrawerTrigger>
      <DrawerContent className="bg-zinc-900">
        <DrawerHeaderFull title="Console Output">
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:text-white/90"
            onClick={handleClearLog}
          >
            Child component
          </Button>
        </DrawerHeaderFull>
        <div className="p-6">
          <div className="space-y-4">
            <div className="text-white/80">
              <span className="text-white/50">[12:00:15]</span> Server started on port 3000
            </div>
            <div className="text-white/80">
              <span className="text-white/50">[12:00:16]</span> Connected to database
            </div>
            <div className="text-white/80">
              <span className="text-white/50">[12:00:17]</span> Initialized cache
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export const WithCustomHeader: Story = {
  render: () => <CustomHeaderExample />,
}
