const { Router } = require('express');
// const endpoint = Router();
const { getAllDataRegister, createDataRegister} = require('../service/register-service');
const router = Router();

router.get('/', async(req, res) =>{
    let result = await getAllDataRegister();

    res.json({
        "message": "berhasil mendapatkan data",
        "data": result
    })
});
router.post('/', (req, res) => {
    const {username, email, password} = req.body;
    const result = createDataRegister (username, email, password);

    res.json({
        "message": "berhasil menambahkan data",
        "data": result
    })
})

module.exports = router;
