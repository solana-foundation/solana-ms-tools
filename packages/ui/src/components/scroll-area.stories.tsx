import type { Meta, StoryObj } from '@storybook/react-vite'
import { ScrollArea, ScrollBar } from './scroll-area'

const meta = {
  title: 'ScrollArea',
  component: ScrollArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj<typeof ScrollArea>

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.${a.length - i}`)

export const Default: Story = {
  render: (args) => (
    <ScrollArea className="h-72 w-48 rounded-lg border" {...args}>
      <div className="p-4">
        <h4 className="mb-4 text-sm leading-none font-medium">Tags</h4>
        {tags.map((tag) => (
          <div key={tag} className="text-sm">
            {tag}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}

export const Horizontal: Story = {
  render: (args) => (
    <ScrollArea className="w-96 rounded-lg border whitespace-nowrap" {...args}>
      <div className="flex p-4">
        {Array.from({ length: 50 }, (_, i) => (
          <div key={i} className="bg-card mr-4 w-[150px] shrink-0 rounded-lg border p-4 last:mr-0">
            <div className="font-semibold">Card {i + 1}</div>
            <div className="text-sm">Description</div>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
}

export const Both: Story = {
  render: (args) => (
    <ScrollArea className="h-72 w-96 rounded-lg border" {...args}>
      <ScrollBar orientation="vertical" />
      <div className="p-4">
        <h4 className="mb-4 text-sm leading-none font-medium">Changelog</h4>
        {Array.from({ length: 50 }, (_, i) => (
          <div key={i} className="bg-card mb-4 last:mb-0">
            <div className="text-sm font-medium">v1.2.{50 - i}</div>
            <div className="min-w-400 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatibus,
              quibusdam, voluptates, quos voluptatum quod exercitationem quas voluptas quidem quae
              quia. Quisquam voluptatibus.
            </div>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
}

export const WithinCard: Story = {
  render: (args) => (
    <div className="bg-card text-card-foreground rounded-xl border shadow">
      <div className="p-6">
        <h4 className="leading-none font-medium">Messages</h4>
        <p className="text-muted-foreground text-sm">Your recent messages.</p>
      </div>
      <ScrollArea className="h-72" {...args}>
        <div className="px-6 pb-6">
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className="bg-card mt-4">
              <div className="text-sm font-medium">Message {i + 1}</div>
              <div className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quas.
                Quisquam voluptatibus.
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  ),
}

export const CustomScrollbar: Story = {
  render: (args) => (
    <ScrollArea className="h-72 w-48 rounded-lg border" {...args}>
      <ScrollBar className="bg-cyan-500" orientation="vertical" />
      <div className="bg-card p-4">
        <h4 className="mb-4 text-sm leading-none font-medium">Tags</h4>
        {tags.map((tag) => (
          <div key={tag} className="text-sm">
            {tag}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}
