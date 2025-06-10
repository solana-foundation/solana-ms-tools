import { defineConfig } from 'tsup'

const DEFAULT_CONFIG = {
  dts: true,
  format: 'esm',
  tsconfig: './tsconfig.json',
  splitting: true,
  target: 'esnext',
  outDir: './dist',
}

const DEFAULT_ENTRY = {
  'index.esm': './src/index.ts',
}

export const getConfig = (entry) =>
  defineConfig((options) => ({
    ...DEFAULT_CONFIG,
    minify: options?.env?.NODE_ENV === 'production' ? true : undefined,
    sourcemap: Boolean(options.watch),
    esbuildOptions(opts) {
      opts.external = ['react']
    },
    entry,
  }))

export default getConfig(DEFAULT_ENTRY)
