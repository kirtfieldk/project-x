const { database } = require("../Config/admin");
const auth = require("../Helper/auth");
module.exports = app => {
  // Adding a email to newsletter

  // getting all users
  app.get("/newsletter", auth, async (req, res) => {
    try {
      let newsletterArray = [];
      const response = await database
        .collection("Newsletter")
        .orderBy("dateAdded", "desc")
        .get();
      response.forEach(doc => {
        newsletterArray.push(doc.data());
      });
      console.log(newsletterArray);
      return res.json(newsletterArray);
    } catch (err) {
      console.log(err);
      return res.status(404).json({ err: err.code });
    }
  });
  //adding email address
  app.post("/newsletter", async (req, res) => {
    try {
      const { email } = req.body;
      if (email.trim() === "") {
        return res.status(400).json({ msg: "email cannot be empty" });
      }
      const newEmail = {
        email,
        dateAdded: new Date().toISOString()
      };
      const repeatEmail = await database
        .collection("Newsletter")
        .where("email", "==", newEmail.email)
        .get();
      repeatEmail.forEach(doc => {
        if (doc.data().email == newEmail.email)
          return res.status(400).json({ msg: "email already used" });
      });

      await database.collection("Newsletter").add(newEmail);
      return res.json({ msg: `${email} added!` });
    } catch (err) {
      console.log(err);
      return res.status(502).json({ err });
    }
  });
  // Deleting an email address
  app.delete("/newsletter/:id", auth, async (req, res) => {
    try {
      const email = await database.doc(`Newsletter/${req.params.id}`).get();
      if (!email.exists)
        return res.status(404).json({ msg: "Email not in database" });
      await database.doc(`Newsletter/${req.params.id}`).delete();
      return res.status(200).json({ msg: `${req.params.id} deleted` });
    } catch (err) {
      console.log(err);
      return res.status(404).json({ err });
    }
  });
};
