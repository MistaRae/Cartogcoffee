const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const MongoClient = require('mongodb').MongoClient
const createRouter = require ('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017')


app.listen(5000, function () {
    console.log(`listening on port: ${this.address().port}`);
})