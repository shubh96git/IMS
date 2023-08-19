const express = require('express');
const credRelatedRoutes1= require('./routes/suppliers');
const credRelatedRoutes2= require('./routes/supplier_addrs');
const app= express();
app.use((request,response,next)=>{
    response.setHeader('Access-Control-Allow-Origin',"*");
    response.setHeader('Access-Control-Allow-Headers',"*");
    response.setHeader('Access-Control-Allow-Methods',"*")
    next();
})
app.use(express.json());
app.use('/supplier_addrs',credRelatedRoutes1)
app.use('/suppliers',credRelatedRoutes2)
app.listen(9999,()=>{console.log("Server Started @9999")
})
