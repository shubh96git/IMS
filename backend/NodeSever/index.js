const express = require('express');
const credRelatedRoutes= require('./routes/suppliers');
//const credRelatedRoutes= require('./routes/supplier_addrs');
const app= express();
app.use((request,response,next)=>{
    response.setHeader('Access-Control-Allow-Origin',"*");
    response.setHeader('Access-Control-Allow-Headers',"*");
    response.setHeader('Access-Control-Allow-Methods',"*")
    next();
})
app.use(express.json());
//app.use('/supplier_addrs',credRelatedRoutes)
app.use('/suppliers',credRelatedRoutes)
app.listen(9999,()=>{console.log("Server Started @9999")
})
