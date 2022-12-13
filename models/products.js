const mongoose=require("mongoose") 

const productSchema=new mongoose.Schema({
        id:Number ,
        name:String ,
        price:Number
});

const products=mongoose.model('products',productSchema);

module.exports=products;
