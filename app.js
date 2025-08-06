
// Name: Soni Neesarg Dhavalkumar


// require express package
const express =  require('express') 
const router = require('./router/pages') // importing route
// initializing a new instance
const app = express();

// assign a port
const PORT = 3000;
app.use(router);

// route handlers


// create a server
app.listen(PORT,()=>{
    console.log(`Connected on port ${PORT}`);
})
