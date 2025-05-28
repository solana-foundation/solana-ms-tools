import type { Meta, StoryObj } from '@storybook/react'
import ThemeViewer from './theme'

const meta: Meta<typeof ThemeViewer> = {
  title: 'Styles/ThemeViewer',
  component: ThemeViewer,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof ThemeViewer>

export const Default: Story = {}
