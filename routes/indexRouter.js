const { Router } = require("express");

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini messageboard", messages: messages });
});

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.get("/:userName", (req, res) => {
  const userName = req.params.userName
  const message = messages.find((msg) => msg.user === userName);
  if (message) {
    res.render("message", { message });
  } else {
    res.status(404).send("Message not found");
  }
});

indexRouter.post("/new", (req, res) => {
  let userName = req.body.userName;
  let messageText = req.body.messageText;
  let date = new Date();
  messages.push({ text: messageText, user: userName, added: date });
  res.redirect("/");
});

module.exports = indexRouter;
