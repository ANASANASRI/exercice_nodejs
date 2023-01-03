const { Router } = require("express")
const express=require("express")
const route=express.Router()
const categorysControllers=require("../controllers/categorysControllers")

route.get("/Categorys",categorysControllers.getCategory)

module.exports=route
