 const Post= require('../models/blog'); 

exports.home =  (req, res) => {
    Post.find().sort({ createdAt: -1 }).then(posts => {

      res.render('home', { posts });
    }).catch(err => console.log(err));
  };


  exports.submit=(req, res) => {
  const { content } = req.body;

  if (content.length < 25) {
    return res.send('Message must be at least 25 characters long.');
  }

  const newPost = new Post({ content });
  newPost.save()
    .then(() => res.redirect('/'))
    .catch(err => res.status(500).send(err));
};


exports.commit= (req, res) => {
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
    };