const getStatusType = (status) => {
    return String(status).startsWith("2") ? "success" : "error";
}

const sendResponse = (res, status, data, message) => {
    res.status(status).json({
        status: getStatusType(status),
        data: data,
        message: message
    });
};

const sendError = (res, status, message) => {
    res.status(status).json({
        status: "error",
        message: message
    });
};

module.exports = {
    sendResponse,
    sendError
};