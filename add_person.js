const settings = require('./settings');
var knex = require('knex')({
  client: 'pg',
  connection: {
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    host     : settings.hostname,
    port     : settings.port,
    ssl      : settings.ssl
  }
});

let firstName = process.argv[2];
let lastName = process.argv[3];
let date = process.argv[4];

knex.insert({first_name : firstName, last_name : lastName, birthdate : date}).into('famous_people')
.then(function(rows) {
  console.log(rows)
  knex.destroy(function(){});
})
