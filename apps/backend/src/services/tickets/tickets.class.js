import attachReplies from '../helpers/index.js'
import { KnexService } from '@feathersjs/knex'

export class TicketsService extends KnexService {
  constructor(options, app) {
    super(options)
    this.app = app
  }

  async get(id, params) {
    const ticket = await super.get(id, params)
    return attachReplies(this.app, ticket)
  }

  async find(params) {
    const { query = {} } = params
    const { search, ...restQuery } = query

    if (search) {
      const knex = this.app.get('postgresqlClient')

      const tickets = await knex('tickets')
        .where(builder => {
          builder.whereILike('title', `%${search}%`).orWhereILike('description', `%${search}%`)
        })
        .where(builder => {
          if (restQuery.status) {
            builder.andWhere('status', restQuery.status)
          }
        })

      const ticketsWithReplies = await Promise.all(tickets.map(ticket => attachReplies(this.app, ticket)))

      return ticketsWithReplies
    }

    const result = await super.find({ ...params, query: restQuery })
    const tickets = result.data || result

    const ticketsWithReplies = await Promise.all(tickets.map(ticket => attachReplies(this.app, ticket)))

    return ticketsWithReplies
  }

  async create(data, params) {
    const ticketData = {
      title: data.title,
      description: data.description || '',
      status: data.status || 'open',
      createdAt: new Date(),
      updatedAt: new Date()
    }

    return super.create(ticketData, params)
  }

  async patch(id, data, params) {
    return super.patch(id, data, params)
  }
}

export const getOptions = app => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('postgresqlClient'),
    name: 'tickets'
  }
}
