import { fileURLToPath } from 'url'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import { defineConfig } from 'vitest/config'

// More info at: https://storybook.js.org/docs/writing-tests/test-addon
// No changes unless the storybookTest API has changed
export default defineConfig({
  define: {
    'process.env.NODE_ENV': JSON.stringify('test'),
  },
  optimizeDeps: {
    include: ['sb-original/default-loader', 'sb-original/image-context', 'react/jsx-dev-runtime'],
  },
  resolve: {
    alias: {
      process: 'process/browser',
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@/lib/utils/index': fileURLToPath(new URL('.src/lib/utils/index.ts', import.meta.url)),
      'sb-original/image-context': fileURLToPath(
        new URL('./test/__mocks__/sb-original.ts', import.meta.url)
      ),
      'sb-original/default-loader': fileURLToPath(
        new URL('./test/__mocks__/sb-original.ts', import.meta.url)
      ),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./test/setup.ts'],
    include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: [
      '**/*.stories.{js,ts,jsx,tsx}',
      '**/*.story.{js,ts,jsx,tsx}',
      '**/node_modules/**/*.test.{js,ts,jsx,tsx}',
      '**/node_modules/**/*.spec.{js,ts,jsx,tsx}',
    ],
    browser: {
      enabled: true,
      name: 'chromium',
      provider: 'playwright',
      headless: true,
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'coverage/**',
        'dist/**',
        '**/*.stories.{js,ts,jsx,tsx}',
        '**/*.story.{js,ts,jsx,tsx}',
        'test/**',
        '**/*.d.ts',
        '**/node_modules/**',
      ],
    },
  },
  storybook: {
    test: {
      name: 'storybook',
      environment: 'jsdom',
      setupFiles: ['.storybook/vitest.setup.ts'],
      include: ['**/*.stories.{js,ts,jsx,tsx}', '**/*.story.{js,ts,jsx,tsx}'],
      exclude: ['**/node_modules/**'],
      plugins: [
        storybookTest({
          configDir: fileURLToPath(new URL('./.storybook', import.meta.url)),
        }),
      ],
    },
  },
})
