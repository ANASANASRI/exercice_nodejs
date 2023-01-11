const mongoose=require("mongoose") 

const productSchema=new mongoose.Schema({
        name:String ,
        description:String,
        price:Number,
        category:{
                type:mongoose.Types.ObjectId,
                ref:"categories"
        }
});

const products=mongoose.model('products',productSchema);
module.exports=products;
