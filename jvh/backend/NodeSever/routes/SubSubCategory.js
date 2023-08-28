const { error } = require("console");
const express = require(`express`);
const { request } = require("http");
const mysql = require(`mysql`)
const app = express();
const appForsubsubcategory = express.Router();

var connection =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'manager',
    database:'inventory_mgmt_system'
});

    //EndPoint to get a list of All SUB SUB Categories
    //GET:localhost:5000/subsubcatgry
    appForsubsubcategory.get("/",(request,response) =>{
    connection.query("select * from sub_sub_categories",(error,result) =>
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

//GET:localhost:5000/subsubcatgry/11
appForsubsubcategory.get("/:id",(request,response) =>{
    var query = `select * from sub_sub_categories where sub_category_id=${request.params.id}`;
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

//EndPOint For Adding a New subSUBCategory
//POST:localhost:5000/subsubcatgry/11
appForsubsubcategory.post("/:id",(request,response) =>{
    var query =    `insert into sub_sub_categories (name,sub_category_id) values ('${request.body.name}',${request.params.id})`;
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

//EndPoint for Editing subSubcategory
//PUT:localhost:5000/subcatgry/2/15
appForsubsubcategory.put('/:sub_category_id/:id',(request,response) =>{
    var query = `update sub_sub_categories set name = '${request.body.name}' where sub_category_id=${request.params.sub_category_id} and id =${request.params.id}`;
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

//EndPoint For Deleting a SUBsubCategory
//DELETE:localhost:5000/category/7 
appForsubsubcategory.delete("/:sub_category_id/:id",(request,response) =>{
    var query = `delete from sub_sub_categories where sub_category_id=${request.params.sub_category_id} and id = ${request.params.id}`;
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


module.exports = appForsubsubcategory;
