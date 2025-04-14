import path from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

/**
 * Factory for legacy ESLint configs
 */
export function CompatFlat() {
  // mimic CommonJS variables -- not needed if using CommonJS
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)

  const compatFlat = new FlatCompat({
    baseDirectory: __dirname,
  })

  return compatFlat
}

/**
 * @param {import('eslint').Linter.Config[]} configs
 * @param {string[]} [ignores=['lib/**']]
 */
export function defineIgnores(configs, ignores = ['lib/**']) {
  return configs.map((config) => {
    return {
      ...config,
      ignores,
    }
  })
}
