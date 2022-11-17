const express = require('express')
const router = express.Router()

const restaurantList = require('../../restaurant.json')
const restaurants = restaurantList.results
const Restaurant = require('../../models/restaurant')


// main page
router.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})

module.exports = router