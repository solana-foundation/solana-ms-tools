import type { Meta, StoryObj } from '@storybook/react-vite'
import { AspectRatio } from './aspect-ratio'

const meta: Meta<typeof AspectRatio> = {
  title: 'AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    ratio: {
      control: {
        type: 'text',
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[400px]">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof AspectRatio>

export const Square: Story = {
  args: {
    ratio: 1,
    className: 'w-[300px] bg-gray-200 rounded-lg',
  },
  render: (args) => (
    <AspectRatio {...args}>
      <div className="flex h-full items-center justify-center">
        <p className="text-sm text-gray-500">1:1 Aspect Ratio</p>
      </div>
    </AspectRatio>
  ),
}

export const Landscape16by9: Story = {
  args: {
    ratio: 16 / 9,
    className: 'w-[400px] bg-gray-200 rounded-lg',
  },
  render: (args) => (
    <AspectRatio {...args}>
      <div className="flex h-full items-center justify-center">
        <p className="text-sm text-gray-500">16:9 Aspect Ratio</p>
      </div>
    </AspectRatio>
  ),
}

export const Portrait4by5: Story = {
  args: {
    ratio: 4 / 5,
    className: 'w-[300px] bg-gray-200 rounded-lg',
  },
  render: (args) => (
    <AspectRatio {...args}>
      <div className="flex h-full items-center justify-center rounded-lg bg-purple-200">
        <p className="text-sm text-gray-500">4:5 Aspect Ratio</p>
      </div>
    </AspectRatio>
  ),
}

export const WithImage: Story = {
  args: {
    ratio: 16 / 9,
    className: 'w-[400px] rounded-lg overflow-hidden',
  },
  render: (args) => (
    <AspectRatio {...args}>
      <img src="https://picsum.photos/400/400" alt="pic" className="h-full w-full object-cover" />
    </AspectRatio>
  ),
}

export const WithVideo: Story = {
  args: {
    ratio: 16 / 9,
    className: 'w-[400px] rounded-lg overflow-hidden',
  },
  render: (args) => (
    <AspectRatio {...args}>
      <video autoPlay muted loop playsInline className="h-full w-full object-cover">
        <source
          src="https://static.videezy.com/system/resources/previews/000/005/529/original/Reaviling_Sjusj%C3%B8en_Ski_Senter.mp4"
          type="video/mp4"
        />
      </video>
    </AspectRatio>
  ),
}
