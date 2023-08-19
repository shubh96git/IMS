const { error } = require("console");
const express = require(`express`);
const { request } = require("http");
const mysql = require(`mysql`)
const app = express();
const appForcategory = express.Router();

var connection =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'manager',
    database:'inventory_mgmt_system'
});

       //EndPoint to get a list of All Categories
       //GET:localhost:5000/category
       appForcategory.get("/",(request,response) =>{
    connection.query("select * from categories",(error,result) =>
    {
        if(error==null)
        {
            var data = JSON.stringify(result)
            response.setHeader("Content-Type","application/json");
            response.write(data);
        }
     else
        {
            console.log(error);
            response.setHeader("Content-Type","application/json");
            response.write(error);
        }
        response.end();
    })
})

//EndPOint For Adding a New Category
//POST:localhost:5000/catgry
appForcategory.post("/",(request,response) =>{
    var query =    `insert into categories (name) values ('${request.body.name}')`;
    connection.query(query,(error,result) =>
    {
        if(error==null)
        {
            var data = JSON.stringify(result)
            response.setHeader("Content-Type","application/json");
            response.write(data);
        }
     else
        {
            console.log(error);
            response.setHeader("Content-Type","application/json");
            response.write(error);
        }
        response.end();
    })
})

//EndPoint for Editing category
//PUT:localhost:5000/catgry/1
appForcategory.put("/:id",(request,response) =>{
    var query = `update categories set name = '${request.body.name}' where id=${request.params.id}`;
    connection.query(query,(error,result) =>
    {
        if(error==null)
        {
            var data = JSON.stringify(result)
            response.setHeader("Content-Type","application/json");
            response.write(data);
        }
     else
        {
            console.log(error);
            response.setHeader("Content-Type","application/json");
            response.write(error);
        }
        response.end();
    })
})

//EndPoint For Deleting a Category
//DELETE:localhost:5000/catgry/7 
appForcategory.delete("/:id",(request,response) =>{
    var query = `delete from categories where id = ${request.params.id}`;
    connection.query(query,(error,result) =>
    {
        if(error==null)
        {
            var data = JSON.stringify(result)
            response.setHeader("Content-Type","application/json");
            response.write(data);
        }
     else
        {
            console.log(error);
            response.setHeader("Content-Type","application/json");
            response.write(error);
        }
        response.end();
    })
})


module.exports = appForcategory;
