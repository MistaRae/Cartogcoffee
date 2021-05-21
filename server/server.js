const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const MongoClient = require('mongodb').MongoClient
const createRouter = require ('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
    const db = client.db('coffee_facts');
    const coffeesCollection = db.collection('coffees');
    const coffeesRouter = createRouter(coffeesCollection);
    app.use('/api/coffees', coffeesRouter);
  })
  .catch(console.err);

app.listen(5000, function () {
    console.log(`listening on port: ${this.address().port}`);
})