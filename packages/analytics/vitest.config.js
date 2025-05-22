import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [resolve(__dirname, 'test/setup')],
    passWithNoTests: true,
    coverage: {
      provider: 'v8',
      include: ['src/utils/**/!(*.test).ts'],
      exclude: ['node_modules/**'],
      reporter: ['text', 'json', 'html'],
    },
    include: ['./**/*.test.ts'],
    exclude: ['./tests-playwright/**', './node_modules/**', './dist/**'],
  },
})
