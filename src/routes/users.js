const express = require('express');
const UserController = require('../controller/users.js');
const router = express.Router();


//CREATE - POST 
router.post('/', UserController.createNewUsers);
//READ - GET
router.get('/', UserController.getAllUsers);
//UPDATE - PATCH
router.patch('/:iduser', UserController.updateUsers);
//DELETE - DELETE
router.delete('/:iduser', UserController.deleteUsers);


module.exports = router;