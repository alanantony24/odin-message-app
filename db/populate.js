const { Client } = require("pg");
require("dotenv").config();

const SQL = `CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  "user" TEXT,
  text TEXT,
  added DATE
);

INSERT INTO messages ("user", text, added) 
VALUES
  ('Amando', 'Hi there!!', '2023-11-09'),
  ('Charles', 'Hi there!', '2024-03-04');`

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done!");
}

main();
