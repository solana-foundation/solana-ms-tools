import { setProjectAnnotations } from '@storybook/experimental-nextjs-vite'
import { beforeAll } from 'vitest'
import * as projectAnnotations from './preview'

if (process.env.NODE_ENV === 'test') {
  console.info('Vitest environment loaded')
  // This is an important step to apply the right configuration when testing your stories.
  // More info at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
  const project = setProjectAnnotations([projectAnnotations])

  beforeAll(project.beforeAll)
}
