const Restaurant = require('../restaurant')
const User = require('../user')
const restaurantList = require('../../restaurant.json')
const restaurantSeedInfo = restaurantList.results
const bcrypt = require('bcryptjs')

const db = require('../../config/mongoose')


const SEED_USER = [
  {
    name: 'user1',
    email: 'user1@example.com',
    password: '12345678',
    restaurantsIndex: [0, 1, 2]
  },
  {
    name: 'user2',
    email: 'user2@example.com',
    password: '12345678',
    restaurantsIndex: [3, 4, 5]
  }
]

db.once('open', () => {
  return Promise.all(SEED_USER.map(seeduser => {
    return bcrypt.genSalt(10)
      .then(salt => bcrypt.hash(seeduser.password, salt))
      .then(hash => {
        return User.create({
          name: seeduser.name,
          email: seeduser.email,
          password: hash
        })})
      .then(user => {
        const userId = user._id
        const restaurant = []
        seeduser.restaurantsIndex.map(index => {
          restaurantSeedInfo[index].userId = userId
          restaurant.push(restaurantSeedInfo[index])
        })
        return Restaurant.insertMany(restaurant)
      })
  }))
    .then(() => {
      console.log('seeder is finish.')
      process.exit()
    })
    .catch(err => console.log(err))
})