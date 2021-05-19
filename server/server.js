const express = require('express');
const db = require('./database/stores');

const app = express();

app.use(express.static(`${__dirname}/../client/dist`));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = 4000;
const endpoint = '/shipping';

// CLOSEST STORES (Zipcode)
app.get(`${endpoint}/closestStores/:zipcode`, (req, res) => {
  db.closestStores(req.params.zipcode)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(`Error getting Stores: ${err}`);
    });
});

// CLOSEST STORES (Geolocation)
app.post(`${endpoint}/closestStores`, (req, res) => {
  db.closestStoresGeolocation(req.body)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(`Error getting Stores: ${err}`);
    });
});

// CLOSEST STORE (Zipcode)
app.get(`${endpoint}/closestStore/:zipcode`, (req, res) => {
  db.closestStore(req.params.zipcode)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(`Error getting Stores: ${err}`);
    });
});

// CLOSEST STORE (Geolocation)
app.post(`${endpoint}/closestStore`, (req, res) => {
  db.closestStoreGeolocation(req.body)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(`Error getting Stores: ${err}`);
    });
});

// ALL STORES
app.get(`${endpoint}/stores`, (req, res) => {
  db.getStores()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(`Error getting Stores: ${err}`);
    });
});

// STORE INFO
app.get(`${endpoint}/:storeId`, (req, res) => {
  db.getStore(req.params.storeId)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(`Error getting Store: ${err}`);
    });
});

// STORES PRODUCTS
app.get(`${endpoint}/:storeId/all`, (req, res) => {
  db.getProducts(req.params.storeId)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(`Error getting Store: ${err}`);
    });
});

// STORES SPECIFIC PRODUCT INFO
app.get(`${endpoint}/:storeId/:productId`, (req, res) => {
  db.getProduct(req.params.storeId, req.params.productId)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(`Error getting Store: ${err}`);
    });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${port}`);
});
