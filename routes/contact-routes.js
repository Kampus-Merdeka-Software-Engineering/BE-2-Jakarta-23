const { Router } = require('express');
// const endpoint = Router();
const { getAllDataContact, createDataContact } = require('../service/contact-service');
const router = Router();

router.get('/', async(req, res) =>{
    let result = await getAllDataContact();

    res.json({
        "message": "berhasil mendapatkan data",
        "data": result
    })
});
router.post('/', (req, res) => {
    const {name, email, message} = req.body;
    const result = createDataContact(name, email, message);

    res.json({
        "message": "berhasil mendapatkan data",
        "data": result
    })
})

module.exports = router;
