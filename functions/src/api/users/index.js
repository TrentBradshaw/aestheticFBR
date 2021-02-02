const express = require("express");
// eslint-disable-next-line new-cap
const usersRouter = express.Router();
usersRouter.get("/:uid", async function getUser(req, res) {
  const uid = req.params.uid;
  res.status(200).send(`You requested aesthetic with ID = ${uid}`);
});

usersRouter.get("*", async (req, res) => {
  res.status(404).send("This route does not exist.");
});

module.exports = usersRouter;
