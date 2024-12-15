const db = require("../db/queries");

async function getAllMessages(req, res) {
  const messagesFromDb = await db.getMessages();
  res.render("index", { title: "Messages", messages: messagesFromDb });
}

async function getMessagesByUser(req, res) {
  const messagesFromDb = await db.getMessages();
  const username = req.params.userName;
  const message = messagesFromDb.find((message) => (message.user === username));
  console.log(message)
  if (message) {
    res.render("message", { message });
  } else {
    res.status(404).send("Message not found");
  }
}

async function postMessagesByUser(req, res) {
  let userName = req.body.userName;
  let messageText = req.body.messageText;
  let date = new Date();
  db.addMessages(userName, messageText, date);
  res.redirect("/messages");
}

module.exports = { getAllMessages, getMessagesByUser, postMessagesByUser };
