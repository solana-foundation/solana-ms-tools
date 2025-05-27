# @solana/ms-tools

## Overview

This is the core repository containing reusable packages for building Solana microsites. It serves as the source of truth for shared components, configurations, and integrations. Packages within this repo are published to npm for easy consumption in individual microsite projects.

## Packages

* **@solana/ms-tools-ui**: Reusable React components are built with React, Tailwind CSS, and Shadcn, forming the visual building blocks of microsites.
* **@solana/ms-tools-config**: Shared ESLint and Prettier configurations to ensure consistent code style and quality across all projects.
* **@solana/ms-tools-analytics**: ⚠️ [WIP] Logic for integrating Google Analytics into microsites.
* **@solana/ms-tools-integrations**: Handles integrations with third-party services like Sanity CMS, providing a centralized location for managing these connections.

## Usage

To use any of the packages, set custom registry in your `.npmrc` like so:

```.npmrc
@solana:registry=https://npm.pkg.github.com
```

To install any of them, log in to the registry. Use classic GitHub token with `read:packages` and `repo` permissions as password.

```
pnpm login --registry https://npm.pkg.github.com
```
