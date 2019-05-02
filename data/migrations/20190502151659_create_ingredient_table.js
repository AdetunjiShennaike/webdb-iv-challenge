
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', tbl => {
    //primary key
    tbl.increments();

    //table data
    //name
    tbl
    .string('name', '128')
    .notNullable()
    .unique()

    //measurement type
    tbl
    .string('measurement', '128')
    .notNullable()
  
  })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredients');
};