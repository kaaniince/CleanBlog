const mongoose = require('mongoose'); //ODM as Object Data Modeling
const Schema = mongoose.Schema;

//connect to db
mongoose.connect('mongodb://localhost/cleanblog-test-db');

//create schema and model
const BlogSchema = new Schema({
  title: String,
  detail: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Blog = mongoose.model('blog', BlogSchema);

//create blog
/*Blog.create({
  title: 'My First Post About BMW',
  detail: 'Detail of my first post',
  dateCreated: new Date(),
});*/

//read blog

/*Blog.find({}).then((data) => {
  console.log(data);
});*/

//update blog
/*const id = '673e00623126518f400d8190';
Blog.findByIdAndUpdate(
  id,
  {
    title: 'My First Post About Mercedes',
  },
  { new: true } //return the updated data to the console
).then((data) => {
  console.log(data);
});*/

//delete blog
/*const id = '673e00623126518f400d8190';
Blog.findByIdAndDelete(id).then((data) => {
  console.log(data);
});*/
