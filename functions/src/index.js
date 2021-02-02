const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const usersApi = require("./api/users/");
const aestheticsApi = require("./api/aesthetics");
console.log(aestheticsApi);
console.log(cors);
const admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase);

const app = express();
// https://expressjs.com/en/advanced/best-practice-security.html#at-a-minimum-disable-x-powered-by-header
app.disable("x-powered-by");

// Any requests to /api/users will be routed to the user router!
app.use("/users", usersApi);
app.use("/aesthetics", aestheticsApi);

// Again, lets be nice and help the poor wandering servers, any requests to /api
// that are not /api/users will result in 404.
app.get("*", async (req, res) => {
  res.status(404).send("This route does not exist.");
});

exports.api = functions.https.onRequest(app);
