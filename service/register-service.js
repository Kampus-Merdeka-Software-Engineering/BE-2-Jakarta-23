const Register = require('../models/register-models');

const getAllDataRegister = async () => {
    try{
        return await Register.findAll();
    }catch(error){
        return false;
    }
  
}

const createDataRegister = async (username, email, password) => {
    try{
        return await Register.create({username, email, password});
    }catch(error){
        return false;
    }
    
} 


module.exports = {
    getAllDataRegister,
    createDataRegister
}