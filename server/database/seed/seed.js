const faker = require('faker')
var Stores = require('../index')

let createStores = () => {
  let storesData = []
  let addresses = require('./rrad/addresses-us-1000.json').addresses
  let aisles = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J']
  for (let i = 0; i < 100; i++) {
    let address = addresses.splice(Math.floor(Math.random() * addresses.length), 1)[0]
    let obj = {}
    obj.storeId = i;
    obj.address = `${address.address1}, ${address.city}, ${address.state} ${address.postalCode}`;
    obj.storePhone = faker.phone.phoneNumber();
    obj.zip = address.postalCode;
    obj.storeHrs = [{day: 'Mon', hrs: '7:00 am - 10:00 pm'}, {day: 'Tue', hrs: '7:00 am - 10:00 pm'}, 
                    {day: 'Wed', hrs: '7:00 am - 10:00 pm'}, {day: 'Thu', hrs: '7:00 am - 10:00 pm'},
                    {day: 'Fri', hrs: '7:00 am - 10:00 pm'}, {day: 'Sat', hrs: '7:00 am - 10:00 pm'},
                    {day: 'Sun', hrs: '7:00 am - 10:00 pm'}];
    obj.products = []
    for(let j = 0; j < 100; j++) {
      let product = {};
      product.id = j;
      product.stock = Math.floor(Math.random() * 100)
      product.location = `Aisle ${aisles[Math.floor(Math.random() * aisles.length)]}${Math.floor(Math.random() * 25)}`
      obj.products.push(product)
    }
    storesData.push(obj)
  }
  Stores.insertMany(storesData)
    .then(() => {
      return "Successful Creation of Data"
    })
    .catch((err) => {
      return err
    })
}

createStores() //?

