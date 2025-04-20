export async function up(knex) {
  await knex.schema.createTable('replies', table => {
    table.increments('id').primary()
    table.integer('ticketId').unsigned().notNullable().references('id').inTable('tickets').onDelete('CASCADE')
    table.text('message').notNullable()
    table.timestamp('createdAt').defaultTo(knex.fn.now())
  })
}

export async function down(knex) {
  await knex.schema.dropTable('replies')
}
