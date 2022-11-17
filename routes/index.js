const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const restaurantList = require('./modules/restaurant_list')
const search = require('./modules/search')

router.use('/', home)
router.use('/restaurants',restaurantList)
router.use('/search', search)

module.exports = router