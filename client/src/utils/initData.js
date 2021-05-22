import { getStores, getZip } from './apiCalls.js';

const initData = () => new Promise((resolve, reject) => {
  const stateData = {};
  getStores()
    .then((data) => {
      // eslint-disable-next-line prefer-destructuring
      stateData.store = data[0];
      stateData.stores = data;
    })
    .then(() => {
      getZip()
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
        .then(() => resolve(stateData));
    })
    .catch((err) => {
      reject(err);
    });
});

export default initData;
