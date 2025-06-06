import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from '@storybook/test'
import { Address } from './address'
import * as T from './table'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof T.Table> = {
  title: 'Table',
  component: T.Table,
  parameters: {
    layout: 'left',
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
}

export default meta

type Story = StoryObj<typeof meta>

type CellStory = StoryObj<typeof T.TableCell>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    layout: 'default',
  },
  argTypes: {
    layout: { control: 'radio', options: ['default', 'two-column'] },
  },
  render(args) {
    return (
      <>
        <T.Table {...args}>
          <T.TableHeader>
            <T.TableRow>
              <T.TableHead>Key</T.TableHead>
              <T.TableHead>Value</T.TableHead>
            </T.TableRow>
          </T.TableHeader>
          <T.TableBody>
            <T.TableRow>
              <T.TableCell layout={args.layout}>Address</T.TableCell>
              <T.TableCell layout={args.layout}>
                <Address address="TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA" />
              </T.TableCell>
            </T.TableRow>
            <T.TableRow>
              <T.TableCell layout={args.layout}>Address Label</T.TableCell>
              <T.TableCell layout={args.layout}>Token Program</T.TableCell>
            </T.TableRow>
          </T.TableBody>
        </T.Table>
      </>
    )
  },
}

export const Caption: Story = {
  args: {},
  render() {
    return (
      <T.Table>
        <T.TableCaption>Caption Text</T.TableCaption>
      </T.Table>
    )
  },
}

export const Header: Story = {
  args: {},
  render() {
    return (
      <T.Table>
        <T.TableHeader>
          <T.TableRow>
            <T.TableHead>Table Header</T.TableHead>
          </T.TableRow>
        </T.TableHeader>
      </T.Table>
    )
  },
}

export const Body: CellStory = {
  args: {
    layout: 'default',
    density: 'comfortable',
  },
  argTypes: {
    layout: { control: 'radio', options: ['default', 'two-column'] },
    density: { control: 'radio', options: ['compact', 'comfortable'] },
  },
  render(args) {
    return (
      <T.Table>
        <T.TableBody density={args.density}>
          <T.TableRow>
            <T.TableCell layout={args.layout}>Cell 1</T.TableCell>
            <T.TableCell layout={args.layout}>Cell 2</T.TableCell>
          </T.TableRow>
        </T.TableBody>
      </T.Table>
    )
  },
}

export const Footer: Story = {
  args: {},
  render() {
    return (
      <T.Table>
        <T.TableFooter>
          <T.TableRow>
            <T.TableCell>Table Footer</T.TableCell>
          </T.TableRow>
        </T.TableFooter>
      </T.Table>
    )
  },
}
