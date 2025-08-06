// Name: Soni Neesarg Dhavalkumar


const express = require('express');
 const router = express.Router();

 router.get('/',(req,res)=>{
    res.send("This is a root path");
 });
 router.get('/about',(req,res)=>{
    res.send("This is a about page")
 });

 module.exports = router;