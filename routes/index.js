const express = require('express')
const router = express.Router()
const { authenticator } = require('../middleware/auth')

const home = require('./modules/home')
const restaurantList = require('./modules/restaurant_list')
const search = require('./modules/search')
const user = require('./modules/user')

router.use('/restaurants', authenticator, restaurantList)
router.use('/search', authenticator, search)
router.use('/users', user)
router.use('/', authenticator, home)

module.exports = router