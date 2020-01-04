const express = require('express'),
    router = express.Router()

const { sendInstructions, sendMail } = require('../controllers/mailer.js')

router.route('/')
    .post(sendMail)
    .all(sendInstructions)

module.exports = router;