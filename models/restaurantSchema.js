const mongoose = require('mongoose')
const Schema = mongoose.Schema
const newRestaurant = new Schema ({
  id: {
    type: string,
    required: true
  },
  name:{
    type:string,
    required:true
  },
  name_en: {
    type: string
  },
  category: {
    type: string,
    required: true
  },
  image: {
    type: string,
    required: true
  },
  location: {
    type: string,
    required: true
  },
  phone: {
    type: string,
    required: true
  },
  google_map: {
    type: string,
    required: true
  },
  rating: {
    type: string,
    required: true
  },
  description: {
    type: string,
    required: true
  }
})

module.export = mongoose.models('newRestaurant', newRestaurant)