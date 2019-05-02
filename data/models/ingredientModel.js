//import knex from config file 
const db = require('../dbConfig');

//set up th exports
module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
}

//setup SQL Functions
function get() {
  return db('ingredients');
}

function getById(id) {
 return db('ingredients')
 .where('id', id)
 .first()
}

function insert(dish) {
  return db('ingredients')
  .insert( dish )
  .then( ids => {
    return getById(ids[0]);//returns the whole object
  })
}

function update(id, change) {
  return db('ingredients')
  .where({ id })
  .update( change )
  .then( ids => {
    return getById(ids[0]);//returns the whole object
  })
}

function remove(id) {
  return db('ingredients')
  .where('id', id)
  .del()
  .then( ids => {
    return getById(ids[0]);//returns the whole object
  })
}