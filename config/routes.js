const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// عرض جميع المنشورات
router.get('/', (req, res) => {
  Post.find().sort({ createdAt: -1 }).then(posts => {
    res.render('home', { posts });
  }).catch(err => console.log(err));
});

// إنشاء منشور جديد
router.post('/new', (req, res) => {
  const { content } = req.body;

  if (content.length < 25) {
    return res.send('Message must be at least 25 characters long.');
  }

  const newPost = new Post({ content });
  newPost.save()
    .then(() => res.redirect('/'))
    .catch(err => res.status(500).send(err));
});

// إضافة تعليق إلى منشور
router.post('/comment/:postId', (req, res) => {
  const { content } = req.body;
  const postId = req.params.postId;

  if (content.length < 25) {
    return res.send('Comment must be at least 25 characters long.');
  }

  Post.findById(postId).then(post => {
    post.comments.push({ content });
    return post.save();
  }).then(() => {
    res.redirect('/');
  }).catch(err => res.status(500).send(err));
});

module.exports = router;

// const express= require('express')
// const route=express.Router();
// const usercontrole=require("../controller/usercontrole");

//   route.post('/submit',usercontrole.submit)
//   route.get('/',usercontrole.home)
 

// module.exports=route;