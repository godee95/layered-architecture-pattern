// routes/posts.routes.js

const express = require('express');
const router = express.Router();

const PostsController = require('../controllers/posts.controller');
const postsController = new PostsController();

router.get('/', postsController.getPosts);
router.get('/:postId', postsController.getPost);
router.post('/', postsController.createPost);
router.put('/:postId', postsController.putPost);
router.delete('/:postId', postsController.deletePost);

module.exports = router;