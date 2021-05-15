const mongoose = require('mongoose');

const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.connect('mongodb://localhost/Shipping', config);

const { Schema } = mongoose;

const storeSchema = new Schema({
  storeId: Number,
  address: String,
  storePhone: String,
  zip: String,
  coordinates: { lat: Number, lng: Number },
  storeHrs: Object,
  products: [{ id: Number, stock: Number, location: String }],
});

const Stores = mongoose.model('Stores', storeSchema);

module.exports = Stores;
