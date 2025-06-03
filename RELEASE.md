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

2. **Version Bump**

   - Determine the type of version bump (major, minor, patch) based on changes
   - Run the appropriate command:

     ```bash
     pnpm changeset
     ```

   - Select all updated packages and proceed with:

     ```bash
     pnpm changeset version
     ```

   - This will update changelog and versions
   - Run to update lockfile:

     ```bash
     pnpm install
     ```

3. **Documentation Updates**

   - Ensure each package's README.md is up to date
   - Update the main README.md if needed
   - Check that all documentation reflects the latest changes
   - Update any version references in documentation

4. **Merge your changes**
   Create a pull request to the main branch and merge it.
   This will trigger the release workflow.

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
