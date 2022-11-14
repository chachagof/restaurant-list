const mongoose = require('mongoose')
const restaurant = require('../restaurant')
const restaurantList = require('../../restaurant.json')
const restaurantSeedInfo = restaurantList.results

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
mongoose.connect(process.env.restaurant)

const db = mongoose.connection

db.on('error', () => {
  console.log('error')
})

db.once('open', () => {
  restaurantSeedInfo.forEach(element => {
    restaurant.create({
      id: `${element.id}`,
      name: `${element.name}`,
      name_en: `${element.name_en}`,
      category: `${element.category}`,
      image: `${element.image}`,
      location: `${element.location}`,
      phone: `${element.phone}`,
      google_map: `${element.google_map}`,
      rating: `${element.rating}`,
      description: `${element.description}`
    })
  })
  console.log('connection is working')
})