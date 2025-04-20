import { KnexService } from '@feathersjs/knex'

export class TicketsService extends KnexService {
  async get(id, params) {
    const ticket = await super.get(id, params)
    return ticket
  }

  async find(params) {
    const result = await super.find(params)
    return result
  }
  async create(data, params) {
    const ticketData = {
      title: data.title,
      description: data.description || '',
      status: data.status || 'open',
      createdAt: new Date(),
      updatedAt: new Date()
    }

    const result = await super.create(ticketData, params)

    return result
  }
}

export const getOptions = app => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('postgresqlClient'),
    name: 'tickets'
  }
}
