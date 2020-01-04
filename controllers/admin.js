const mongoose = require('mongoose'),
    ErrorResponse = require('../utils/errorResponse'),
    asyncWrapper = require('../utils/asyncWrapper.js'),
    ApprovedSite = require('../models/ApprovedSite.js')

exports.getAllSites = asyncWrapper(async (req, res, next) => {
    const sites = await ApprovedSite.find()
    res.status(200).json({ success: true, data: sites })
})

exports.addNewSite = asyncWrapper(async (req, res, next) => {
    const site = await ApprovedSite.create(req.body)
    res.status(200).json({ success: true, data: site })
})