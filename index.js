const firebase = require("firebase");
const functions = require("firebase-functions");
const app = require("express")();

keys = require("./Config/keys");
require("./Config/admin");

firebase.initializeApp(keys);

// Routes
require("./Routes/Blog")(app);
require("./Routes/Podcast")(app);
require("./Routes/Newsletter")(app);
require("./Routes/Outsource")(app);
require("./Routes/Signin")(app);
require("./Routes/Images")(app);

exports.api = functions.https.onRequest(app);
