export async function up(knex) {
  await knex.schema.createTable('tickets', table => {
    table.increments('id').primary()
    table.string('title').notNullable()
    table.text('description')
    table.enum('status', ['open', 'closed']).defaultTo('open')
    table.timestamp('createdAt').defaultTo(knex.fn.now())
    table.timestamp('updatedAt').defaultTo(knex.fn.now())
  })
}

export async function down(knex) {
  await knex.schema.dropTable('tickets')
}
