import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import baseConfig from './eslint.config.base.mjs'

/** @type {import('eslint').Linter.Config} */
const config = {
  languageOptions: {
    ...baseConfig[0].languageOptions,
    parser: tsParser,
    parserOptions: {
      ecmaFeatures: { jsx: true, modules: true },
      ecmaVersion: 2018,
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },
  plugins: {
    ...baseConfig[0].plugins,
    tsParser,
    '@typescript-eslint': tsPlugin,
  },
  rules: {
    ...baseConfig[0].rules,
    ...tsPlugin.configs.base.rules,
    ...tsPlugin.configs['eslint-recommended'].rules,
    // Reference: https://github.com/typescript-eslint/typescript-eslint/issues/2484#issuecomment-687257773
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
  },
  include: ['src', '*.js', '*.ts', '*.jsx', '*.tsx', '*.mjs', '*.cjs', '*.json'],
  exclude: ['node_modules', 'dist', 'build', 'out', 'coverage', 'lib'],
}

export default config
