// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const ticketsSchema = Type.Object(
  {
    id: Type.Number(),
    title: Type.String(),
    description: Type.String(),
    status: Type.Union([Type.Literal('open'), Type.Literal('closed')]),
    createdAt: Type.Optional(Type.String({ format: 'date-time' })),
    updatedAt: Type.Optional(Type.String({ format: 'date-time' }))
  },
  { $id: 'Tickets', additionalProperties: false }
)
export const ticketsValidator = getValidator(ticketsSchema, dataValidator)
export const ticketsResolver = resolve({})

export const ticketsExternalResolver = resolve({})

// Schema for creating new entries
export const ticketsDataSchema = Type.Pick(ticketsSchema, ['title', 'description', 'status'], {
  $id: 'TicketsData'
})
export const ticketsDataValidator = getValidator(ticketsDataSchema, dataValidator)
export const ticketsDataResolver = resolve({})

// Schema for updating existing entries (patch)
export const ticketsPatchSchema = Type.Partial(ticketsSchema, {
  $id: 'TicketsPatch'
})
export const ticketsPatchValidator = getValidator(ticketsPatchSchema, dataValidator)
export const ticketsPatchResolver = resolve({})

// Schema for allowed query properties
export const ticketsQueryProperties = Type.Pick(ticketsSchema, ['id', 'title', 'status'])
export const ticketsQuerySchema = Type.Intersect(
  [querySyntax(ticketsQueryProperties), Type.Object({}, { additionalProperties: false })],
  { additionalProperties: false }
)
export const ticketsQueryValidator = getValidator(ticketsQuerySchema, queryValidator)
export const ticketsQueryResolver = resolve({})
