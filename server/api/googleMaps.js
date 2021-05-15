const googleMaps = require('@google/maps');
const GOOGLE_KEY = require('../configs/googleMaps');

const geocoder = googleMaps.createClient({ key: GOOGLE_KEY, Promise });

const getLocation = (zipcode) => new Promise((resolve, reject) => {
  geocoder.geocode({ address: zipcode })
    .asPromise()
    .then((data) => {
      resolve(data.json.results[0].geometry.location);
    })
    .catch((err) => {
      reject(err);
    });
});

module.exports.getLocation = getLocation;
