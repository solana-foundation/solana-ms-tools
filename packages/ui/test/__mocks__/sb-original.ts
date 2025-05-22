import { ReactNode } from 'react'

// test/__mocks__/sb-original.ts
export const ImageContext = {
  Provider: ({ children }: { children: ReactNode }) => children,
}
export const defaultLoader = () => null
