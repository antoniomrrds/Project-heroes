exports.up = knex => knex.schema.createTable('heroes', table => {
    table.increments('id').primary();
    table.string('name').notNull();
    table.string('superPowers').notNull();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('update_at').defaultTo(knex.fn.now());
})


exports.down = knex => knex.schema.dropTable('heroes')