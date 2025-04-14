import * as compat from '@eslint/compat'
import eslintConfig from 'eslint-config-eslint/base'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import tsConfig from './eslint.config.ts.mjs'

const reactHooksPluginCompat = compat.fixupPluginRules(reactHooksPlugin)

const configReact = {
  files: ['**/*.{ts,tsx,jsx,js,cjs,mjs}'],
  languageOptions: tsConfig.languageOptions,
  plugins: {
    ...tsConfig.plugins,
    react: reactPlugin,
    'react-hooks': reactHooksPluginCompat,
  },
  rules: {
    ...tsConfig.rules,
    ...reactPlugin.configs.recommended.rules,
    ...reactHooksPluginCompat.configs.recommended.rules,
    '@typescript-eslint/semi': 'off',
    'import/extensions': 'off',
    'no-plusplus': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}

/** @type {import('eslint').Linter.Config[]} */
export default [configReact]

/** @type {{ [x: string]: import('eslint').Linter.Config }} */
export const configs = {
  eslint: eslintConfig,
  react: configReact,
}
