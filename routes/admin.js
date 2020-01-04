const express = require('express'),
    router = express.Router()

const { getAllSites, addNewSite } = require('../controllers/admin.js')

router.route('/')
    .get(getAllSites)
    .post(addNewSite)

module.exports = router;