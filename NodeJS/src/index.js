const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const axios = require('axios')
const MongoClient = require('mongodb').MongoClient;

const PORT = process.env.PORT || 3001;

const app = express();


app.use(bodyParser.json());
app.use(cors());

app.post("/loadQuotes", (req, res) => {
  axios.get('http://52.201.152.108/news?id=bcsf17a521').then(response => {
    var url = "mongodb://3.83.45.187:2717/";
    MongoClient.connect(url, function(err, db) {
      if (err)
      {
        console.log("Unable to Connect Your Database");
        throw err;
      } 
      var dbo = db.db("QuotesDB");
      dbo.collection("quote").deleteMany({}).then(obj=>{
        console.log("Documents deleted Successfully!");
      }).catch(err=>{
         console.log("Error while deleting the Documents"); 
      })
      dbo.collection("quote").insertMany(response.data).then(obj=>{
        console.log("Documents Inserted Successfully!");
      }).catch(err=>{
        console.log("Error while inserting the Documents"); 
      })
      res.json({
        dataLength: response.data.length
      })
    })
    
  })
});

app.post("/showQuotes", (req, res) => {
  var url = "mongodb://3.83.45.187:2717/";
  MongoClient.connect(url, function(err, db) {
    if (err) 
    {
        console.log("Unable to Connect Database")
        throw err;
    }
    var dbo = db.db("QuotesDB");
    dbo.collection("quote").find({}).toArray(function(err, quotes) {
      if (err) 
      {
        console.log("Unable to fetch Documents");
        throw err;
      }
      res.json({
        quotes
      })
      db.close();
    });
  })
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});