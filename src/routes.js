const routes = require("express").Router();
const multer = require("multer");
const multerConfig = require("./config/multer");
const Post = require("./models/Post");

routes.get("/", (req, res) => {
  return res.json({ hello: "Hello there !" });
});

routes.post("/posts", multer(multerConfig).single("file"), async (req, res) => {
  console.log("logando a requisicao");
  console.log(req);
  console.log("logando a requisicao - fim");

  console.log("logando body da requisicao");
  console.log(req.body);
  console.log("logando body da requisicao - fim");

  //desestruturando
  try {
    const { originalname: name, size, key, location: url = "" } = req.file;

    const post = await Post.create({
      name,
      size,
      key,
      url
    });
    //console.log(post);
    return res.json(post);
  } catch (error) {
    // console.log(error);
  }
});

routes.get("/posts/:id", async (req, res) => {
  const posts = await Post.findById(req.params.id);

  return res.json(posts);
});

module.exports = routes;
