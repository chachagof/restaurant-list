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
app.get('/restaurants/:Id', (req, res) => {
  const id = req.params.Id
  return Restaurant.findById(id)
    .lean()
    .then(restaurantDescription => { res.render('show', { restaurantDescription }) })
    .catch(error => console.log(error))
})
// search page
app.get('/search', (req, res) => {
  const keywords = req.query.keyword
  const keyword = keywords.trim().toLowerCase()
  if (keyword === '' || !keyword) {
    return res.redirect('/')
  }
  return Restaurant.find()
    .lean()
    .then(restaurants => {
      const restaurantFilter = restaurants.filter(data => {
        // 
        return data.name.toLowerCase().includes(keyword) || data.category.includes(keyword) || data.location.trim().includes(keyword)
      })
      return res.render('index', { restaurant: restaurantFilter })
    })
    .catch(error => console.log(error))
})
// create page
app.get('/restaurant/new', (req, res) => {
  res.render('create')
})
app.post('/createrRestaurant', (req, res) => {
  const newRestaurant = req.body
  return Restaurant.create(newRestaurant)
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// edit page
app.get('/restaurants/:id/edit', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then(restaurantEdit => res.render('edit', { restaurantEdit }))
    .catch(error => console.log(error))
})

app.post('/restaurants/:restaurantId/edit', (req, res) => {
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
app.post('/restaurants/:id/delete', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

app.listen(port, () => {
  console.log('Gogogooo')
})