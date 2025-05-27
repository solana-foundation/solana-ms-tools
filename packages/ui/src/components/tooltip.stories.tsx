import type { Meta, StoryObj } from '@storybook/react'
import { InfoIcon } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip'

const meta = {
  title: 'Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger>
        <InfoIcon className="size-4" />
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const WithButton: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <button className="bg-primary text-primary-foreground rounded-md px-3 py-2 text-sm font-medium">
          Hover me
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const Positions: Story = {
  render: () => (
    <div className="flex size-[400px] items-center justify-center gap-8">
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="bg-primary text-primary-foreground rounded-md px-3 py-2 text-sm font-medium">
            Top
          </button>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>This tooltip appears on top</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <button className="bg-primary text-primary-foreground rounded-md px-3 py-2 text-sm font-medium">
            Right
          </button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>This tooltip appears on the right</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <button className="bg-primary text-primary-foreground rounded-md px-3 py-2 text-sm font-medium">
            Bottom
          </button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>This tooltip appears at the bottom</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <button className="bg-primary text-primary-foreground rounded-md px-3 py-2 text-sm font-medium">
            Left
          </button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>This tooltip appears on the left</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
}

export const WithDelay: Story = {
  decorators: [
    (Story) => (
      <TooltipProvider delayDuration={500}>
        <Story />
      </TooltipProvider>
    ),
  ],
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <button className="bg-primary text-primary-foreground rounded-md px-3 py-2 text-sm font-medium">
          Hover me (500ms delay)
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This tooltip has a 500ms delay</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const CustomStyling: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <button className="bg-primary text-primary-foreground rounded-md px-3 py-2 text-sm font-medium">
          Custom Style
        </button>
      </TooltipTrigger>
      <TooltipContent className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <p>Custom styled tooltip</p>
      </TooltipContent>
    </Tooltip>
  ),
}
