# @solana/ms-tools-integrations

Handles integrations with third-party services like HubSpot, providing a centralized location for managing these connections for Solana microsites.

## Features

- HubSpot integration
- Centralized management of third-party service connections
- TypeScript support
- React hooks for easy integration
- Configurable service endpoints

## Installation

```bash
pnpm add @solana/ms-tools-integrations
```

## Usage

```typescript
import { useHubSpot } from '@solana/ms-tools-integrations';

// Initialize HubSpot integration
useHubSpot({
  portalId: 'your-portal-id'
});
```

## Requirements

This package requires the following peer dependencies:

- React ^18.0.0

## Documentation

For detailed documentation and examples, please refer to the inline documentation and type definitions.

## Supported Integrations

- HubSpot
- Additional integrations can be added based on specific microsite requirements
