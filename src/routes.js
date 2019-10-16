const routes = require('express').Router()
const multer = require('multer')
const multerConfig = require('./config/multer')
const Post = require('./models/Post')

routes.get("/", (req, res) => {
  return res.json({ hello:'Hello there !'})
})

routes.post("/posts", multer(multerConfig).single('file'), async (req, res) => {
  console.log(req.file)
  //desestruturando
  try {
    const { originalname: name, size, filename: key } = req.file

    const post = await Post.create({
      name: 'teste',
      size: 2,
      key: 'teset',
      url: ''
    })
  } catch (error) {
    console.log(error)
  }

  return res.json(post)
})


module.exports = routes
