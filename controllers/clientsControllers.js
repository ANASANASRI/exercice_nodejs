const clients=require("../models/clients")

const getAllClients=(req,res)=>{
    clients.find().then(clients=>{res.json({clients})});
}
const getClientById=(req,res)=>{
    const idp=req.params.id;
    clients.findById(idp).then(client=>{res.json({client})});
}

const DelelteClient=(req,res)=>{
    const idp=req.params.id;
    clients.findByIdAndDelete(idp).then(()=>{
            res.send("deleted")
        });
}

const AddClient=(req,res)=>{
    clients.create(req.body).then(()=>{res.send("add done")});
}

module.exports={
    getAllClients,
    getClientById,
    DelelteClient,
    AddClient
} 
