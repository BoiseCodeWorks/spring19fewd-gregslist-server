let mongoose = require('mongoose')
let Schema = mongoose.Schema

let schema = new Schema({
  make: {type: String, required: true},
  model: {type: String, required: true},
  created: { type: Date, required: true, default: Date.now()}

//continue filling out
})

module.exports = mongoose.model("Car", schema)