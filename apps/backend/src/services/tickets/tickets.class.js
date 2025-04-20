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
          if (restQuery.id) {
            builder.andWhere('id', restQuery.id)
          }
        })

      const ticketsWithReplies = await Promise.all(
        tickets.map(async ticket => {
          const replies = await this.app.service('replies').find({
            query: { ticketId: ticket.id },
            paginate: false
          })

          return {
            ...ticket,
            replies
          }
        })
      )

      return ticketsWithReplies
    }

    const result = await super.find({ ...params, query: restQuery })

    const tickets = result.data || result

    const ticketsWithReplies = await Promise.all(
      tickets.map(async ticket => {
        const replies = await this.app.service('replies').find({
          query: {
            ticketId: ticket.id
          },
          paginate: false
        })

        return {
          ...ticket,
          replies
        }
      })
    )

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

    const result = await super.create(ticketData, params)

    return result
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
