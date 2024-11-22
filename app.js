const express = require('express');
const mongoose = require('mongoose'); //ODM as Object Data Modeling
require('dotenv').config();

const ejs = require('ejs');
const path = require('path');
const methodOverride = require('method-override');
const Post = require('./models/Post');

const postController = require('./controllers/postControllers');
const pageController = require('./controllers/pageControllers');
const app = express();

//connect to db
mongoose
  .connect(
    `mongodb+srv://iincekaan:${process.env.MONGODB_PASSWORD}@cluster0.ardhh.mongodb.net/cleanblog-db?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    console.log('Connected to DB');
  })
  .catch((err) => {
    console.log('Connection failed', err);
  });

//Template Engine
app.set('view engine', 'ejs');

//Middleware
app.use(express.static('public'));
app.use(methodOverride('_method', { methods: ['POST', 'GET'] }));

//the received response is sent as completed
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.get('/', postController.getAllPosts);
//sending the post to post.ejs
app.get('/posts/:id', postController.getPost);
//create post
app.post('/posts', postController.createPost);
//update post
app.put('/posts/:id', postController.updatePost);
//delete post
app.delete('/posts/:id', postController.deletePost);

app.get('/about', pageController.getAboutPage);
app.get('/add_post', pageController.getAddPostPage);
app.get('/post', pageController.getPostPage);
//edit post
app.get('/posts/edit/:id', pageController.getEditPostPage);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
