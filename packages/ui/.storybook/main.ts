import path, { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import type { StorybookConfig } from '@storybook/react-vite'

const _dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url))

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-themes'),
    getAbsolutePath('@storybook/experimental-addon-test'),
    getAbsolutePath('@storybook/addon-docs'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  viteFinal: async (config) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...(config.resolve?.alias || {}),
        '@': path.resolve(_dirname, '../src'),
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
