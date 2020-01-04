const express = require('express'),
    router = express.Router(),
    { validator } = require('../middleware/validator.js')

const { sendInstructions, sendMail } = require('../controllers/mailer.js')

router.route('/')
    .post(validator, sendMail)
    .all(sendInstructions)

module.exports = router;