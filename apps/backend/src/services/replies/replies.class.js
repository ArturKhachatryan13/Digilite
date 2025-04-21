import { KnexService } from '@feathersjs/knex'

export class RepliesService extends KnexService {
  async create(data, params) {
    const replyData = {
      message: data.message,
      ticketId: data.ticketId,
      createdAt: new Date()
    }

    const result = await super.create(replyData, params)

    return result
  }
}

export const getOptions = app => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('postgresqlClient'),
    name: 'replies'
  }
}
