const mongoose=require("mongoose") 

const categorySchema=new mongoose.Schema({
        name:String
});

const categories=mongoose.model('Categories',categorySchema);

module.exports=categories;