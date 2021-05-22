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

const getZip = (latlng) => new Promise((resolve, reject) => {
  geocoder.reverseGeocode({ latlng })
    .asPromise()
    .then((data) => {
      const components = data.json.results[0].address_components;
      for (let i = components.length - 1; i >= 0; i -= 1) {
        if (components[i].types.includes('postal_code')) {
          resolve({ zipcode: components[i].long_name });
        }
      }
      resolve({ address: data.json.results[0].formatted_address });
    })
    .catch((err) => {
      reject(err);
    });
});

module.exports.getLocation = getLocation;
module.exports.getZip = getZip;
