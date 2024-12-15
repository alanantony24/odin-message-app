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
indexRouter.get("/:userName", indexController.getMessagesByUser);

//add a new message
indexRouter.post("/new", indexController.postMessagesByUser);

module.exports = indexRouter;
