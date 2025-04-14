# @solana/ms-tools-analytics

Logic for integrating Google Analytics into Solana microsites.

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

## Usage

```typescript
import { useAnalytics } from '@solana/ms-tools-analytics';

// Initialize analytics
useAnalytics({
  measurementId: 'G-XXXXXXXXXX'
});
```

## Requirements

This package requires the following peer dependencies:

- React ^18.0.0

## Documentation

For detailed documentation and examples, please refer to the inline documentation and type definitions.
