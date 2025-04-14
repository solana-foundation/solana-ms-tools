import { configs } from '@solana/ms-tools-config/eslint.config.react.mjs'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  configs.react,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    files: ['src/**/*.{ts,tsx,js,jsx,json,mjs,cjs}', 'eslint.config.mjs', 'prettier.config.js'],
    rules: {
      // Add any analytics-specific overrides here
    },
  },
])
