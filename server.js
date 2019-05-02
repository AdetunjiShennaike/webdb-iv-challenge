//import express and other dependencies
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

//import routes and env
const testing = process.env.MESSAGE
const recipeRoute = require('./routes/recipeRoute');
const ingredientsRoute = require('./routes/ingredientsRoute');
const dishRoute = require('./routes/dishRoute');

//define server
server = express();
server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(morgan('dev'));


//setup routes
server.use('/api/dish', dishRoute);
server.use('/api/recipe', recipeRoute);
server.use('/api/ingredients', ingredientsRoute);


//test if running
server.get('/', (req, res) => {
  res.status(200).json( testing );
})

//export
module.exports = server;