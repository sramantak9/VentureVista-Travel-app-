const mongoose = require("mongoose");
const initData = require("./sampledata.js");
const listing = require("../models/listing.js");

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
  
  }
  
  main()
      .then(res => console.log("connection successfull"))
      .catch(err => console.log(err));

 

const newinitData = initData.data.map((obj) => ({ ...obj, owner: '6690cca446a8bdca769a189b' }));


const initdb = async function () {
    await listing.deleteMany({});
    await listing.insertMany(newinitData);
    console.log("data was initialized");
}
      
initdb();