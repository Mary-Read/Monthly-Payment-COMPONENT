const faker = require('faker');
const Stores = require('../index');
let addresses = require('../rrad/addresses-us-1000.json');

const createStores = () => {
  const storesData = [];
  const aisles = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J'];
  addresses = addresses.addresses;
  for (let i = 0; i < 100; i += 1) {
    const address = addresses.splice(Math.floor(Math.random() * addresses.length), 1)[0];
    const obj = {};
    obj.storeId = i;
    obj.address = `${address.address1}, ${address.city}, ${address.state} ${address.postalCode}`;
    obj.storePhone = faker.phone.phoneNumber();
    obj.zip = address.postalCode;
    obj.coordinates = address.coordinates;
    obj.storeHrs = {
      Mon: '7:00 am - 10:00 pm',
      Tue: '7:00 am - 10:00 pm',
      Wed: '7:00 am - 10:00 pm',
      Thu: '7:00 am - 10:00 pm',
      Fri: '7:00 am - 10:00 pm',
      Sat: '7:00 am - 10:00 pm',
      Sun: '7:00 am - 10:00 pm',
    };
    obj.products = [];
    for (let j = 0; j < 100; j += 1) {
      const product = {};
      product.id = j;
      product.stock = Math.floor(Math.random() * 100);
      product.location = `Aisle ${aisles[Math.floor(Math.random() * aisles.length)]}${Math.floor(Math.random() * 25)}`;
      obj.products.push(product);
    }
    storesData.push(obj);
  }
  Stores.insertMany(storesData)
    .then(() => {
      // eslint-disable-next-line no-console
      console.log('Store Data Created');
      process.exit(0);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
      process.exit(1);
    });
};

Stores.deleteMany({})
  .then(() => createStores());
