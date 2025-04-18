import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [resolve(__dirname, 'test/setup')],
    coverage: {
      provider: 'v8', // or 'istanbul'
      include: ['src/utils/**/!(*.test).ts', 'src/entities/**/!(*.test).ts'],
      exclude: ['node_modules/**'],
      reporter: ['text', 'json', 'html'],
    },
    include: ['./**/*.test.ts'], // Include all files ending with .test.ts
    exclude: ['./tests-playwright/**', './node_modules/**', './dist/**'], // Exclude everything inside tests-playwright
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
    ],
  },
})
