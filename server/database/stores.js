const Stores = require('./index');
const googleMaps = require('../api/googleMaps');
const closest = require('../utils/closest');

const getStores = () => new Promise((resolve, reject) => {
  const query = Stores.find({});
  query.exec().then((results) => {
    resolve(results);
  })
    .catch((err) => {
      reject(err);
    });
});

const getStore = (storeId) => new Promise((resolve, reject) => {
  const query = Stores.findOne({ storeId });
  query.exec().then((results) => {
    resolve(results);
  })
    .catch((err) => {
      reject(err);
    });
});

const getProducts = (storeId) => new Promise((resolve, reject) => {
  const query = Stores.find({ storeId }, 'products');
  query.exec().then((results) => {
    resolve(results);
  })
    .catch((err) => {
      reject(err);
    });
});

const getProduct = (storeId, productId) => new Promise((resolve, reject) => {
  const query = Stores.findOne({ storeId, products: { $elemMatch: { id: productId } } }, { 'products.$': 1 });
  query.exec().then((results) => {
    resolve(results.products[0]);
  })
    .catch((err) => {
      reject(err);
    });
});

const closestStores = (zipcode) => new Promise((resolve, reject) => {
  googleMaps.getLocation(zipcode)
    .then((data) => {
      getStores()
        .then((stores) => {
          closest.storesFinder(data, stores)
            .then((storesData) => resolve(storesData));
        })
        .catch((err) => {
          reject(err);
        });
    })
    .catch((err) => {
      reject(err);
    });
});

const closestStore = (zipcode) => new Promise((resolve, reject) => {
  googleMaps.getLocation(zipcode)
    .then((data) => {
      getStores()
        .then((stores) => {
          closest.storeFinder(data, stores)
            .then((store) => resolve(store));
        })
        .catch((err) => {
          reject(err);
        });
    })
    .catch((err) => {
      reject(err);
    });
});

const closestStoresGeolocation = (geoLocation) => new Promise((resolve, reject) => {
  getStores()
    .then((stores) => {
      closest.storesFinder(geoLocation, stores)
        .then((storesData) => resolve(storesData));
    })
    .catch((err) => {
      reject(err);
    });
});

const closestStoreGeolocation = (geoLocation) => new Promise((resolve, reject) => {
  getStores()
    .then((stores) => {
      closest.storeFinder(geoLocation, stores)
        .then((storesData) => resolve(storesData));
    })
    .catch((err) => {
      reject(err);
    });
});

module.exports.getStores = getStores;
module.exports.getStore = getStore;
module.exports.getProducts = getProducts;
module.exports.getProduct = getProduct;
module.exports.closestStores = closestStores;
module.exports.closestStore = closestStore;
module.exports.closestStoresGeolocation = closestStoresGeolocation;
module.exports.closestStoreGeolocation = closestStoreGeolocation;
