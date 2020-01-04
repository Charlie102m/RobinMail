const app = require('express')(),
    ErrorResponse = require('../utils/errorResponse')

exports.validator = async (req, res, next) => {
    const { name, email, message, origin } = req.body

    if (!name) {
        return next(new ErrorResponse('You must include a name', 400))
    }
    if (!email) {
        return next(new ErrorResponse('You must include an email', 400))
    }
    if (!message) {
        return next(new ErrorResponse('You must include a message', 400))
    }
    if (!origin) {
        return next(new ErrorResponse('You must include an origin', 400))
    }
    next()
}