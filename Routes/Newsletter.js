const { database } = require("../Config/admin");
const auth = require("../Helper/auth");
module.exports = app => {
  // Adding a email to newsletter

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
  app.post("/newsletter", async (req, res) => {
    try {
      const { email } = req.body;
      if (email === "") {
        return res.status(400).json({ msg: "email cannot be empty" });
      }
      const newEmail = {
        email,
        dateAdded: new Date().toISOString()
      };
      const repeatEmail = await database
        .collection("Newsletter")
        .where("email", "==", email)
        .get();
      if (repeatEmail)
        return res.status(400).json({ msg: "Email already in newsletter" });
      await database.collection("Newsletter").add(newEmail);
      return res.json({ msg: `${email} added!` });
    } catch (err) {
      console.log(err);
      return res.status(502).json({ err });
    }
  });
};
