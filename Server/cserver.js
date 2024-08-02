// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const app = express();
// app.use(bodyParser.json());
// app.use(cors());
// mongoose.connect("mongodb://127.0.0.1:27017/Cara");
// const db = mongoose.connection;
// db.once("open", () => console.log("Connected to Database"));
// const itemSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   query: String,
// });
// const Item = mongoose.model("query", itemSchema);
// app.post("/api/items", async (req, res) => {
//   const newItem = new Item(req.body);
//   const savedItem = await newItem.save();
//   console.log("req.body");
// });
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });



const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors=require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());
mongoose.connect('mongodb://127.0.0.1:27017/Cara');
const db = mongoose.connection;
db.once('open', () => console.log('Connected to Database'));
const itemSchema = new mongoose.Schema({
  name: String,
  emailaddress:String,
  massage:String
 });
const Item = mongoose.model('query', itemSchema);
app.post('/api/items', async (req, res) => {

    const newItem = new Item(req.body);
    const savedItem = await newItem.save();
    // res.send("Successfully saved to Database");
    console.log("req.body");
});
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});