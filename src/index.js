require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
//'mongodb://user:password@mongodb:27017/nanowire'

mongoose.connect(process.env.MONGO_URL,{
  useNewUrlParser: true

})
//app.use(express.json)
app.use(cors())
app.use(express.urlencoded({ extended:true }))
app.use(morgan('dev'))

app.use(require('./routes.js'))
//app.get('/', (req, res) => res.send('Hello World!'))

app.listen(process.env.PORT || 3000)
