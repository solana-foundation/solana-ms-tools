import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  './packages/analytics/vitest.config.js',
  './packages/ui/vitest.config.js',
  './packages/integrations/vitest.config.js',
])
