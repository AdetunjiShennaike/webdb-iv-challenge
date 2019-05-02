
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recIng', tbl => {
    //primary key
    tbl.increments();
    
    //foreign keys
    tbl
    .integer('recipe_id')
    .unsigned()
    .references('id')
    .inTable('recipes')
    .notNullable()
    .onDelete('RESTRICT')
    .onUpdate('CASCADE')
    
    tbl
    .integer('ingredient_id')
    .unsigned()
    .references('id')
    .inTable('ingredients')
    .notNullable()
    .onDelete('RESTRICT')
    .onUpdate('CASCADE')
    
    //table data
    //amount required
    tbl
    .float('amount')
    .notNullable()

    //measurement type
    tbl
    .string('measurement', '128')
    .notNullable()

  })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recIng');
};