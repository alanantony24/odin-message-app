const { Client } = require("pg");

const client = new Client({ connectionString: process.env.DATABASE_URl });

async function getAllMessages() {
  const { rows } = await client.query("SELECT * FROM messages");
  return rows;
}

module.exports = {getAllMessages}
