const express = require('express')
const router = express.Router()

const restaurantList = require('../../restaurant.json')
const restaurants = restaurantList.results
const Restaurant = require('../../models/restaurant')

// sort route
router.get('/:sortWay', (req, res) => {
  const sortWay = req.params.sortWay
  const sortWays = [
    { name: 'asc' },
    { name: 'desc' },
    { category: 'asc' },
    { location: 'asc' }
  ]
  Restaurant.find()
    .lean()
    .sort(sortWays[Number(sortWay)])
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})


module.exports = router