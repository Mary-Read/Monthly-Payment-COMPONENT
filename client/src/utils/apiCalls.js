import $ from 'jquery';

const getPosition = () => new Promise((res, rej) => {
  navigator.geolocation.getCurrentPosition(res, rej);
});

const getStores = () => new Promise((resolve, reject) => {
  getPosition()
    .then((position) => {
      $.ajax({
        type: 'POST',
        url: 'http://localhost:4000/shipping/closestStores',
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

const getZip = () => new Promise((resolve, reject) => {
  getPosition()
    .then((position) => {
      $.ajax({
        type: 'POST',
        url: 'http://localhost:4000/shipping/zipcode',
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
  getZip,
};
