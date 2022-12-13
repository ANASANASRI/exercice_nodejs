const mongoose=require("mongoose") 

const clientSchema=new mongoose.Schema({
        id:Number ,
        name:String ,
        price:Number
});

const products=mongoose.model('products',clientSchema);

module.exports=products;
