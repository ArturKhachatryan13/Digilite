import { KnexService } from '@feathersjs/knex'

export class TicketsService extends KnexService {
  constructor(options, app) {
    super(options)
    this.app = app // 💡 сохраняем app внутри класса
  }

  async get(id, params) {
    const ticket = await super.get(id, params)

    const replies = await this.app.service('replies').find({
      query: {
        ticketId: id
      },
      paginate: false
    })

    return {
      ...ticket,
      replies
    }
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
