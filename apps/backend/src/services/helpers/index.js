export default async function attachReplies(app, ticket) {
  const replies = await app.service('replies').find({
    query: {
      ticketId: ticket.id
    },
    paginate: false
  })

  return {
    ...ticket,
    replies
  }
}
