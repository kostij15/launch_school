const { Client } = require('pg');
const DB_CREDENTIALS = {
  database: 'films',
  user: '',
  password: '',
};
let client = new Client(DB_CREDENTIALS);

async function logQuery(queryText) {
  await client.connect();

  let data = await client.query(queryText);

  console.log(data.rows[2].count);
  client.end();
};

logQuery(`SELECT count(id) FROM films
WHERE duration < 110
GROUP BY genre;`);