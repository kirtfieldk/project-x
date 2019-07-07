const firebase = require("firebase/app");
const isEmpty = require("../Helper/isEmpty");

require("firebase/auth");
require("firebase/firestore");
// Only two accounts are registedred and they are the only ones autherized to 
// make changes
module.exports = app => {
  app.post("/login", async (req, res) => {
    try {
      let error = {};
      const { email, password } = req.body;
      if (isEmpty(email)) error.email = "Email cannot be empty";
      if (isEmpty(password)) error.password = "Password cannot be empty";
      if (error.length > 0) return res.status(400).json({ error });

      const signIn = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      const token = await signIn.user.getIdToken();
      res.json({ token });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ err: err.code });
    }
  });
};
