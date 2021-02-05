/* eslint-disable no-multiple-empty-lines */
const functions = require("firebase-functions");
const express = require("express");

const cors = require("cors");
const app=express();
app.use(cors());

const admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase);


const db = admin.firestore();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});










// add the user page route and the feed route
// the user page route should feed everything that
//  a user's page needs to display
// and the feed route will collect the aesthetics in their feed.
app.get("/users/:uid", async function getUser(req, res) {
  const uid = req.params.uid;
  res.status(200).send(`You requested user with ID = ${uid}`);
});

app.get("/users/feed/:username", async function(req, res) {
  const aesthetics = [];
  // do something
  db.collection("aesthetics").where("username", "==", req.params.username)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        aesthetics.push(doc.data());
      });
    });
  res.sendStatus(200).json({data: aesthetics});
});
app.get("/userPage/:uid", async function(req, res) {
  const data = {};
  const uid = req.params.uid;
  db.collection("users").get().then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      if (doc.data().username.toLowerCase() === uid) {
        data.userInfo = doc.data;
      } else {
        // eslint-disable-next-line max-len
        res.status(200).send(`You requested userinfo for the user reewith ID = ${uid}`);
      }
    });
  });
  res.status(200).json({id: data.data.id, data: data()});
});

app.get("/users/userInfo/:uid", async function getUser(req, res) {
  const uid = req.params.uid;
  // cycle through documents in the 'users' database
  db.collection("users").get().then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      if (doc.data().username.toLowerCase() === uid) {
        res.status(200).json({id: doc.id, data: doc.data()});
      } else {
        // eslint-disable-next-line max-len
        res.status(200).send(`You requested userinfo for the user reewith ID = ${uid}`);
      }
    });
  });
  db.collection("users").where("username", "==", uid)
    .get()
    .then((user) => {
      if (user.exists) {
        res.status(200).json({id: user.id, data: user.data()});
      } else {
        // eslint-disable-next-line max-len
        res.status(200).send(`You requested userinfo for the user with ID = ${uid}`);
      }
    }).catch((error) => res.status(500).send(error));
});
app.get("/aesthetics/:id", async function getAesthetic(req, res) {
  const id = req.params.uid;
  res.status(200).send(`You requested aesthetic with ID = ${id}`);
});


// Again, lets be nice and help the poor wandering servers, any requests to /api
// that are not /api/users will result in 404.
app.get("*", async (req, res) => {
  res.status(404).send("This route does not exist.");
});


exports.api = functions.https.onRequest(app);
