const express=require("express");
const mongoose = require('mongoose');
const app=express();

const loggingMiddelwares=require("./middelwares/loggingMiddelwares")
const route=require("./routes/clientRoutes")
app.use(express.urlencoded({extended:true}));
app.use(loggingMiddelwares.loggingParams)
app.use(loggingMiddelwares.loggingUrls)

const clients = require("./src/modules/clients.js");

const dbURI = "mongodb+srv://anasbd:anas30@cluster0.fv0ksoj.mongodb.net/db_users?retryWrites=true&w=majority";

mongoose.connect(dbURI)
        .then(result=>console.log('connect'))
        .catch(err => console.log(err));

app.use("/clients",route)

app.get("/",(req,res)=>{
    console.log("Home Page")
    res.send("<h2> Bienvenue dans notre app express </h2>");
});

app.listen(5000,function(){
    console.log("Sever is running");
});