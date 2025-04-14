import { defineConfig } from 'eslint/config'
import baseConfig from './eslint.config.base.mjs'

export default defineConfig([
  baseConfig,
  {
    files: ['src/**/*.{ts,tsx,js,jsx,json,mjs,cjs}', 'eslint.config.mjs', 'prettier.config.js'],
    rules: {},
  },
])
