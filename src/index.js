const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()
//'mongodb://user:password@mongodb:27017/nanowire'
mongoose.connect('mongodb://localhost:27017/upload',{
  useNewUrlParser: true

})
//app.use(express.json)
app.use(express.urlencoded({ extended:true }))
app.use(morgan('dev'))

app.use(require('./routes.js'))
//app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000)
