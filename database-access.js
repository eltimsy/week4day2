const pg = require('pg');
const settings = require('./settings');

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

function findPerson(person, callback){
  client.connect((err) => {
    if(err) {
      return console.error("Connection Error", err);
    }
    console.log("Searching...")
    client.query("SELECT * FROM famous_people WHERE last_name = $1::text", [person], (err, result) => {
      if (err) {
        return console.error("error running query", err);
      }
      callback(result);
      client.end();
    });
  });
}
module.exports = {
  findPerson: findPerson
}
