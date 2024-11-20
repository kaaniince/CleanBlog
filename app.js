const express = require('express');
const mongoose = require('mongoose'); //ODM as Object Data Modeling

const ejs = require('ejs');
const path = require('path');
const Post = require('./models/Post');

const app = express();

//connect to db
mongoose.connect('mongodb://localhost/cleanblog-test-db');

//Template Engine
app.set('view engine', 'ejs');

//Middleware
app.use(express.static('public'));

//the received response is sent as completed
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.get('/', async (req, res) => {
  //res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  const posts = await Post.find({});
  res.render('index', {
    posts,
  });
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/add_post', (req, res) => {
  res.render('add_post');
});

app.get('/post', (req, res) => {
  res.render('post');
});

app.post('/posts', async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
