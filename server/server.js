const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('./database/stores');
const gm = require('./api/googleMaps');

const router = express.Router();

const app = express();
const dirPath = path.join(__dirname, '/../client/dist');

app.use('/shipping/', router);

app.use(express.static(dirPath));

app.get(['/', '/p/*'], (req, res) => {
  res.sendFile(path.join(dirPath, 'index.html'));
});

router.use(express.urlencoded({ extended: true }));
router.use(express.json());
router.use(cors());

const port = 4000;

// Zipcode
router.post('/zipcode', (req, res) => {
  gm.getZip(req.body)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(`Error getting zipcode: ${err}`);
    });
});

// CLOSEST STORES (Zipcode)
router.get('/closestStores/:zipcode', (req, res) => {
  db.closestStores(req.params.zipcode)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(`Error getting Stores: ${err}`);
    });
});

// CLOSEST STORES (Geolocation)
router.post('/closestStores', (req, res) => {
  db.closestStoresGeolocation(req.body)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(`Error getting Stores: ${err}`);
    });
});

// CLOSEST STORE (Zipcode)
router.get('/closestStore/:zipcode', (req, res) => {
  db.closestStore(req.params.zipcode)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(`Error getting Stores: ${err}`);
    });
});

// CLOSEST STORE (Geolocation)
router.post('/closestStore', (req, res) => {
  db.closestStoreGeolocation(req.body)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(`Error getting Stores: ${err}`);
    });
});

// ALL STORES
router.get('/stores', (req, res) => {
  db.getStores()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(`Error getting Stores: ${err}`);
    });
});

// STORE INFO
router.get('/:storeId', (req, res) => {
  db.getStore(req.params.storeId)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(`Error getting Store: ${err}`);
    });
});

// STORES PRODUCTS
router.get('/:storeId/all', (req, res) => {
  db.getProducts(req.params.storeId)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(`Error getting Store: ${err}`);
    });
});

// STORES SPECIFIC PRODUCT INFO
router.get('/:storeId/:productId', (req, res) => {
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
