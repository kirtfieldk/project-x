const auth = require("../Helper/auth");
const { database } = require("../Config/admin");
module.exports = app => {
  app.get("podcast", auth, (req, res) => {});
};
