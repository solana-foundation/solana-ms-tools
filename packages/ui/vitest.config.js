import { fileURLToPath } from 'url'
import { defineConfig } from 'vitest/config'

// More info at: https://storybook.js.org/docs/writing-tests/test-addon
// No changes unless the storybookTest API has changed
export default defineConfig({
  define: {
    'process.env.NODE_ENV': JSON.stringify('test'),
  },
  optimizeDeps: {
    include: [
      'sb-original/default-loader',
      'sb-original/image-context',
      'react/jsx-dev-runtime',
      '@mdx-js/react',
    ],
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@/lib/utils/index': fileURLToPath(new URL('./src/lib/utils/index.ts', import.meta.url)),
      'sb-original/image-context': fileURLToPath(
        new URL('./test/__mocks__/sb-original.ts', import.meta.url)
      ),
      'sb-original/default-loader': fileURLToPath(
        new URL('./test/__mocks__/sb-original.ts', import.meta.url)
      ),
    },
  },
  test: {
    name: 'ui',
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./test/setup.ts'],
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
    include: ['**/*.{test,spec}.{js,ts,jsx,tsx}'],
    exclude: [
      '**/node_modules/**/*.test.{js,ts,jsx,tsx}',
      '**/node_modules/**/*.spec.{js,ts,jsx,tsx}',
    ],
    deps: {
      inline: [/vitest/, /@storybook\//, /storybook/],
    },
  },
})
