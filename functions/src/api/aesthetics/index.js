const express = require("express");
export const aestheticsRouter = express.Router();
aestheticsRouter.get("/:uid", async function getUser(req: express.Request, res: express.Response) {
  // ...

  // just like before
  const uid = req.params.uid;
  res.status(200).send(`You requested user with UID = ${uid}`);

  // ...
});

// Useful: Let's make sure we intercept un-matched routes and notify the client with a 404 status code
aestheticsRouter.get("*", async (req: express.Request, res: express.Response) => {
	res.status(404).send("This route does not exist.");
});