//import server and dotenv
const server = require('./server');
require('dotenv').config();

//make port dynamic
const PORT = process.env.PORT || 4100;

//setup listen
server.listen(PORT, () => {
  console.log(`\n This is your port number captain: ${PORT} \n`)
})