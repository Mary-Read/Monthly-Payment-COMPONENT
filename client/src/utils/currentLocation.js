import { getStore, getZip, getPosition } from './apiCalls.js';

const currentLocationData = () => new Promise((resolve) => {
  const stateData = {};
  getPosition()
    .then((coords) => {
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
});

export default currentLocationData;
