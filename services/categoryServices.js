const category = require("../models/Category");

const addCategory=async(c)=>{
    return await category.create(c)
};

const getAllCategory=async()=>{
    return await category.find()
};

module.exports={
    addCategory,
    getAllCategory
}