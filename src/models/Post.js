const mongoose = require('mongoose')
const aws = require('aws-sdk')

const s3 = new aws.S3()

const PostSchema = new mongoose.Schema({
  name: String,
  size: Number,
  key: String,
  url: String,
})

PostSchema.pre('remove', function(){
  return s3.deleteObject({
    Bucket: 'effentiimage',
    key: this.key
  }).promise()

})



module.exports = mongoose.model("Post", PostSchema)
