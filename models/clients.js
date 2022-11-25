const mongoose=require("mongoose") 

const clientSchema=new mongoose.Schema({
        name:String ,
        secondname:String ,
        age:Number
});

const clients=mongoose.model('clients',clientSchema);


module.exports=clients;
