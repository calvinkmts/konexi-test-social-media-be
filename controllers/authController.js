const userService = require('../services/mongodb/userService');

const { sendResponse, sendError } = require('../utils/response');

exports.register = async (req, res, next) => {

    const { body } = req;

    try {
        const result = await userService.registerUser({
            name: body.name,
            email: body.email,
            password: body.password
        });
        sendResponse(res, 201, result, "OK");
    } catch (err) {
        sendError(res, 400, err);
    }
};

exports.login = async (req, res, next) => {
    
    console.log("POST Auth Login");

    const { body } = req;

    try {
        const result = await userService.loginUser({
            email: body.email,
            password: body.password
        });
        sendResponse(res, 200, result, "OK");
    } catch (err) {
        sendError(res, 400, err.message);
    }


};