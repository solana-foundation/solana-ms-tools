import path from 'path'
import { fileURLToPath } from 'url'
import type { StorybookConfig } from '@storybook/react-vite'

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url))

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-themes',
    '@storybook/experimental-addon-test',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async (config) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...(config.resolve?.alias || {}),
        '@': path.resolve(dirname, '../src'),
      },
    }

    // Excluding these two packages from the Vite build process to avoid issues with Storybook
    config.optimizeDeps = {
      ...(config.optimizeDeps || {}),
      exclude: ['sb-original/image-context', 'sb-original/default-loader'],
    }

    config.ssr = {
      ...(config.ssr || {}),
      external: ['sb-original/image-context', 'sb-original/default-loader'],
    }

    return config
  },
}

export default config
