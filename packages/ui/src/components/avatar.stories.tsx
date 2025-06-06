import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'

const meta: Meta<typeof Avatar> = {
  title: 'Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  render: (args) => <Avatar {...args} />,
  decorators: [
    (Story) => (
      <div className="flex items-center gap-4">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
}

export const WithFallback: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="/broken-image.jpg" alt="@broken" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
}

export const CustomSizes: Story = {
  render: () => (
    <>
      <Avatar className="size-6">
        <AvatarImage src="https://github.com/shadcn.png" alt="@small" />
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar className="size-8">
        <AvatarImage src="https://github.com/shadcn.png" alt="@medium" />
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar className="size-12">
        <AvatarImage src="https://github.com/shadcn.png" alt="@large" />
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
    </>
  ),
}

export const CustomFallbackColors: Story = {
  render: () => (
    <>
      <Avatar>
        <AvatarFallback className="bg-blue-100 text-blue-900">BL</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-green-100 text-green-900">GR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-red-100 text-red-900">RD</AvatarFallback>
      </Avatar>
    </>
  ),
}

export const Group: Story = {
  render: () => (
    <div className="flex -space-x-2">
      <Avatar className="border-2 border-white">
        <AvatarImage src="https://github.com/shadcn.png" alt="@user1" />
        <AvatarFallback>U1</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-white">
        <AvatarImage src="https://github.com/radix-ui.png" alt="@user2" />
        <AvatarFallback>U2</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-white">
        <AvatarImage src="https://github.com/vercel.png" alt="@user3" />
        <AvatarFallback>U3</AvatarFallback>
      </Avatar>
    </div>
  ),
}
