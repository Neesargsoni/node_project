 const express = require('express');
 const app = express();

 const PORT = 3000;


 app.use((req,res,next)=>{
    console.log('Middleware activated');
    next();
    
 }); // defining middleware
 app.get('/',(req,res)=>{
    res.send('Root handler activated');
    
 })

 app.get('/about',(req,res,next)=>{

    // res.send('About root handler activated');
    return next(new Error('Error is arised'))
 })

 app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send('Something went wrong')
 })
 app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`);
 })

