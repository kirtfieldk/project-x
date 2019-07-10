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
      let imageToBeUploaded = {};
      let imageFileName;
      const busboy = new BusBoy({ headers: req.headers });
      //    Above is init vars
      busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
        // console.log(fieldname, file, filename, encoding, mimetype);
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

        const filepath = path.join(os.tmpDir(), imageFileName);
        console.log(filepath);
        imageToBeUploaded = { filepath, mimetype };

        file.pipe(fs.createWriteStream(filepath));
      });

      console.log(imageFileName);
      //   /////////////////////////////////////////////////////////////////
      busboy.on("finish", async () => {
        await admin
          .storage()
          .bucket()
          .upload(imageToBeUploaded.filepath, {
            resumable: false,
            metadata: {
              metadata: {
                contentType: imageToBeUploaded.mimetype
              }
            }
          });
        const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${
          keys.storageBucket
        }/o/${imageFileName}?alt=media`;
        const addImg = { imageUrl };
        await database.collection("Images").add(addImg);
      });
      busboy.end(req.rawBody);
      return res.json({ message: "image uploaded successfully" });
    } catch (err) {
      console.log(err);
    }
  });
};
