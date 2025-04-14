import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
  dts: true,
  format: 'esm',
  minify: options?.env?.NODE_ENV === 'production' ? true : undefined,
  sourcemap: Boolean(options.watch),
  tsconfig: './tsconfig.json',
  splitting: true,
  target: 'esnext',
  outDir: './lib',
  entry: {
    'index.esm': './src/index.ts',
  },
  loader: {
    '.css': 'local-css',
  },
  esbuildOptions(opts) {
    opts.external = ['react']
  },
}))
