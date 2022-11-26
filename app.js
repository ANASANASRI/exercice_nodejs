const express=require("express");
const mongoose = require('mongoose');
const app=express();

const loggingMiddelwares=require("./middlewares/loggingMiddelwares")
const route=require("./routes/clientRoutes")
app.use(express.urlencoded({extended:true}));
app.use(loggingMiddelwares.loggingParams)
app.use(loggingMiddelwares.loggingUrls) 

require('dotenv').config()
/* console.log(process.env.dbURL)*/

const clients = require("./models/clients.js");

mongoose.connect(process.env.dbURL)
        .then(result=>console.log('connect'))
        .catch(err => console.log(err));

app.use("/clients",route)

app.get("/",(req,res)=>{
    console.log("Home Page")
    res.send("<h2> Bienvenue dans notre app express </h2>");
});

app.listen(3000,function(){
    console.log("Sever is running");
});