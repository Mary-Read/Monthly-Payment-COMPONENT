import $ from 'jquery';

const getPosition = () => new Promise((res) => {
  const failedGeolocation = (error) => {
    // eslint-disable-next-line no-console
    console.log(error);
    res({ coords: { latitude: 38.8622374, longitude: -77.064630 } });
  };
  navigator.geolocation.getCurrentPosition(res, failedGeolocation);
});

const getStores = () => new Promise((resolve, reject) => {
  getPosition()
    .then((position) => {
      const urlprefix = window.location.origin;
      $.ajax({
        type: 'POST',
        url: `${urlprefix}/shipping/closestStores`,
        contentType: 'application/json',
        data: JSON.stringify({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }),
        success: (data) => {
          resolve(data);
        },
        error: (error) => {
          reject(error);
        },
      });
    })
    .catch((err) => {
      reject(err);
    });
});

const getStoresZip = (zip) => new Promise((resolve, reject) => {
  const urlprefix = window.location.origin;
  $.ajax({
    type: 'GET',
    url: `${urlprefix}/shipping/closestStores/${zip}`,
    success: (data) => {
      resolve(data);
    },
    error: (error) => {
      reject(error);
    },
  });
});

const getZip = () => new Promise((resolve, reject) => {
  getPosition()
    .then((position) => {
      const urlprefix = window.location.origin;
      $.ajax({
        type: 'POST',
        url: `${urlprefix}/shipping/zipcode`,
        contentType: 'application/json',
        data: JSON.stringify({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }),
        success: (data) => {
          resolve(data);
        },
        error: (error) => {
          reject(error);
        },
      });
    })
    .catch((err) => {
      reject(err);
    });
});

export {
  getStores,
  getStoresZip,
  getZip,
};
