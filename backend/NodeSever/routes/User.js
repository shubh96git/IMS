const express = require('express');
const appForUser= express.Router();
const mysql = require('mysql');
var connection =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'manager',
    database:'inventory_mgmt_system'
});

appForUser.put("/approve/:id",(request,response)=>{
    var query=`update users set status = "APPROVED" where id = ${request.params.id}; `;
    connection.query(query,(error,result)=>
    {
        if(error==null)
        {
            var data = JSON.stringify(result);
            response.setHeader("Content-Type","application/json");
            response.send(data);
        }
        else{
            console.log(error);
            response.setHeader("Content-Type","application/json")
            response.send();
        }
    })
 })

appForUser.put("/approve/:id",(request,response)=>{
    var query=`update users set status = "APPROVED" where id = ${request.params.id}; `;
    connection.query(query,(error,result)=>
    {
        if(error==null)
        {
            var data = JSON.stringify(result);
            response.setHeader("Content-Type","application/json");
            response.send(data);
        }
        else{
            console.log(error);
            response.setHeader("Content-Type","application/json")
            response.send();
        }
    })
 })
 
 appForUser.put("/remove/:id",(request,response)=>{
    var query=`update users set status = "REMOVED" where id = ${request.params.id}; `;
    connection.query(query,(error,result)=>
    {
        if(error==null)
        {
            var data = JSON.stringify(result);
            response.setHeader("Content-Type","application/json");
            response.send(data);
        }
        else{
            console.log(error);
            response.setHeader("Content-Type","application/json")
            response.send();
        }
    })
 })

module.exports=appForUser;
