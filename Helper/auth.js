const { admin, database } = require("../Config/admin");

module.exports = async (req, res, next) => {
  let idToken;
  if (
    req.headers.autherization &&
    req.headers.autherization.startsWith("Bearer ")
  ) {
    idToken = req.headers.autherization.split("Bearer ")[1];
  } else {
    return res.status(403).json({ error: "Unautherized Posting" });
  }
  try {
    req.user = await admin.auth().verifyIdToken(idToken);
    const data = await database
      .collection("User")
      .where("userId", "==", req.user.uid)
      .limit(1)
      .get();
    req.user.handle = data.docs[0].data().handle;
    return next();
  } catch (err) {
    console.log(err);
    return res.status(403).json({ err });
  }
};
