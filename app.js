
// Name: Soni Neesarg Dhavalkumar


// require express package
// const express =  require('express') 
// // const router = require('./router/pages') // importing route
// const fs = require('fs').promises;
// // initializing a new instance
// const app = express();

// // assign a port
// const PORT = 3000;
// // app.use(router);
// app.get('/', async (req,res)=>{
//     try{
//          const data = await fs.readFile("Example.txt","utf-8");
//          res.send(data);
//     }
//     catch(error){
//       console.log("Error reading file",error);
//       res.status(500).send("Internal Server Error");
//     }
// })

// route handlers

const express = require('express')
const app = express();
const PORT = 3000;

// app.get('/user/:userId',(req,res)=>{
//   res.send('User id:' +req.params.userId);
// });  // passing dynamic parameters and accessing it

// accessing query parameter using req.query object 
// var query = 'Node.js';
// var limit = 25;
// var url = `http://localhost:3000/search?q=${query}&limit=${limit}`;

app.get('/user/:userId',(req,res)=>{
  var id = req.params.userId;
  var searchterm = req.query.q || 'No search item';
  var queryterm = req.query.limit || 10;

  res.send(`Userid : ${id} | search-query: ${searchterm} | limit : ${queryterm}`);
});
// create a server
app.listen(PORT,()=>{
    console.log(`Connected on port ${PORT}`);
})
