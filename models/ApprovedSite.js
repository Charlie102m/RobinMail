const mongoose = require('mongoose')

const ApprovedSiteSchema = new mongoose.Schema({
    url: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true
    },
    email: {
        type: String,
        match: [
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please add a valid email'
        ],
        required: [true, 'Please add an email'],
        select: false
    }
})

module.exports = mongoose.model('ApprovedSite', ApprovedSiteSchema)