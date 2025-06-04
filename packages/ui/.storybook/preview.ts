import { withThemeByClassName } from '@storybook/addon-themes'
import type { Preview } from '@storybook/react'

import './styles.css'

const preview: Preview = {
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'light',
          value: '#fff',
        },
        {
          name: 'dark',
          value: '#1d181a',
        },
      ],
    },
  },
  // Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'dark',
    }),
  ],
}

export default preview
