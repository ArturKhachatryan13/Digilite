import { replies } from './replies/replies.js'
import { tickets } from './tickets/tickets.js'
export const services = app => {
  app.configure(replies)
  app.configure(tickets)

  // All services will be registered here
}
