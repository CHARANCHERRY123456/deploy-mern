const mongoose = require("mongoose");
const express = require('express')
const app = express();
const port = 3000;

mongoose.connect("mongodb+srv://cherrycharan238:CHERRYCHARAN2380@cluster0.tavn5wb.mongodb.net/")
.then(()=>{
  app.listen(port, ()=>{
    console.log("your port is running at " ,port);
  })
}).catch((err)=>{
  console.log(err);
})