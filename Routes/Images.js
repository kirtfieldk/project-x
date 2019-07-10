const { admin, database } = require("../Config/admin");
const keys = require("../Config/keys");
const isEmpty = require("../Helper/isEmpty");

const auth = require("../Helper/auth");
const path = require("path");
const os = require("os");
const fs = require("fs");
const BusBoy = require("busboy");
module.exports = app => {
  //   /////////////////////////////////////////////////////////

  app.post("/uploadimg", async (req, res) => {
    try {
      const busboy = new BusBoy({ headers: req.headers });

      let imageToBeUploaded = {};
      let imageFileName;
      busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
        console.log(fieldname, file, filename, encoding, mimetype);
        if (mimetype !== "image/jpeg" && mimetype !== "image/png") {
          return res.status(400).json({ error: "Wrong file type submitted" });
        }
        // my.image.png => ['my', 'image', 'png']
        const imageExtension = filename.split(".")[
          filename.split(".").length - 1
        ];
        // 32756238461724837.png
        imageFileName = `${Math.round(
          Math.random() * 1000000000000
        ).toString()}.${imageExtension}`;
        const filepath = path.join(os.tmpdir(), imageFileName);
        imageToBeUploaded = { filepath, mimetype };
        file.pipe(fs.createWriteStream(filepath));
      });
      busboy.on("finish", () => {
        admin
          .storage()
          .bucket()
          .upload(imageToBeUploaded.filepath, {
            resumable: false,
            metadata: {
              metadata: {
                contentType: imageToBeUploaded.mimetype
              }
            }
          })
          .then(() => {
            const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${
              keys.storageBucket
            }/o/${imageFileName}?alt=media`;
            const addImg = { imageUrl };
            return database.collection("Images").add(addImg);
          })
          .then(() => {
            return res.json({ message: "image uploaded successfully" });
          })
          .catch(err => {
            console.error(err);
            return res.status(500).json({ error: "something went wrong" });
          });
      });
      busboy.end(req.rawBody);
    } catch (err) {
      console.log(err);
    }
  });
};
