// require packages used in the project
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const restaurantList = require('./restaurant.json')
const restaurants = restaurantList.results
const Restaurant = require('./models/restaurant')

// connect mongoose
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
mongoose.connect(process.env.restaurant)

const db = mongoose.connection

db.on('error', () => {
  console.log('error')
})

db.once('open', () => {
  console.log('connection is work')
})

// setting template engine
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'), express.urlencoded({ extended: true }))

// routes setting
// main page
app.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .then(restaurant => res.render('index', { restaurant }))
    .catch(error => console.log(error))
})
// detail page
app.get('/restaurants/:restaurantId', (req, res) => {
  const restaurantId = req.params.restaurantId
  const restaurantDescription = restaurants.find(item => {
    return item.id.toString() === restaurantId
  })
  res.render('show', { restaurantDescription })
})
// search page
app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  const findRestaurant = restaurants.filter(item => {
    return item.name.toLowerCase().includes(keyword.toLowerCase())
  })
  res.render('index', { restaurants: findRestaurant, keyword })
})
// create page
app.get('/restaurant/new', (req, res) => {
  res.render('create')
})
app.post('/createrRestaurant', (req, res) => {
  const newRestaurant = req.body
  Restaurant.create(newRestaurant)
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})



app.listen(port, () => {
  console.log('Gogogooo')
})