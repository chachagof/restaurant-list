const express = require('express')
const router = express.Router()

const restaurantList = require('../../restaurant.json')
const restaurants = restaurantList.results
const Restaurant = require('../../models/restaurant')


// main page
router.get('/', (req, res) => {
  const userId = req.user._id
  Restaurant.find({ userId })
    .lean()
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})

router.get('/:sortWay', (req, res) => {
  const sortWay = req.params.sortWay
  const sortWays = {
    AtoZ: { name: 'asc' },
    ZtoA: { name: 'desc' },
    category: { category: 'asc' },
    location: { location: 'asc' }
  }
  const userId = req.user._id
  console.log(typeof (sortWay))
  console.log(sortWay, sortWays[sortWay])
  Restaurant.find({ userId })
    .lean()
    .sort(sortWays[sortWay])
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})

module.exports = router