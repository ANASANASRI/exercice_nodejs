const userService=require("../services/userServices")

const createUser=async (req,res)=>{
    try {
        console.log(req.body)
        const result= await userService.addUser(req.body)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getUser=async (req,res)=>{
    try {
        const result=await userService.getAllUser()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}


const getUserById=async (req,res)=>{
    try{
        const result=await userService.getUserById(req.params.id)
        res.status(200).json(result)
    }catch(error){
        res.status(500).json({err:error})
    }
}

const addUser=(req,res)=>{
    User.create(req.body)
    .then(result=>res.json({msg:"l'utilisateur est bien ajouté"}))
    
}


const deleteUser=async (req,res)=>{
    try{
        const result= await userService.deleteUserById(req.params.id)
        res.status(200).json(result)
    }catch(error){
        res.status(500).json({err:error})
    }
}


const updateUserById=async (req,res)=>{
    try{
        const result= await userService.updateUser(req.body)
        res.status(200).json(result)
    }catch(error){
        res.status(500).json({err:error})
    }

}


module.exports={
    createUser,
    getUser,
    updateUserById,
    deleteUser,
    addUser,
    getUserById
} 
