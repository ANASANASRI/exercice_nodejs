const express=require("express")
const route=express.Router()
const clientsControllers=require("../controllers/clientsControllers")

route.get("/",clientsControllers.getAllClients)
route.get("/:id",clientsControllers.getClientById)
route.delete("/:id",clientsControllers.DelelteClient)
route.post("/add",clientsControllers.AddClient)

module.exports=route
