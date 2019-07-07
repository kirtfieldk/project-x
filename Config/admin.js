var admin = require("firebase-admin");

var serviceAccount = require("./adminInit.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://project-x-ba483.firebaseio.com"
});

const database = admin.firestore();

module.exports = { admin, database };
