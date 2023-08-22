const express = require('express');
const mysql = require(`mysql`)
const app= express();

const credRelatedRoutes1= require('./routes/suppliers');
const credRelatedRoutes2= require('./routes/supplier_addrs');
const categoryRoute = require('./routes/Category');
const subcategoryRoute = require('./routes/SubCategory');
const subsubcategoryRoute = require('./routes/SubSubCategory');


app.use((request,response,next)=>{
    response.setHeader('Access-Control-Allow-Origin',"*");
    response.setHeader('Access-Control-Allow-Headers',"*");
    response.setHeader('Access-Control-Allow-Methods',"*")
    next();
})
app.use(express.json());
app.use('/supplier_addrs',credRelatedRoutes1)
app.use('/suppliers',credRelatedRoutes2)
app.use('/catgry',categoryRoute);
app.use('/subcatgry',subcategoryRoute);
app.use('/subsubcatgry',subsubcategoryRoute)
app.listen(9999,()=>{console.log("Server Started @9999")
})
