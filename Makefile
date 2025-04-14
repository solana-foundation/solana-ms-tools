SHELL:=bash

### This file contains all the scripts that work at CI

# Build storybook and run smoke test for the app package
build-ui-storybook:
	pnpm --filter "ms-tools-ui" storybook:build --disable-telemetry --quiet $(arg1)

# Build storybook and run smoke test for the grid package
build-grid-storybook:
	pnpm --filter "ms-tools-grid" storybook:build --disable-telemetry --quiet $(arg1)

# check that storybook's play tests have no issues
smoke-play-test:
	$(MAKE) smoke-play-test-ui smoke-play-test-grid

# Run smoke tests for the app package
smoke-play-test-ui:
	$(MAKE) build-ui-storybook &&\
		pnpm --filter "ms-tools-ui" run ci:test-smoke

# Run smoke tests for the grid package
smoke-play-test-grid:
	$(MAKE) build-grid-storybook &&\
		pnpm --filter "ms-tools-grid" run ci:test-smoke

# Run smoke tests for all storybooks
smoke-test-storybook:
	$(MAKE) smoke-test-ui-storybook smoke-test-grid-storybook

# Install playwright for smoke test
playwright-install:
	pnpm playwright:install

# Kill Turbo processes
kill-turbo:
	pkill turbo
