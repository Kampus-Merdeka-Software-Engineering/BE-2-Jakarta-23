const { getAllDataContact, createDataContact } = require('../service/contact-service');


const getContact = async (req, res) => {
    let contact = await getAllDataContact();

    res.json({
        message: "berhasil mendapatkan data",
        data: contact
    });
}

// const getMinuman = async (req, res) => {
//     let drinks = await getAllDataMinuman();    


//     res.json({
//         message: "berhasil mendapatkan data",
//         data: drinks
//     });
// }

const createContact = async (req, res) => {
    const { name, email, message} = req.body; 
    let createContact = await createDataContact({name, email, message});

    res.json({
        message: "berhasil menambahkan contact",
        data : createContact
    });
}


module.exports = {
    getContact,
    createContact
}