# @solana-foundation/ms-tools

[![Release Workflow](https://github.com/solana-foundation/solana-ms-tools/actions/workflows/release.yml/badge.svg?branch=main)](https://github.com/solana-foundation/solana-ms-tools/actions/workflows/release.yml)

[![Deploy @solana-foundation/ms-tools-ui Storybook with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsolana-foundation%2Fsolana-ms-tools&project-name=ms-tools-ui&repository-name=solana-ms-tools-ui&root-directory=packages/ui&install-command=pnpm%20install&build-command=pnpm%20build-storybook&output-directory=storybook-static)

## Overview

This is the core repository containing reusable packages for building Solana microsites. It serves as the source of truth for shared components, configurations, and integrations. Packages within this repo are published to npm for easy consumption in individual microsite projects.

## Packages

### [@solana-foundation/ms-tools-ui](./packages/ui/README.md)

UI components for microsites. Includes:

- Reusable React components
- Custom hooks for common functionality
- Utility functions
- Modern UI components with Tailwind CSS v4 support

### [@solana-foundation/ms-tools-integrations](./packages/integrations/README.md)

Integration utilities for microsites. Provides:

- Standardized third-party service integrations
- API client utilities
- Common integration patterns
- Authentication helpers

### [@solana-foundation/ms-tools-config](./packages/config/README.md)

Shared configuration for microsites. Features:

- ESLint configuration with React and TypeScript support
- Prettier setup with import sorting
- TypeScript configuration with strict type checking
- Stylelint setup for modern CSS
- Vitest configuration for testing
- PostCSS setup with Tailwind CSS v4 integration

## Development Setup

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/solana-foundation/solana-ms-tools.git
   cd solana-ms-tools
   ```

2. Install dependencies:

   ```sh
   pnpm install
   ```

3. Build all packages:

   ```sh
   pnpm build
   ```

### Development Commands

- `pnpm test` - Run all tests
- `pnpm lint` - Run linting
- `pnpm build` - Build all packages
- `pnpm format` - Run Prettier
- `pnpm changeset` - Create a new changeset for version management

## Usage

### Registry Setup

Add this to your `.npmrc` to use these public packages from the GitHub registry:

```.npmrc
@solana-foundation:registry=https://npm.pkg.github.com
```

And authenticate with GitHub Package Registry:

1. Generate a Classic Personal Access Token (PAT):

   - Go to [GitHub Settings > Developer Settings > Personal Access Tokens > Tokens (classic)](https://github.com/settings/tokens)
   - Click "Generate new token (classic)"
   - Select at least `read:packages` scope
   - Copy your token

2. Login to the registry:

   ```sh
   npm login --registry=https://npm.pkg.github.com
   ```

   When prompted:

   - Username: your GitHub username
   - Password: your classic PAT (not your GitHub password)

### Installing Packages

```sh
pnpm add @solana-foundation/ms-tools-ui
pnpm add @solana-foundation/ms-tools-integrations
pnpm add @solana-foundation/ms-tools-config
```

### Basic Configuration

1. **ESLint Setup**:

   ```javascript
   import baseConfig from '@solana-foundation/ms-tools-config/eslint.config.base.js'

   export default [...baseConfig]
   ```

2. **Prettier Setup**:

   ```javascript
   import baseConfig from '@solana-foundation/ms-tools-config/prettier.config.js'

   export default { ...baseConfig }
   ```

3. **TypeScript Setup**:

   ```json
   {
     "extends": "@solana-foundation/ms-tools-config/tsconfig.json"
   }
   ```

For detailed configuration options, refer to each package's README.

## Release Process

We use [Changesets](https://github.com/changesets/changesets) for version management and package publishing. The release process is automated through GitHub Actions.

1. Create a changeset for your changes:

   ```sh
   pnpm changeset
   ```

2. Commit the changeset and push to main branch
3. The release workflow will automatically:
   - Version the packages
   - Update the changelog
   - Create a release PR
   - Publish to GitHub Package Registry when merged

For detailed release instructions, see [RELEASE.md](./RELEASE.md).

## Contributing

1. Create a new branch for your changes
2. Make your changes and add tests if applicable
3. Create a changeset to document your changes and bump the version
4. Submit a pull request
5. Ensure all checks pass
