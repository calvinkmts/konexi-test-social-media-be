const jwt = require('jsonwebtoken');

const generateAccessToken = (user) => {

    const payload = {
        name: user.name,
        id: user._id,
        email: user.email
    }

    return jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}

const generateTokenObject = (token) => {

    return {
        accessToken: token,
        tokenType: "Bearer",
        expiresIn: process.env.TOKEN_EXPIRES
    }
}

module.exports = {
    generateAccessToken,
    generateTokenObject,
}