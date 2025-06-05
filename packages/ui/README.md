# @solana-foundation/ms-tools-ui

Reusable React components built with React, Tailwind CSS, and Shadcn, forming the visual building blocks of Solana microsites.

## Features

- Built with React, Tailwind CSS v4, and Shadcn
- Consistent visual language and component styles
- Pre-configured theming support
- Core components including header and footer
- Fully typed with TypeScript
- Modern design system following Solana's brand guidelines
- Responsive and accessible components
- Dark mode support
- Custom hooks for common functionality
- Utility functions for UI operations

## Installation

First, configure your project to use the GitHub registry for the @solana-foundation scope:

```bash
# .npmrc
@solana-foundation:registry=https://npm.pkg.github.com
```

Then install the package:

```bash
pnpm add @solana-foundation/ms-tools-ui
```

## Usage

```tsx
import { Button, Card } from '@solana-foundation/ms-tools-ui'

function MyComponent() {
  return (
    <Card>
      <h2>Welcome to Solana</h2>
      <Button variant="primary">Get Started</Button>
    </Card>
  )
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

# Run Storybook
pnpm storybook
```

## Documentation

For detailed documentation and examples, please refer to our [Storybook documentation](https://solana-foundation.github.io/solana-ms-tools).

## Contributing

Please refer to the [main repository's contributing guidelines](../../README.md#contributing).
