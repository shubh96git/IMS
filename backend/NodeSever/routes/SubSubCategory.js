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



module.exports = appForsubsubcategory;
