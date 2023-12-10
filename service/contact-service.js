const Contact = require('../models/contact-models');

const getAllDataContact = async () => {
   return await Contact.findAll();
}

const createDataContact = async (contact) => {
    return await Contact.create(contact);
} 


module.exports = {
    getAllDataContact,
    createDataContact
}