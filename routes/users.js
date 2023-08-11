const express = require('express');
const router = express.Router();

const isAuthorized = require('../middlewares/isAuthorized');
const userController = require('../controllers/userController');

router.get('/:userId', isAuthorized, userController.getUser);

router.put('/:userId', isAuthorized, userController.updateUser);

router.delete('/:userId', isAuthorized, userController.deleteUser);

router.post('/:userId/follow', isAuthorized, userController.followUser);

router.post('/:userId/unfollow', isAuthorized, userController.unfollowUser);

router.get('/:userId/followers', isAuthorized, userController.getUserFollowers);

router.get('/:userId/followings', isAuthorized, userController.getUserFollowings);

module.exports = router;
