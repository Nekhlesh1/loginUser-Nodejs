const express = require('express');
const { createUser, updateUser, deleteUser, updateUserName } = require('../controllers/user.controller');
const router = express.Router();

router.get('/',(req,res)=>{res.send("In home page")})
router.post('/create',createUser);
router.post('/update', updateUserName);
router.get('/deleteUser',deleteUser)

module.exports = router;