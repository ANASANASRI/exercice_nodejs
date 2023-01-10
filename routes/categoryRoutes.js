const { Router } = require("express")
const express=require("express")
const route=express.Router()
const categoriesControllers=require("../controllers/categoriesControllers")

route.get("/",categoriesControllers.getCategory)
route.post("/",categoriesControllers.createCategory)

module.exports=route
