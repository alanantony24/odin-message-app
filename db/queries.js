const { Client } = require("pg");
require("dotenv").config();

async function getMessages() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    await client.connect();
    const result = await client.query("SELECT * FROM messages");
    await client.end();
    return result.rows;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

async function addMessages(user, text, added) {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    await client.connect();
    const result = await client.query(`INSERT INTO messages ("user", text, added) values ($1, $2, $3)`, [user, text, added]);
    await client.end();
    return result.rows;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

module.exports = { getMessages,addMessages };
