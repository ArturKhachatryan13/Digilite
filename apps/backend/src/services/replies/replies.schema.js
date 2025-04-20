// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const repliesSchema = Type.Object(
  {
    id: Type.Number(),
    ticketId: Type.Number(),
    message: Type.String(),
    createdAt: Type.String({ format: 'date-time' })
  },
  { $id: 'Replies', additionalProperties: false }
)
export const repliesValidator = getValidator(repliesSchema, dataValidator)
export const repliesResolver = resolve({})

export const repliesExternalResolver = resolve({})

// Schema for creating new entries
export const repliesDataSchema = Type.Object(
  {
    ticketId: Type.Number(),
    message: Type.String()
  },
  { $id: 'RepliesData' }
)
export const repliesDataValidator = getValidator(repliesDataSchema, dataValidator)
export const repliesDataResolver = resolve({})

// Schema for updating existing entries
export const repliesPatchSchema = Type.Partial(repliesSchema, {
  $id: 'RepliesPatch'
})
export const repliesPatchValidator = getValidator(repliesPatchSchema, dataValidator)
export const repliesPatchResolver = resolve({})

// Schema for allowed query properties
export const repliesQueryProperties = Type.Pick(repliesSchema, ['id', 'ticketId', 'message', 'createdAt'])
export const repliesQuerySchema = Type.Intersect(
  [querySyntax(repliesQueryProperties), Type.Object({}, { additionalProperties: false })],
  { additionalProperties: false }
)
export const repliesQueryValidator = getValidator(repliesQuerySchema, queryValidator)
export const repliesQueryResolver = resolve({})
