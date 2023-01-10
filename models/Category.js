const mongoose=require("mongoose") 

const categorySchema=new mongoose.Schema({
        name:String 
});

const categories=mongoose.model('Category',categorySchema);

module.exports=categories;