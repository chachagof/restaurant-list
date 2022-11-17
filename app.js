// require packages used in the project
const express = require('express')
const methodOverride = require('method-override')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const routes = require('./routes/index')

require('./config/mongoose')

// setting template engine
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'), express.urlencoded({ extended: true }), methodOverride('_method'), routes)

app.listen(port, () => {
  console.log('Gogogooo')
})