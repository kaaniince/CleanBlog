const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
  //res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  const posts = await Post.find({}).sort('-dateCreated');
  res.render('index', {
    posts,
  });
};

exports.getPost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('post', {
    post,
  });
};

exports.createPost = async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
};

exports.updatePost = async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  post.title = req.body.title;
  post.detail = req.body.detail;
  await post.save();
  res.redirect(`/posts/${post._id}`);
};

exports.deletePost = async (req, res) => {
  await Post.findByIdAndDelete({ _id: req.params.id });
  res.redirect('/');
};
