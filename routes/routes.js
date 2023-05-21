const express=require('express');
const router=express.Router();

const {get,create,update,del} = require('../controllers/userController');

router.get('/get',get);
router.post('/create',create);   
router.put('/update/:id',update);
router.delete('/delete/:id',del);
module.exports=router;