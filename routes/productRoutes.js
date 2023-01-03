const express=require("express")
const route=express.Router()
const productsControllers=require("../controllers/productsControllers")

route.get("/",productsControllers.getAllProducts)
route.get("/:id",productsControllers.getProductById)
route.delete("/:id",productsControllers.deleteProduct)
route.post("/",productsControllers.createProduct)
route.put("/:id",productsControllers.updateProductById)

module.exports=route
