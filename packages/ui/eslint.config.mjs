import { configs } from '@solana-foundation/ms-tools-config/eslint.config.react.mjs'
// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  storybook,
  configs.react,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    files: [
      'src/**/*.{ts,tsx,js,jsx,json,mjs,cjs}',
      '.storybook/preview.ts',
      '.storybook/main.ts',
      'eslint.config.mjs',
      'prettier.config.js',
      '*.config.ts',
      '*.config.js',
      '*.config.mjs',
    ],
    rules: {
      // Add any UI-specific overrides here
    },
  },
])
