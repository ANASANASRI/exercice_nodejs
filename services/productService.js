const Product=require("../models/products")

const getProducts= async()=>{
    return await Product.find()
}
const getProductById=async (id)=>{
    return await Product.findOne({_id:id})
    
}
const deleteProductById=async (id)=>{
    return await Product.findByIdAndDelete({_id:id})
}
const addProduct=async (product)=>{
    return await Product.create(product);
    
}
const updateProduct=async (product)=>{
    console.log(product)
    return await Product.findByIdAndUpdate(product._id,product)
    
}
module.exports={
    getProducts,
    getProductById,
    deleteProductById,
    addProduct,
    updateProduct
}