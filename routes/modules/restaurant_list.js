const express = require('express')
const router = express.Router()

const restaurantList = require('../../restaurant.json')
const restaurants = restaurantList.results
const Restaurant = require('../../models/restaurant')

// create page
router.get('/new', (req, res) => {
  res.render('create')
})
router.post('/create', (req, res) => {
  const newRestaurant = req.body
  return Restaurant.create(newRestaurant)
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// detail page
router.get('/:Id', (req, res) => {
  const id = req.params.Id
  return Restaurant.findById(id)
    .lean()
    .then(restaurantDescription => { res.render('show', { restaurantDescription }) })
    .catch(error => console.log(error))
})

// edit page
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then(restaurantEdit => res.render('edit', { restaurantEdit }))
    .catch(error => console.log(error))
})

router.put('/:restaurantId', (req, res) => {
  const id = req.params.restaurantId
  const body = req.body
  return Restaurant.findById(id)
    .then(restaurantEdit => {
      restaurantEdit.name = body.name
      restaurantEdit.name_en = body.name_en
      restaurantEdit.category = body.category
      restaurantEdit.image = body.image
      restaurantEdit.location = body.location
      restaurantEdit.phone = body.phone
      restaurantEdit.google_map = body.google_map
      restaurantEdit.rating = body.rating
      restaurantEdit.description = body.description
      return restaurantEdit.save()
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// delete page 
router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router