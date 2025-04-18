import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
  dts: true,
  format: 'esm',
  minify: options?.env?.NODE_ENV === 'production' ? true : undefined,
  sourcemap: Boolean(options.watch),
  tsconfig: './tsconfig.json',
  splitting: true,
  target: 'esnext',
  outDir: './dist',
  entry: {
    'index.esm': './src/index.ts',
  },
  esbuildOptions(opts) {
    opts.external = ['react']
  },
}))
