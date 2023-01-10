const category = require("../models/Category");

const addCategory=async(c)=>{
    return await category.create(c)
};

const getAllCategory=async()=>{
    return await category.find()
};

const getCategoryById=async (id)=>{
    return await Category.findOne({_id:id})
    
}
const deleteCategoryById=async (id)=>{
    return await Category.findByIdAndDelete({_id:id})
}

const updateCategory=async (Category)=>{
    console.log(Category)
    return await Category.findByIdAndUpdate(Category._id,Category)
    
}

module.exports={
    addCategory,
    getAllCategory,
    updateCategory,
    deleteCategoryById,
    getCategoryById
}