const auth = require("../Helper/auth");
const { database } = require("../Config/admin");
module.exports = app => {
  app.get("/podcast", auth, async (req, res) => {
    try {
      let podcastList = [];
      const podcasts = await database.collection("Podcast").get();

      podcasts.forEach(pod => {
        podcastList.push(pod.data());
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
      const { desc, link, title } = req.body;
      const podcast = {
        desc,
        link,
        title,
        dateAdded: new Date().toISOString()
      };
      await database.collection("Podcast").add(podcast);
      return res.status(200).json(podcast);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ err: err.code });
    }
  });
};
