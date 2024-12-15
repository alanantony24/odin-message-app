const { Router } = require("express");
const indexController = require("../controllers/indexController");
const indexRouter = Router();

//see all messages
indexRouter.get("/messages", indexController.getAllMessages);

//render the new message form
indexRouter.get("/new", (req, res) => {
  res.render("form");
});

//see the individual message from user
// indexRouter.get("/:userName", (req, res) => {
//   const userName = req.params.userName
//   const message = messages.find((msg) => msg.user === userName);
//   if (message) {
//     res.render("message", { message });
//   } else {
//     res.status(404).send("Message not found");
//   }
// });

//add a new message
// indexRouter.post("/new", (req, res) => {
//   let userName = req.body.userName;
//   let messageText = req.body.messageText;
//   let date = new Date();
//   messages.push({ text: messageText, user: userName, added: date });
//   res.redirect("/");
// });

module.exports = indexRouter;
