# @solana/ms-tools-config

This package provides shared configuration for ESLint, Prettier, Vitest, Stylelint, and TypeScript used across the Solana Microsite Framework project. It aims to enforce consistent code style and quality standards throughout all microsites.

## Overview

This package is part of the Solana Microsite Framework, serving as the central configuration hub for all microsites. It ensures consistency in code style, quality, and development practices across all Solana microsite projects.

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

- **Stylelint Configuration**

  - SCSS support
  - Modern CSS features
  - Consistent styling rules

- **Vitest Configuration**

  - Unit testing setup
  - Coverage reporting
  - Testing utilities

- **PostCSS Configuration**
  - Modern CSS processing
  - Module support
  - Integration with Tailwind CSS

## Installation

```bash
pnpm add -D @solana/ms-tools-config
```

## Usage

### ESLint Setup

Create `eslint.config.js` in your project root:

```javascript
import baseConfig from '@solana/ms-tools-config/eslint.config.base.js'

export default [
  /prettier.config.cjsnjs",0],
  {
    // Your project-specific overrides
  },
]
```

### Prettier Setup

Create `prettier.config.js`:

```javascript
module.exports = {
  ...require('@solana/ms-tools-config/prettier.config.cjs'),
  // Your project-specific overrides
}
```

### TypeScript Setup

Extend the base configuration in your `tsconfig.json`:

```json
{
  "extends": "@solana/ms-tools-config/tsconfig.json",
  "compilerOptions": {
    "baseUrl": "./src"
  },
  "include": ["src/**/*"]
}
```

### Stylelint Setup

Create `stylelint.config.js`:

```javascript
module.exports = {
  extends: ['@solana/ms-tools-config/stylelint.config.js'],
  // Your project-specific rules
}
```

### Vitest Setup

Create `vitest.config.ts`:

```typescript
import baseConfig from '@solana/ms-tools-config/vitest.config.js'

export default {
  /prettier.config.cjsnjs",0],
  // Your project-specific test configuration
}
```

### PostCSS Setup

Create `postcss.config.js`:

```javascript
module.exports = {
  ...require('@solana/ms-tools-config/postcss.config.js'),
  // Your project-specific PostCSS configuration
}
```

## Requirements

This package requires the following peer dependencies:

- `eslint` ^9.0.0
- `prettier` ^3.0.0
- `typescript` ^5.0.0

## Contributing

When making changes to configurations:

1. Ensure changes align with the Solana Microsite Framework standards
2. Test changes across different types of microsites
3. Document any breaking changes
4. Update version numbers according to semver

## Documentation

For detailed configuration options and best practices, refer to:

- [ESLint Documentation](https://eslint.org/)
- [Prettier Documentation](https://prettier.io/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Stylelint Documentation](https://stylelint.io/)
- [Vitest Documentation](https://vitest.dev/)
