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
        "/login"
      ],
      {
        target: "http://localhost:5000/project-x-ba483/us-central1/api"
      }
    )
  );
};