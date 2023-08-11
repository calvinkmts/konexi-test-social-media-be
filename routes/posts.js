const express = require('express');
const router = express.Router();

const postController = require('../controllers/userController');

const isAuthorized = require('../middlewares/isAuthorized');

router.get('/', isAuthorized, postController.getPosts);

router.post('/', isAuthorized, postController.createPost);

router.get('/:postId', isAuthorized, postController.getPost);

router.delete('/:postId', isAuthorized, postController.deletePost);

router.get('/users/:userId/posts', isAuthorized, postController.getUserPosts);

router.get('/:postId/comments', isAuthorized, postController.getPostComments);

router.post('/:postId/comments', isAuthorized, postController.createPostComment);

router.delete('/:postId/comments/:commentId', isAuthorized, postController.deletePostComment);

router.post('/:postId/likes', isAuthorized, postController.likePost);

router.delete('/:postId/likes', isAuthorized, postController.unlikePost);

router.get('/:postId/likes', isAuthorized, postController.getPostLike);

module.exports = router;