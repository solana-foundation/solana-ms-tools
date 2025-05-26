import { ComponentProps, MouseEventHandler } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button } from './button'
import {
  Card,
  CardAction,
  CardAsideCounter,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './card'

type Props = ComponentProps<typeof Card> & {
  title: string
  description: string
  aside: 'div' | 'counter'
  asideText: string
  content: string
  actionTitle: string
  onClick: MouseEventHandler<HTMLButtonElement>
}

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    aside: { control: 'select', options: ['div', 'counter'], table: { category: 'aside' } },
    asideText: { control: 'text', table: { category: 'aside' } },
    content: { control: 'text', table: { category: 'content' } },
    actionTitle: { control: 'text', table: { category: 'action' } },
    onClick: { table: { disable: true } },
  },
  args: {
    title: 'Create test account',
    description: 'Receive 1000 free tokens in your account for testing purposes',
    aside: 'counter',
    asideText: '1',
    content: '20 SOL',
    actionTitle: 'Reload',
    onClick: fn(),
  },
} satisfies Meta<Props>

type Story = StoryObj<Props>

export const Default: Story = {
  parameters: {
    controls: { include: ['title', 'description'] },
  },
  render: ({ title, description }) => (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  ),
}

export const WithAside: Story = {
  parameters: {
    controls: { include: ['title', 'description', 'aside', 'asideText'] },
  },
  // args: aside (custom div element, icon/counter with text)
  render: ({ title, description, aside, asideText }) => (
    <Card
      aside={
        aside === 'div' ? <div>{asideText}</div> : <CardAsideCounter>{asideText}</CardAsideCounter>
      }
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  ),
}

export const CustomContent: Story = {
  parameters: {
    controls: { include: ['title', 'description', 'content'] },
  },
  args: {
    title: 'Wallet Balance',
    description: '',
    content: '20 SOL',
  },
  render: ({ title, description, content }) => (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <span className="font-semibold">{content}</span>
      </CardContent>
    </Card>
  ),
}

export const WithFooter: Story = {
  parameters: {
    controls: { include: ['title', 'description', 'actionTitle'] },
  },
  render: ({ title, description, actionTitle, onClick }) => (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <CardAction>
          <Button onClick={onClick}>{actionTitle}</Button>
        </CardAction>
      </CardFooter>
    </Card>
  ),
}
