const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static('public'));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/user/:username',(req,res)=>{
    res.send(` Welcome,${req.params.username}`);
})

app.listen(3000,()=>{
    console.log("Servr is running");
})