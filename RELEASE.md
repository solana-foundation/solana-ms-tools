# Release Process

This document outlines the step-by-step process for releasing new versions of the @solana-foundation/ms-tools packages.

## Prerequisites

- Node.js (version specified in `.nvmrc`)
- pnpm installed globally
- Write access to the repository
- GitHub Personal Access Token with `packages:write` scope

## Release Steps

1. **Pre-release Checklist**

   - [ ] Ensure all tests pass: `pnpm test`
   - [ ] Ensure the build is successful: `pnpm build`
   - [ ] Check that all linting passes: `pnpm lint`
   - [ ] Review the changes since the last release
   - [ ] Update package changelogs in each modified package

2. **Version Management**

   a. Create a changeset to document changes and propose version bump:

   ```bash
   pnpm changeset
   ```

   This will:

   - Prompt you to select changed packages
   - Choose the type of version bump (major, minor, patch)
   - Create a .changeset file documenting the changes

   b. Apply version updates:

   ```bash
   pnpm changeset version
   ```

   This will:

   - Update package versions based on changesets
   - Update CHANGELOG.md files
   - Remove the changeset files

   c. Update dependencies:

   ```bash
   pnpm install
   ```

   This will update the lockfile with new versions

3. **Documentation Updates**

   - Ensure each package's README.md is up to date
   - Update the main README.md if needed
   - Check that all documentation reflects the latest changes
   - Update any version references in documentation

4. **Release Process**

   a. Create a pull request with your changes
   b. Ensure all checks pass in the PR
   c. Get necessary reviews and approvals
   d. Merge to main branch

   The merge will trigger the automated release workflow, which will:

   - Build all packages
   - Publish to GitHub Package Registry
   - Create GitHub Release
   - Update package documentation

## Package-specific Considerations

### @solana-foundation/ms-tools-ui

- Ensure all component documentation is updated
- Check that the Storybook build is successful
- Verify visual regression tests

### @solana-foundation/ms-tools-integrations

- Test all third-party integrations
- Verify API compatibility

### @solana-foundation/ms-tools-config

- Document any breaking changes in ESLint or Prettier configs
- Update migration guides if necessary

## Emergency Rollback Procedure

If issues are discovered after release:

1. Tag the problematic version as deprecated:

   ```bash
   pnpm deprecate @solana-foundation/[package-name]@version "Reason for deprecation" --registry=https://npm.pkg.github.com
   ```

2. Roll back to the previous version:

   ```bash
   # Revert the version commit
   git revert [version-commit-hash]

   # Push the revert
   git push origin main

   # Publish the previous version
   pnpm publish --tag previous --registry=https://npm.pkg.github.com
   ```
