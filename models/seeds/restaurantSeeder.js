const restaurant = require('../restaurant')
const restaurantList = require('../../restaurant.json')
const restaurantSeedInfo = restaurantList.results

const db = require('../../config/mongoose')

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