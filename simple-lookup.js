const db = require('./database-access.js');
let input = process.argv[2];

function getData(result) {
  console.log(`Found ${result.rowCount} person(s) by the name ${input}`)
  let info = result.rows
  info.forEach((row) => {
    console.log(`- ${row.id}: ${row.first_name} ${row.last_name}, born ${row.birthdate}`);
  });
}

db.findPerson(input, getData);
