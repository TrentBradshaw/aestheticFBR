const express = require("express");
// eslint-disable-next-line new-cap
const aestheticsRouter = express.Router();
aestheticsRouter.get("/:id", async function getAesthetic(req, res) {
  const id = req.params.uid;
  res.status(200).send(`You requested aesthetic with ID = ${id}`);
});

aestheticsRouter.get("*", async (req, res) => {
  res.status(404).send("This route does not exist.");
});

module.exports = aestheticsRouter;
