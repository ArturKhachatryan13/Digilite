import { tickets } from './tickets/tickets.js'
export const services = app => {
  app.configure(tickets)

  // All services will be registered here
}
