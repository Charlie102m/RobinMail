const mongoose = require('mongoose'),
    ErrorResponse = require('../utils/errorResponse'),
    asyncWrapper = require("../utils/asyncWrapper.js"),
    nodemailer = require("nodemailer"),
    mailerCredentials = require('../config/mailerCredentials.js'),
    ApprovedSite = require('../models/ApprovedSite.js')

exports.sendInstructions = asyncWrapper(async (req, res, next) => {
    res.status(200).json({
        success: true,
        message: 'To send mail via this server, send a POST request to this url with the content specified in the data object of this response',
        data: {
            name: 'String - Name of sender',
            email: 'String - Email of sender',
            message: 'String - Senders message',
            origin: 'String - origin url'
        }
    })
})

exports.sendMail = asyncWrapper(async (req, res, next) => {

    const approvedSite = await ApprovedSite.findOne({ url: req.body.origin }).select('+email')

    if (!approvedSite) {
        return next(new ErrorResponse('You are not authorised to send mail via MailRobin. Register to our approved sites list to use this feature, or update the origin in your request body.', 401))
    }

    try {
        let transporter = await nodemailer.createTransport(mailerCredentials)

        let info = await transporter.sendMail({
            from: `RobinMail ${process.env.MAIL_USER}`,
            replyTo: req.body.email,
            to: approvedSite.email,
            subject: `${req.body.origin} | Contact Form Submission`,
            html: `<h1>${req.body.name}</h1>
                    <h3>${req.body.email}</h3>
                        <p>\"<em>${req.body.message}</em>\"</p>`
        })

        res.status(200).json({ success: true, data: req.body })

    } catch (error) {
        return next(new ErrorResponse(error.message, 404))
    }

})