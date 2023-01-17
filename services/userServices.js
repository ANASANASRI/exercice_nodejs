const User=require("../models/user");

const addUser=async(u)=>{
    return await User.create(u)
};

const getAllUser=async()=>{
    return await User.find()
};

const getUserById=async (id)=>{
    return await User.findOne({_id:id})
    
}
const deleteUserById=async (id)=>{
    return await User.findByIdAndDelete({_id:id})
}

const updateUser=async (user)=>{
    console.log(user)
    return await User.findByIdAndUpdate(user._id,user)
    
}

module.exports={
    addUser,
    getAllUser,
    updateUser,
    deleteUserById,
    getUserById
}