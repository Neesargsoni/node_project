 const express = require('express');
 const app = express();
 const PORT = 3000;

 app.use(express.json());

 app.post('/user/:userId',(req,res)=>{
    const userId = req.params.userId;
    const search = req.query.q;
    const limit = req.query.limit;

    const {name ,email} = req.body;
     res.json({userId,search,limit,name,email});
 });
 

 app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
 });
