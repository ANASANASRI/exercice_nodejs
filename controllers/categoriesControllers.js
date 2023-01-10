const categoryService=require("../services/categoryServices")

const createCategory=async (req,res)=>{
    try {
        console.log(req.body)
        const result= await categoryService.addCategory(req.body)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getCategory=async (req,res)=>{
    try {
        const result=await categoryService.getAllCategory()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}


const getCategoryById=async (req,res)=>{
    try{
        const result=await prodService.getCategoryById(req.params.id)
        res.status(200).json(result)
    }catch(error){
        res.status(500).json({err:error})
    }
}

const addCategory=(req,res)=>{
    Category.create(req.body)
    .then(result=>res.json({msg:"le produit est bien ajouté"}))
    
}


const deleteCategory=async (req,res)=>{
    try{
        const reslt= await CatService.deleteCategoryById(req.params.id)
        res.status(200).json(reslt)
    }catch(error){
        res.status(500).json({err:error})
    }
}


const updateCategoryById=async (req,res)=>{
    try{
        const result= await categoryService.updateCategory(req.body)
        res.status(200).json(result)
    }catch(error){
        res.status(500).json({err:error})
    }

}


module.exports={
    createCategory,
    getCategory,
    updateCategoryById,
    deleteCategory,
    addCategory,
    getCategoryById
} 
