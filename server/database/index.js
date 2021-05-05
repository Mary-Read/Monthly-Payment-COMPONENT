const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Shipping');

let Schema = mongoose.Schema;

const storeSchema = new Schema({
  storeId: Number,
  address: String,
  storePhone: String,
  zip: String,
  storeHrs: [{day: String, hrs: String}],
  products: [{productId: Number, stock: Number, location: String}],
})

var Stores = mongoose.model('Stores', storeSchema)

module.exports = Stores