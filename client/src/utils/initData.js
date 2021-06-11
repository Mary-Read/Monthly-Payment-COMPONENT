import { getStore, getZip } from './apiCalls.js';

const initData = () => new Promise((resolve) => {
  const stateData = {};
  const coords = { latitude: 38.8622374, longitude: -77.064630 };
  getStore(coords)
    .then((data) => {
      // eslint-disable-next-line prefer-destructuring
      stateData.store = data;
    });
  getZip(coords)
    .then((data) => {
      stateData.zip = data.zipcode;
    })
    .then(() => {
      // eslint-disable-next-line radix
      let id = parseInt((window.location.pathname).split('/').pop());
      if (!id) {
        id = 0;
      }
      stateData.productId = id;
    })
    .then(() => {
      resolve(stateData);
    });
});

export default initData;
