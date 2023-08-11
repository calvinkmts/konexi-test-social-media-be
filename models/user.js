const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    followers: [{
        type: Schema.Types.ObjectId,
        reg: "User"
    }],
    following: [{
        type: Schema.Types.ObjectId,
        reg: "User"
    }],
    likedPosts: [{
        type: Schema.Types.ObjectId,
        reg: "Post"
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        reg: "Comment"
    }]
});

module.exports = mongoose.model('User', userSchema);