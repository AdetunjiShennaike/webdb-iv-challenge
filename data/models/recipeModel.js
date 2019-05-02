//import knex from config file 
const db = require('../dbConfig');

//set up th exports
module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
  getIngredients,
  getRecipe
}

//setup SQL Functions
function get() {
  return db('recipes');
}

function getById(id) {
 return db('recipes')
 .where('id', id)
 .first()
}

function insert(dish) {
  return db('recipes')
  .insert( dish )
  .then( ids => {
    return getById(ids[0]);//returns the whole object
  })
}

function update(id, change) {
  return db('recipes')
  .where({ id })
  .update( change )
  .then( ids => {
    return getById(ids[0]);//returns the whole object
  })
}

function remove(id) {
  return db('recipes')
  .where('id', id)
  .del()
  .then( ids => {
    return getById(ids[0]);//returns the whole object
  })
}

function getIngredients(id) {
  return db('recIng')
  .where('recipe_id', id)
  .then( ingredients => ingredients.map(ingredient => { return {...ingredient}}))
}

function getRecipe(id) {
  return db('recipes')
  .where('id', id)
  .then( ids => {
    return  getById(ids[0]) && getIngredients(ids[0])
  })
}