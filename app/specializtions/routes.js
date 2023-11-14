const express = require('express')
const router = express.Router()
const {getSpecializtions} = require('./controllers')

router.get('/api/specializtions', getSpecializtions)


module.exports = router