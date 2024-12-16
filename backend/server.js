// const express = require("express");
// const app = express();
// const dotenv = require("dotenv");
// const cors = require('cors')
// const { MongoClient } = require("mongodb");
// const bodyparser = require("body-parser");
// app.use(bodyparser.json())
// app.use(cors())
// dotenv.config();

// Connection URL 
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "passop";

const port = 3000;

client.connect();

//Get all the Passwords
app.get('/', async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.find({}).toArray();
    res.json(findResult)
})

//save a Password
app.post("/", async (req, res) => {
    const password = req.body
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const findResult = await collection.insertOne(password)
  res.send({success: true , result:findResult})
});

// Delete a Password by ID
app.delete("/", async (req, res) => {
    const password = req.body
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const findResult = await collection.deleteOne(password)
  res.send({success: true , result:findResult})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
