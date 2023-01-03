const prodService=require("../services/productService")

const getAllProducts=async (req,res)=>{
    try{
        const result=await prodService.getProducts()
        res.status(200).json(result)
    }catch(error){
        res.status(500).json({err:error})
    }

}

const getProductById=async (req,res)=>{
    try{
        const result=await prodService.getProductById(req.params.id)
        res.status(200).json(result)
    }catch(error){
        res.status(500).json({err:error})
    }
}

const addProduct=(req,res)=>{
    product.create(req.body)
    .then(result=>res.json({msg:"le produit est bien ajouté"}))
    
}


const deleteProduct=async (req,res)=>{
    try{
        const reslt= await prodService.deleteProductById(req.params.id)
        res.status(200).json(reslt)
    }catch(error){
        res.status(500).json({err:error})
    }
}

const createProduct=async (req,res)=>{
    try{
        const result= await prodService.addProduct(req.body)
        res.status(200).json(result)
    }catch(error){
        res.status(500).json({err:error})
    }

}
const updateProductById=async (req,res)=>{
    try{
        const result= await prodService.updateProduct(req.body)
        res.status(200).json(result)
    }catch(error){
        res.status(500).json({err:error})
    }

}

module.exports={
    getAllProducts,
    getProductById,
    deleteProduct,
    createProduct,
    addProduct,
    updateProductById
}