const { database } = require("../Config/admin");
const auth = require("../Helper/auth");
const isEmpty = require("../Helper/isEmpty");
module.exports = app => {
  // recieving Links
  app.get("/outsourcelinks", async (req, res) => {
    try {
      let links = [];
      const favBlogs = await database.collection("Outsource").get();
      favBlogs.forEach(doc => {
        const data = {
          values: doc.data(),
          id: doc.id
        };
        links.push(data);
      });
      return res.send(links);
    } catch (err) {
      console.log(err);
      return res.status(404).json({ err });
    }
  });

  //   Adding Link
  app.post("/outsourcelinks", auth, async (req, res) => {
    try {
      let error = [];
      const { link, title, desc } = req.body;
      if (isEmpty(link)) error.push("Must have a link");
      if (isEmpty(desc)) error.push("Must have a desc");
      if (isEmpty(title)) error.push("Must have a title");
      if (error.length > 0) return res.status(405).json(error);
      const newPost = {
        link,
        title,
        desc,
        dateAdded: new Date().toISOString()
      };
      await database.collection("Outsource").add(newPost);
      return res.status(200).json(newPost);
    } catch (err) {
      console.log(err);
      return res.status(404).json({ err: err.code });
    }
  });
  //   Deleting a Link
  app.delete("/outsourcelinks/:id",auth, async (req, res) => {
    try {
      const link = await database.doc(`Outsource/${req.params.id}`).get();
      if (link == "undefined")
        return res.status(404).json({ msg: "Link not found" });
      await database.doc(`Outsource/${req.params.id}`).delete();
      return res.status(200).json({ msg: `${req.params.id} deleted` });
    } catch (err) {
      console.log(err);
      return res.status(404).json({ err: err.code });
    }
  });
};
