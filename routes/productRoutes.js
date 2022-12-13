const express=require("express")
const route=express.Router()
const productsControllers=require("../controllers/productsControllers")

route.get("/",productsControllers.getAllProducts)
route.get("/:id",productsControllers.getProductById)
route.delete("/:id",productsControllers.DelelteProduct)
route.post("/add",productsControllers.AddProduct)

module.exports=route
