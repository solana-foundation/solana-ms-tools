import fs from 'node:fs'
import { resolve } from 'node:path'
import Debug from 'debug'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import prettierConfig from './prettier.config.js'

const log = Debug('eslint-config-at')

export const projectTsConfigPath = (() => {
  const project = resolve(process.cwd(), 'tsconfig.json')

  log('PROJECT_TS', project)
  if (fs.existsSync(project)) return project
  return undefined
})()

/** @type {import("eslint").Linter.Config} */
const config = {
  languageOptions: {
    globals: {
      ...globals.node,
      ...globals.browser,
    },
  },
  plugins: {},
  rules: {
    ...prettierConfig.rules,
    'new-cap': 'off',
    'no-undefined': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    quotes: ['error', 'single'],
    semi: 'off',
    camelcase: 'off',
  },
}

export default defineConfig([config])
