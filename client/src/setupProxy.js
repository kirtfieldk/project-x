const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy(
      [
        "/fetchimg",
        "/blogpost",
        "/blogpost/:id",
        "/blogpost/delete/:id",
        "/outsourcelinks",
        "/outsourcelinks/:id",
        "/podcast",
        "/podcast/:id",
        "/newsletter",
        "/newsletter/:id",
        "/login"
      ],
      {
        target: "http://localhost:5001/project-x-ba483/us-central1/api"
      }
    )
  );
};
