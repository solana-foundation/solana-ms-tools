# @solana-foundation/ms-tools-integrations

Handles integrations with third-party services, providing a centralized location for managing these connections for Solana microsites.

## Features

- Multiple third-party service integrations:
  - Sanity CMS integration with automatic type generation
  - API client utilities
- Centralized management of third-party service connections
- TypeScript support with full type definitions
- Error handling and retry logic
- Rate limiting protection
- Caching support
- Environment-based configuration

## Installation

First, configure your project to use the GitHub registry:

```bash
# .npmrc
@solana-foundation:registry=https://npm.pkg.github.com
```

Then install the package:

```bash
pnpm add @solana-foundation/ms-tools-integrations
```

## Usage

### Sanity CMS Integration

```typescript
import { createSanityClient } from '@solana-foundation/ms-tools-integrations'

const client = createSanityClient({
  projectId: 'your-project-id',
  dataset: 'production',
  apiVersion: '2024-03-21'
})

// Using with React hooks
import { useSanityQuery } from '@solana-foundation/ms-tools-integrations'

function MyComponent() {
  const { data, isLoading } = useSanityQuery('*[_type == "post"]')

  if (isLoading) return <div>Loading...</div>
  return <div>{/* Render your data */}</div>
}
```

## Development

```bash
# Install dependencies
pnpm install

# Run tests
pnpm test

# Build package
pnpm build
```

## Supported Integrations

- Sanity CMS

## Contributing

Please refer to the [main repository's contributing guidelines](../../README.md#contributing).
