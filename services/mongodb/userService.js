const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const { generateTokenObject, generateAccessToken } = require("../../utils/token");

const registerUser = async ({ name, email, password}) => {
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({
        name: name,
        email: email,
        password: hashedPassword
    });

    const savedUser = await user.save();
    const token = generateAccessToken(savedUser);

    return {
        user: {
            name: savedUser.name,
            email: savedUser.email,
            _id: savedUser._id,
        },
        token: generateTokenObject(token)
    }
}

const loginUser = async ({ email, password }) => {

    console.log("userService loginUser");

    const user = await User.findOne({ email: email }).select('+password');

    if (!user) {
        throw new BadRequestError(`User with email ${email} doesn't exists`);
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (isPasswordMatch) {
        const token = generateAccessToken(user);

        return {
            user: {
                name: user.name,
                email: user.email,
                _id: user._id
            },
            token: generateTokenObject(token)
        }
    }

    throw new BadRequestError(`Invalid email or password`);
}

module.exports = {
    registerUser,
    loginUser
}