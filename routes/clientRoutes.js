const express=require("express")
const route=express.Router()
const clientsControllers=require("../controllers/clientsControllers")

route.get("/",clientsControllers.getAllClients)
route.get("/:id",clientsControllers.getClient)
route.delete("/:id",clientsControllers.DelelteClient)
route.post("/:nom",clientsControllers.AddClient)
route.put("/:id",clientsControllers.UpdateClient)


module.exports=route
