const express = require('express');

const router = express.Router();

router.get('/',(req, res)=>{
    res.render('index');
});

router.get('/about',(req, res)=>{
    res.render('forms');
});

router.get('/pizza',(req, res)=>{
    res.render('pizza');
});

module.exports = router;