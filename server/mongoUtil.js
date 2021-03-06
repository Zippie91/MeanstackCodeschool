"use strict"

let mongo = require('mongodb');
let client = mongo.MongoClient;
let _db;

module.exports = {
  connect() {
    client.connect('mongodb://localhost:27017/olympics-dev', (err, db) => {
      if (err) {
        console.log("Error connecting to MongoDB - Check mongod connection");
        process.exit;
      }

      _db = db;
      console.log("Connected to MongoDB");
    });
  },
  sports() {
    return _db.collection('sports');
  }
}
