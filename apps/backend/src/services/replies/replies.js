// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  repliesDataValidator,
  repliesPatchValidator,
  repliesQueryValidator,
  repliesResolver,
  repliesExternalResolver,
  repliesDataResolver,
  repliesPatchResolver,
  repliesQueryResolver
} from './replies.schema.js'
import { RepliesService, getOptions } from './replies.class.js'

export const repliesPath = '/replies'
export const repliesMethods = ['find', 'get', 'create', 'patch', 'remove']

export * from './replies.class.js'
export * from './replies.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const replies = app => {
  // Register our service on the Feathers application
  app.use(repliesPath, new RepliesService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: repliesMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(repliesPath).hooks({
    around: {
      all: [schemaHooks.resolveExternal(repliesExternalResolver), schemaHooks.resolveResult(repliesResolver)]
    },
    before: {
      all: [schemaHooks.validateQuery(repliesQueryValidator), schemaHooks.resolveQuery(repliesQueryResolver)],
      find: [],
      get: [],
      create: [schemaHooks.validateData(repliesDataValidator), schemaHooks.resolveData(repliesDataResolver)],
      patch: [schemaHooks.validateData(repliesPatchValidator), schemaHooks.resolveData(repliesPatchResolver)],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}
