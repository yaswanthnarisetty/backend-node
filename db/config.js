const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/cruddb',{useNewUrlParser:true});


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://127.0.0.1:27017/cruddb";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });