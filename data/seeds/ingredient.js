
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: 'Ginger', measurement: 'tea spoons' },
        { name: 'Eggs', measurement: 'egg' },
        { name: 'Hon Dashi', measurement: 'tbl spoons' }
      ]);
    });
};
