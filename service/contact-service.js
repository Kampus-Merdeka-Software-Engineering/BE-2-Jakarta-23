const Contact = require('../models/contact-models');

const getAllDataContact = async () => {
    try{
        return await Contact.findAll();
    }catch(error){
        return false;
    }
  
}

const createDataContact = async (name, email, message) => {
    try{
        return await Contact.create({name, email, message});
    }catch(error){
        return false;
    }
    
} 


module.exports = {
    getAllDataContact,
    createDataContact
}