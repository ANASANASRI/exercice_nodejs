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

module.exports={
    createCategory,
    getCategory
} 
