# @solana/ms-tools-analytics

> ⚠️ **Work in Progress**: This package is currently under active development and may undergo significant changes. The API is not yet stable, and some features may be incomplete or subject to change. Use with caution in production environments.

Logic for integrating Google Analytics into Solana microsites. This package provides a streamlined way to add analytics tracking to your Solana microsite with minimal configuration.

## Features

- Easy integration with Google Analytics
- Automatic page view tracking
- Custom event tracking utilities
- TypeScript support
- React hooks for analytics integration

## Installation

```bash
pnpm add @solana/ms-tools-analytics
```

## Setup

1. Get your Google Analytics 4 Measurement ID from your GA4 property settings

2. Add the analytics provider to your app:

```tsx
// app/providers.tsx
import { AnalyticsProvider } from '@solana/ms-tools-analytics'

export function Providers({ children }) {
  return (
    <AnalyticsProvider measurementId="G-XXXXXXXXXX" debug={process.env.NODE_ENV === 'development'}>
      {children}
    </AnalyticsProvider>
  )
}
```

## Usage

```typescript
import { useAnalytics } from '@solana/ms-tools-analytics';

function CookieConsent() {
  const { updateConsent } = useAnalytics();

  const handleAccept = () => {
    updateConsent({
      analytics: true,
      advertising: false,
    });
  };

  return <button onClick={handleAccept}>Accept Analytics</button>;
}
```

## Requirements

This package requires the following peer dependencies:

- React ^18.0.0
- React DOM ^18.0.0

## Development and Testing

```bash
# Install dependencies
pnpm install

# Run tests
pnpm test

# Build package
pnpm build
```

## Documentation

For detailed documentation and examples, please refer to the inline documentation and type definitions.
