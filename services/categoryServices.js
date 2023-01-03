const category = require("../models/Category.js");
const users = require("../models/Category.js");

const addCategory=async(c)=>{
    return await category.create(c)
};

const getAllCategory=async()=>{
    return await category.find()
};

exports={
    addCategory,
    getAllCategory
}