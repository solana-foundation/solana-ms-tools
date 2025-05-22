import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin'
import { defineConfig } from 'vitest/config'

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url))

// More info at: https://storybook.js.org/docs/writing-tests/test-addon
export default defineConfig({
  define: {
    'process.env.NODE_ENV': JSON.stringify('test'),
  },
  resolve: {
    alias: {
      process: 'process/browser', // Optional full polyfill
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    alias: {
      '@': path.resolve(__dirname, './src'),
      'sb-original/image-context': path.resolve(__dirname, './test/__mocks__/sb-original.ts'),
      'sb-original/default-loader': path.resolve(__dirname, './test/__mocks__/sb-original.ts'),
    },
    optimizeDeps: {
      include: ['sb-original/default-loader', 'sb-original/image-context', 'react/jsx-dev-runtime'],
    },
    workspace: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/writing-tests/test-addon#storybooktest
          storybookTest({ configDir: path.join(dirname, '.storybook') }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            instances: [{ browser: 'chromium' }],
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      },
      {
        extends: true,
        test: {
          name: 'utils',
          globals: true,
          environment: 'jsdom',
          include: ['src/**/*.test.{ts,tsx}'],
          exclude: ['**/node_modules/**', '**/.storybook/**', '**/*.stories.{ts,tsx}'],
        },
      },
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
  },
})
