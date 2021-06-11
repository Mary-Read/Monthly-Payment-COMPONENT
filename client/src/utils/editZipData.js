import { getStoreZip } from './apiCalls.js';

const editZipData = (zip) => new Promise((resolve, reject) => {
  const stateData = {};
  getStoreZip(zip)
    .then((data) => {
      // eslint-disable-next-line prefer-destructuring
      stateData.store = data;
      stateData.zip = zip;
      // eslint-disable-next-line radix
      let id = parseInt((window.location.pathname).split('/').pop());
      if (!id) {
        id = 0;
      }
      stateData.productId = id;
      stateData.productId = id;
      resolve(stateData);
    })
    .catch((err) => {
      reject(err);
    });
});

export default editZipData;
