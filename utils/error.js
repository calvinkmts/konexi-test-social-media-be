class BadRequestError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 400;
    }
}

class InternalServerError extends Error {
    constructor(message = "Internal Server Error") {
        super(message);
        this.statusCode = 500;
    }
}