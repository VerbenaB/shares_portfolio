const express = require('express');
const app = express();
// const csvtojson = require("csvtojson");

const cors = require('cors');
app.use(cors());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

app.use(express.json());

// csvtojson()
//   .fromFile("listing_status.csv")
//   .then(csvData => {
//     console.log(csvData);

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    
    const db = client.db('shares');
    const sharesCollection = db.collection('portfolio');
    const sharesRouter = createRouter(sharesCollection);
    app.use('/api/portfolio', sharesRouter);
  })
  .catch(console.err);

app.listen(5000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
