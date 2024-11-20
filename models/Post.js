const mongoose = require('mongoose'); //ODM as Object Data Modeling
const Schema = mongoose.Schema;

//create schema and model
const PostSchema = new Schema({
  title: String,
  detail: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model('post', PostSchema);

module.exports = Post;
