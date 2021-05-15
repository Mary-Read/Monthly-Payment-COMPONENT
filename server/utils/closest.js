const distanceCalc = require('./distance');

const storesFinder = ((location, storesData) => new Promise((resolve) => {
  const stores = storesData.slice();
  const storesOut = [];
  const { lat } = location;
  const { lng } = location;
  for (let i = 0; i < stores.length; i += 1) {
    // eslint-disable-next-line no-underscore-dangle
    storesOut.push({ ...stores[i] }._doc);
    const distance = distanceCalc(lat, lng,
      storesOut[i].coordinates.lat, storesOut[i].coordinates.lng);
    storesOut[i].distance = distance;
  }
  storesOut.sort((a, b) => a.distance - b.distance);
  resolve(storesOut.slice(0, 20));
}));

const storeFinder = ((location, storesData) => new Promise((resolve) => {
  const stores = storesData.slice();
  const storesOut = [];
  const { lat } = location;
  const { lng } = location;
  let closest = 0;
  let closestDistance = distanceCalc(lat, lng,
    stores[0].coordinates.lat, stores[0].coordinates.lng);
  // eslint-disable-next-line no-underscore-dangle
  storesOut.push({ ...stores[0] }._doc);
  storesOut[0].distance = closestDistance;
  for (let i = 1; i < stores.length; i += 1) {
    const store = stores[i];
    const distance = distanceCalc(lat, lng, store.coordinates.lat, store.coordinates.lng);
    // eslint-disable-next-line no-underscore-dangle
    storesOut.push({ ...stores[i] }._doc);
    storesOut[i].distance = closestDistance;
    if (distance < closestDistance) {
      closest = i;
      closestDistance = distance;
    }
  }
  resolve(storesOut[closest]);
}));

module.exports.storesFinder = storesFinder;
module.exports.storeFinder = storeFinder;
