import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './skeleton'

const meta = {
  title: 'Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: (args) => <Skeleton {...args} />,
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  render: () => <Skeleton className="size-12" />,
}

export const Text: Story = {
  render: () => <Skeleton className="h-4 w-[250px]" />,
}

export const Circle: Story = {
  render: () => <Skeleton className="size-12 rounded-full" />,
}

export const Card: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Skeleton className="size-12 rounded-full" />
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
      <Skeleton className="h-[300px] w-[400px]" />
    </div>
  ),
}

export const List: Story = {
  render: () => (
    <div className="flex w-[400px] flex-col gap-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex items-center gap-4">
          <Skeleton className="size-10 rounded-full" />
          <div className="flex flex-1 flex-col gap-2">
            <Skeleton className="h-4" />
            <Skeleton className="h-4 w-[80%]" />
          </div>
        </div>
      ))}
    </div>
  ),
}

export const CustomStyling: Story = {
  render: () => (
    <div className="flex gap-4">
      <Skeleton className="size-12 bg-blue-200" />
      <Skeleton className="size-12 bg-gradient-to-r from-blue-200 to-purple-200" />
      <Skeleton className="animate-pulse-slow bg-accent/50 size-12" />
    </div>
  ),
}

export const WithContent: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="relative size-12 overflow-hidden rounded-full">
        <img
          src="https://github.com/shadcn.png"
          alt="Avatar"
          className="absolute inset-0 size-full object-cover opacity-0"
        />
        <Skeleton className="absolute inset-0" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="relative">
          <span className="invisible">shadcn</span>
          <Skeleton className="absolute inset-0" />
        </div>
        <div className="relative">
          <span className="invisible">Frontend Developer</span>
          <Skeleton className="absolute inset-0" />
        </div>
      </div>
    </div>
  ),
}
