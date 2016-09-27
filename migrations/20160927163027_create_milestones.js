
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('milestones', (table) => {
      table.increments('id');
      table.string('description');
      table.date('date_acheived');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('milestones')
  ])
};
