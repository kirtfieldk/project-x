const auth = require("../Helper/auth");
const isEmpty = require("../Helper/isEmpty");
const { database } = require("../Config/admin");
module.exports = app => {
  // Retrieving list of post
  app.get("/blogpost", async (req, res) => {
    try {
      let blogArray = [];
      const blogs = await database.collection("Blog-post").get();
      blogs.forEach(doc => {
        let data = {
          body: doc.data(),
          id: doc.id
        };
        blogArray.push(data);
      });
      return res.send(blogArray);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ err });
    }
  });
  // Posting blogPost
  app.post("/blogpost", auth, async (req, res) => {
    try {
      let error = [];
      const { author, body, blogImg, title, desc } = req.body;
      if (isEmpty(author)) error.push("Author required");
      if (isEmpty(body)) error.push("Blog must have content");
      if (isEmpty(title)) error.push("Blog mush have a title");
      if (isEmpty(blogImg)) error.push("Blog must have an image");
      if (error.length > 0) return res.send(error);
      const newPost = {
        desc,
        author,
        title,
        blogImg,
        body,
        dateAdded: new Date().toISOString()
      };
      await database.collection("Blog-post").add(newPost);
      return res.status(200).json({ msg: `Added ${title}` });
    } catch (err) {
      console.log(err);
      res.status(400).json({ err });
    }
  });
  // Retrieving specific blofPost
  app.get("/blogpost/:id", async (req, res) => {
    try {
      let blogArray = [];
      const blogpost = await database.doc(`Blog-post/${req.params.id}`).get();
      console.log(blogpost.data());
      return res.status(200).json(blogArray);
    } catch (err) {
      console.log(err);
      return res.status(404).json({ err });
    }
  });
  // Deleting Post
  app.delete("/blogpost/delete/:id", auth, async (req, res) => {
    try {
      const postDelete = await database.doc(`Blog-post/${req.params.id}`).get();
      console.log(postDelete.exists);
      if (postDelete.exists === false) {
        return res.status(404).json({ msg: "Post not found" });
      }

      await database.doc(`Blog-post/${req.params.id}`).delete();
      return res.status(202).json({ msg: `Deleted ${req.params.id}` });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ err: err.code });
    }
  });
};
