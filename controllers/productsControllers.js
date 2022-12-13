const products=require("../models/products")

const getAllProducts=(req,res)=>{
    products.find().then(products=>{res.json({products})});
}
const getProductById=(req,res)=>{
    const idp=req.params.id;
    products.findById(idp).then(product=>{res.json({product})});
}

const DelelteProduct=(req,res)=>{
    const idp=req.params.id;
    products.findByIdAndDelete(idp).then(()=>{
            res.send("deleted")
        });
}

const AddProduct=(req,res)=>{
    products.create(req.body).then(()=>{res.send("add done")});
}

module.exports={
    getAllProducts,
    getProductById,
    DelelteProduct,
    AddProduct
} 
