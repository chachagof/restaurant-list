const express = require('express')
const router = express.Router()

const restaurantList = require('../../restaurant.json')
const restaurants = restaurantList.results
const Restaurant = require('../../models/restaurant')

// search page
router.get('/', (req, res) => {
  const keywords = req.query.keyword
  const keyword = keywords.trim().toLowerCase()
  if (keyword === '' || !keyword) {
    return res.redirect('/')
  }
  return Restaurant.find()
    .lean()
    .then(restaurants => {
      const restaurantFilter = restaurants.filter(data => {
        return data.name.toLowerCase().includes(keyword) || data.category.includes(keyword) || data.location.trim().includes(keyword)
      })
      return res.render('index', { restaurants: restaurantFilter, keyword })
    })
    .catch(error => console.log(error))
})

module.exports = router