
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(table) {
        table.increments('id').primary();
        table.string('name', 128)
            .notNullable();
        table.timestamp('createdAt').defaultTo(knex.fn.now());
    }),
    knex.schema.createTable('posts', function(table){
        table.increments('id').primary();
        table.string('body')
            .notNullable();
        table.integer('userId')
             .references('id')
             .inTable('users');
        table.timestamp('createdAt').defaultTo(knex.fn.now());
    }),
    knex.schema.createTable('tags', function(table) {
        table.increments('id').primary();
        table.string('tagId', 16)
           .unique('tagId', 'uq_tagId');
        table.timestamp('createdAt').defaultTo(knex.fn.now()); 
    }),
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTableIfExists('users'),
      knex.schema.dropTableIfExists('posts'),
      knex.schema.dropTableIfExists('tags')
  ])
};
