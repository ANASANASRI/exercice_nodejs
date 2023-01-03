const products=require("../services/categoryServices")

const creatCategory=(req,res)=>{
    try {
        const result= categoryService.AddCategory(req.body)
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
    creatCategory,
    getCategory
} 
