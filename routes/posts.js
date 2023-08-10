var express = require('express');
var router = express.Router();

var postController = require('../controllers/userController');

router.get('/', postController.getPosts);

router.post('/', postController.createPost);

router.get('/:postId', postController.getPost);

router.delete('/:postId', postController.deletePost);

router.get('/users/:userId/posts', postController.getUserPosts);

router.get('/:postId/comments', postController.getPostComments);

router.post('/:postId/comments', postController.createPostComment);

router.delete('/:postId/comments/:commentId', postController.deletePostComment);

router.post('/:postId/likes', postController.likePost);

router.delete('/:postId/likes', postController.unlikePost);

router.get('/:postId/likes', postController.getPostLike);

module.exports = router;