
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recIng').del()
    .then(function () {
      // Inserts seed entries
      return knex('recIng').insert([
        { recipe_id: 1, ingredient_id: 3, amount: 2, measurement: 'tbl spoons' },
        { recipe_id: 2, ingredient_id: 3, amount: 2, measurement: 'tbl spoons' },
        { recipe_id: 3, ingredient_id: 3, amount: 2, measurement: 'tbl spoons' }
      ]);
    });
};
