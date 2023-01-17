const mongoose=require("mongoose") 

const userSchema=new mongoose.Schema({
        fname:String,
        lname:String,
        email:String,
        password:String
});

const users=mongoose.model('Users',userSchema);

module.exports=users;