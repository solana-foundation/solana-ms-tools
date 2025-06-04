import React, { StrictMode } from 'react'

interface TestProviderProps {
  children: React.ReactNode
}

export function TestProvider({ children }: TestProviderProps) {
  return (
    <StrictMode>
      <div className="storybook-wrapper">{children}</div>
    </StrictMode>
  )
}

export function withTestProvider(Story: React.ComponentType) {
  return (
    <TestProvider>
      <Story />
    </TestProvider>
  )
}
