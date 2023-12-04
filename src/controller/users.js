const usersModel = require('../models/users');

const getAllUsers =  async (req, res) => {
    try{
        const [data] = await usersModel.getAllUsers();
        res.json({
            message: 'Get all user succes',
            data: data
        })
    }catch(eror){
        res.status(500).json({
            message: 'server eror',
            serverMessage: eror,
        })
    }
   
}

const createNewUsers =  async (req, res) => {
    const {body} = req;
    if(!body.email || !body.name || !body.message){
        return res.status(400).json({
            message: 'Anda mengirimkkan data yang salah',
            data: null
        })
    }

    try{
        await usersModel.createNewUsers(body);
        res.status(201).json({
            message: 'CREATE new user succes',
            data: body
        })
    }catch (eror){
        res.status(500).json({
            message: 'server eror',
            serverMessage: eror,
        })
    }  
}

const updateUsers =  async(req, res) =>{
    const {iduser} = req.params;
    const{body} = req;
    try{
        await usersModel.updateUsers(body, iduser);
        res.json({
            message: 'UPDATE USER SUCCES',
            data: {
                id : iduser,
                ...body
            }
        })
    }catch(eror){
        res.status(500).json({
            message: 'server eror',
            serverMessage: eror,
        })
    }
}

const deleteUsers = async (req, res) =>{
    const {iduser} = req.params;
    try{
        await usersModel.deleteUsers(iduser);
        res.json({
            message: 'DELETE USER SUCCES',
            data: null
        })
    } catch(eror){
        res.status(500).json({
            message: 'server eror',
            serverMessage: eror,
        })
    }
}


module.exports = {
    getAllUsers,
    createNewUsers,
    updateUsers,
    deleteUsers
}