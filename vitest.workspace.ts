import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  './packages/ui/vitest.config.js',
  './packages/integrations/vitest.config.js',
])
