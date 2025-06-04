import { ReactNode } from 'react'

// test/__mocks__/sb-original.ts
export const ImageContext = {
  Provider: ({ children }: { children: ReactNode }) => children,
}

export const defaultLoader = () => null

export const renderToCanvas = () => null

export const w13 = {
  renderToCanvas: () => null,
}

export const mount = () => null

export const unmount = () => null

export const cleanup = () => null
