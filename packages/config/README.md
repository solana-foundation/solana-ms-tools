# @solana-foundation/ms-tools-config

This package provides shared configuration for ESLint, Prettier, Vitest, and TypeScript used across the Solana Microsite Framework project. It aims to enforce consistent code style and quality standards throughout all microsites.

## Features

- **ESLint Configuration**

  - Base JavaScript/TypeScript rules
  - React-specific rules and hooks best practices
  - Testing library guidelines
  - Import sorting and organization

- **Prettier Configuration**

  - Consistent code formatting
  - Import sorting with @ianvs/prettier-plugin-sort-imports
  - Customizable presets

- **TypeScript Configuration**

  - Strict type checking
  - Path aliases support
  - Modern ECMAScript features

- **Vitest Configuration**

  - Unit testing setup
  - Coverage reporting
  - Testing utilities

- **PostCSS Configuration**
  - Modern CSS processing
  - Module support
  - Integration with Tailwind CSS v4

## Installation

First, configure your project to use the GitHub registry:

```bash
# .npmrc
@solana-foundation:registry=https://npm.pkg.github.com
```

Then install the package:

```bash
pnpm add -D @solana-foundation/ms-tools-config
```

## Usage

### ESLint Setup

```javascript
// eslint.config.js
import baseConfig from '@solana-foundation/ms-tools-config/eslint.config.base.js'

export default [
  ...baseConfig,
  {
    // Your project-specific overrides
  },
]
```

### Prettier Setup

```javascript
// prettier.config.js
import baseConfig from '@solana-foundation/ms-tools-config/prettier.config.js'

export default {
  ...baseConfig,
  // Your project-specific overrides
}
```

### TypeScript Setup

```json
// tsconfig.json
{
  "extends": "@solana-foundation/ms-tools-config/tsconfig.json",
  "compilerOptions": {
    "baseUrl": "./src"
  },
  "include": ["src/**/*"]
}
```

### Vitest Setup

```typescript
// vitest.config.ts
import baseConfig from '@solana-foundation/ms-tools-config/vitest.config.js'

export default {
  ...baseConfig,
  // Your project-specific test configuration
}
```

### PostCSS Setup

```javascript
// postcss.config.js
import baseConfig from '@solana-foundation/ms-tools-config/postcss.config.js'

export default {
  ...baseConfig,
  // Your project-specific PostCSS configuration
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

## Documentation

For detailed configuration options and best practices, refer to:

- [ESLint Documentation](https://eslint.org/)
- [Prettier Documentation](https://prettier.io/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Vitest Documentation](https://vitest.dev/)

## Contributing

Please refer to the [main repository's contributing guidelines](../../README.md#contributing).
