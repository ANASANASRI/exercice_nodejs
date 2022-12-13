const express=require("express");
const mongoose = require('mongoose');
const app=express();
//cost inporter cost

const loggingMiddelwares=require("./middlewares/loggingMiddelwares")
const route=require("./routes/productRoutes")
app.use(express.urlencoded({extended:true}));
app.use(loggingMiddelwares.loggingParams)
app.use(loggingMiddelwares.loggingUrls) 

require('dotenv').config()
/* console.log(process.env.dbURL)*/

const products = require("./models/products.js");

mongoose.connect(process.env.dbURL)
        .then(result=>console.log('connect'))
        .catch(err => console.log(err));

app.use("/products",route)

app.get("/",(req,res)=>{
    console.log("Home Page")
    res.send("<h2> Bienvenue dans notre app express </h2>");
});

app.listen(5566,function(){
    console.log("Sever is running");
});