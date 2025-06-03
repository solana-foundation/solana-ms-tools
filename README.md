# @solana-foundation/ms-tools

## Overview

This is the core repository containing reusable packages for building Solana microsites. It serves as the source of truth for shared components, configurations, and integrations. Packages within this repo are published to npm for easy consumption in individual microsite projects.

## Packages

- **@solana-foundation/ms-tools-ui**: UI components for microsites.
- **@solana-foundation/ms-tools-integrations**: Integration utilities for microsites.
- **@solana-foundation/ms-tools-config**: Shared configuration for microsites.

## Usage

To use any of the packages, set custom registry in your `.npmrc` like so:

```.npmrc
@solana-foundation:registry=https://npm.pkg.github.com
```

To install any of them, log in to the registry. Use classic GitHub token with `read:packages` and `repo` permissions as password.

```
pnpm login --registry https://npm.pkg.github.com
```
