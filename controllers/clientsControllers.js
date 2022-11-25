const clients=require("../models/clients")

const getAllClients=(req,res)=>{
    clients.find().then(clients=>{res.json({clients})});
}
const getClientById=(req,res)=>{
    const idp=req.params.id;
    clients.findById('idp').then(client=>{res.json({client})});
}

const DelelteClient=(req,res)=>{
    clients.findByIdAndDelete("//637366bc0cedaa54a02a82c0//").then(()=>{
            res.send("deleted")
        });
}

const AddClient=(req,res)=>{
    const clien = new clients({
            name: 'anas' , 
            secondname:'anasri', 
            age: 21
    });

    clien.save().then(()=>{res.send("add done")});
}

module.exports={
    getAllClients,
    getClientById,
    DelelteClient,
    AddClient
} 
