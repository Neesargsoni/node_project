
// Name: Soni Neesarg Dhavalkumar


// require express package
const express =  require('express') 
// const router = require('./router/pages') // importing route
const fs = require('fs').promises;
// initializing a new instance
const app = express();

// assign a port
const PORT = 3000;
// app.use(router);
app.get('/', async (req,res)=>{
    try{
         const data = await fs.readFile("Example.txt","utf-8");
         res.send(data);
    }
    catch(error){
      console.log("Error reading file",error);
      res.status(500).send("Internal Server Error");
    }
})

// route handlers


// create a server
app.listen(PORT,()=>{
    console.log(`Connected on port ${PORT}`);
})
