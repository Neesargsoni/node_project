// require express package
const express =  require('express')

// initializing a new instance
const app = express();

// assign a port
const PORT = 3000;

// route handlers
app.get('/',(req,res) =>{
    res.send("Hello world");
})

// create a server
app.listen(PORT,()=>{
    console.log(`Connected on port ${PORT}`);
})
