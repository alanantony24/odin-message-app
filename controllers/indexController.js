const db = require("../db/queries");

async function getAllMessages(req, res) {
  const messagesFromDb = await db.getAllMessages();
  console.log(messages);
  res.render("index", { title: "Messages", messages: messagesFromDb });
}

module.exports = { getAllMessages };
