import $ from 'jquery';

const getPosition = () => new Promise((res) => {
  const failedGeolocation = (error) => {
    // eslint-disable-next-line no-console
    console.log(error);
    const coords = { latitude: 38.8622374, longitude: -77.064630 };
    res(coords);
  };
  const successGeolocation = (data) => {
    const { coords } = data;
    res(coords);
  };
  navigator.geolocation.getCurrentPosition(successGeolocation, failedGeolocation);
});

const getStore = (coords) => new Promise((resolve, reject) => {
  const urlprefix = (window.location.hostname === 'localhost') ? 'http://localhost' : 'https://ec2-18-116-227-34.us-east-2.compute.amazonaws.com';
  $.ajax({
    type: 'POST',
    url: `${urlprefix}:4000/shipping/closestStore`,
    contentType: 'application/json',
    data: JSON.stringify({
      lat: coords.latitude,
      lng: coords.longitude,
    }),
    success: (data) => {
      resolve(data);
    },
    error: (error) => {
      reject(error);
    },
  });
});

const getStoreZip = (zip) => new Promise((resolve, reject) => {
  const urlprefix = (window.location.hostname === 'localhost') ? 'http://localhost' : 'https://ec2-18-116-227-34.us-east-2.compute.amazonaws.com';
  $.ajax({
    type: 'GET',
    url: `${urlprefix}:4000/shipping/closestStore/${zip}`,
    success: (data) => {
      resolve(data);
    },
    error: (error) => {
      reject(error);
    },
  });
});

const getZip = (coords) => new Promise((resolve, reject) => {
  const urlprefix = (window.location.hostname === 'localhost') ? 'http://localhost' : 'https://ec2-18-116-227-34.us-east-2.compute.amazonaws.com';
  $.ajax({
    type: 'POST',
    url: `${urlprefix}:4000/shipping/zipcode`,
    contentType: 'application/json',
    data: JSON.stringify({
      lat: coords.latitude,
      lng: coords.longitude,
    }),
    success: (data) => {
      resolve(data);
    },
    error: (error) => {
      reject(error);
    },
  });
});

export {
  getPosition,
  getStoreZip,
  getZip,
  getStore,
};
