const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/:userId', userController.getUser);

router.put('/:userId', userController.updateUser);

router.delete('/:userId', userController.deleteUser);

router.post('/:userId/follow', userController.followUser);

router.post('/:userId/unfollow', userController.unfollowUser);

router.get('/:userId/followers', userController.getUserFollowers);

router.get('/:userId/followings', userController.getUserFollowings);

module.exports = router;
