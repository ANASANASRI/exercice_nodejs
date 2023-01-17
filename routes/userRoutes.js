const express=require("express")
const route=express.Router()
const usersControllers=require("../controllers/usersControllers")

route.get("/",usersControllers.getUser)
route.post("/",usersControllers.createUser)
route.get("/:id",usersControllers.getUserById)
route.delete("/:id",usersControllers.deleteUser)
route.put("/:id",usersControllers.updateUserById)

module.exports=route