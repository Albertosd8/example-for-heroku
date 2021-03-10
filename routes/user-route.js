const express = require('express');
const router = express.Router();

router.get('/', async (req,res)=>{
    res.redirect('./html/user.html');
}) //auth.validarRolAdmi

module.exports = router; 