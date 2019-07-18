const auth = require("../Helper/auth");
const { database } = require("../Config/admin");
module.exports = app => {
  app.get("/podcast", async (req, res) => {
    try {
      let podcastList = [];
      const podcasts = await database.collection("Podcast").get();

      podcasts.forEach(pod => {
        const data = {
          values: pod.data(),
          id: pod.id
        };
        podcastList.push(data);
      });
      res.send(podcastList);
    } catch (err) {
      console.log(err);
      res.status(500).json({ err: err.code });
    }
  });
  //   Adding a podcast

  app.post("/podcast", auth, async (req, res) => {
    try {
      const { desc, link, title, imageUrl, author } = req.body;
      const podcast = {
        desc,
        link,
        title,
        author,
        imageUrl,
        dateAdded: new Date().toISOString()
      };
      await database.collection("Podcast").add(podcast);
      return res.status(200).json(podcast);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ err: err.code });
    }
  });
  // Selected Podcast
  app.get("/podcast/:id", async (req, res) => {
    try {
      const response = await database.doc(`Podcast/${req.params.id}`).get();
      console.log(response.data());
      if (response.data().exists)
        return res.status(404).json({ msg: "Post not found" });
      return res.status(200).json(response.data());
    } catch (err) {
      return res.status(400).json({ err: err.code });
    }
  });

  // Deleteing a podcast
  app.delete("/podcast/delete/:postId", auth,async (req, res) => {
    try {
      const response = await database.doc(`Podcast/${req.params.postId}`).get();
      const title = response.data().title;
      if (!response.exists)
        return res.status(404).json({ msg: "Post not found" });
      await database.doc(`Podcast/${req.params.postId}`).delete();
      return res.status(200).json({ msg: `Post ${title} deleted` });
    } catch (err) {
      console.log(err);
      return res.status(404).json({ err: err.code });
    }
  });
};
