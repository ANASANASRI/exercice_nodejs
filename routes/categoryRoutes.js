const { Router } = require("express")
const express=require("express")
const route=express.Router()
const categoriesControllers=require("../controllers/categoriesControllers")

route.get("/",categoriesControllers.getCategories)
route.post("/",categoriesControllers.createCategory)
route.get("/:id",CategoriesControllers.getCategoryById)
route.delete("/:id",CategoriesControllers.deleteCategory)
route.put("/:id",CategoriesControllers.updateCategoryById)

module.exports=route
