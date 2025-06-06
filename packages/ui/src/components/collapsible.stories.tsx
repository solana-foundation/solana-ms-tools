import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './collapsible'

const meta: Meta<typeof Collapsible> = {
  title: 'Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Collapsible>

const BasicExample = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px]">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">@radix-ui/react-collapsible</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            {isOpen ? 'Close' : 'Open'}
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          The React component that helps you build accessible collapsible sections.
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

export const Basic: Story = {
  render: () => <BasicExample />,
}

const AnimatedExample = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px]">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">Animated Collapsible</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            {isOpen ? 'Close' : 'Open'}
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp space-y-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          This collapsible section has smooth animation when opening and closing.
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

export const WithAnimation: Story = {
  render: () => <AnimatedExample />,
}

const NestedExample = () => {
  const [outerOpen, setOuterOpen] = useState(false)
  const [innerOpen, setInnerOpen] = useState(false)

  return (
    <Collapsible open={outerOpen} onOpenChange={setOuterOpen} className="w-[350px]">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">Outer Collapsible</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            {outerOpen ? 'Close' : 'Open'}
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3">
          <Collapsible open={innerOpen} onOpenChange={setInnerOpen}>
            <div className="flex items-center justify-between space-x-4">
              <h4 className="text-sm font-semibold">Inner Collapsible</h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm">
                  {innerOpen ? 'Close' : 'Open'}
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="pt-2">
              <div className="rounded-md border px-4 py-3 font-mono text-sm">
                This is a nested collapsible section.
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

export const Nested: Story = {
  render: () => <NestedExample />,
}
