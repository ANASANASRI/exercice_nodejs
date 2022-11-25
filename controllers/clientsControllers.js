const client=require("../models/Clients")

const getAllClients=(req,res)=>{
client.find({}).then(function(result){
    res.json({"results":result})
})
}
const getClient=(req,res)=>{
    const idp=req.params.id;
    const client=clients.find(client=>client.id==idp);
    res.json(client);
}

const DelelteClient=(req,res)=>{
    const idp=req.params.id;
    const indexp=clients.findIndex(client=>client.id==idp);
    clients.splice(indexp,1);
    res.json(clients);
}

const AddClient=(req,res)=>{
    const a= {
        "id":clients.length + 1,
        "name":req.params.nom
    }
    clients.push(a);
    res.json(clients);
}

const UpdateClient=(req,res)=>{
    const idp=req.params.id;
    const indexp=clients.findIndex(client=>client.id==idp);
    const newnom=req.body.nom;
    //const target = { a: 1, b: 2 };
    //const source = { b: 4, c: 5 };
    //const returnedTarget = Object.assign(target, source);
    //
    //
    res.json(clients);
}

module.exports={
    getAllClients,
    getClient,
    AddClient,
    UpdateClient,
    DelelteClient
} 
