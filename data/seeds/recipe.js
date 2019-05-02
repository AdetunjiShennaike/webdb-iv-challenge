
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { name: 'Miso', instructions: '1. Create the soup base with hon dashi 2. Boil the noodles and after they become soft drain the water 3. Pour in the soup base and boil again to let it soak 4. Add extra toppings such as meats and veggies', notes: '', dish_id: 1 },
        { name: 'Tonkatsu', instructions: '1. Create the soup base with hon dashi 2. Boil the noodles and after they become soft drain the water 3. Pour in the soup base and boil again to let it soak 4. Add extra toppings such as meats and veggies ', notes: '', dish_id: 1 },
        { name: 'Shoyu', instructions: '1. Create the soup base with hon dashi 2. Boil the noodles and after they become soft drain the water 3. Pour in the soup base and boil again to let it soak 4. Add extra toppings such as meats and veggies ', notes: '', dish_id: 1 }
      ]);
    });
};
