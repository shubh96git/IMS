const { error } = require("console");
const express = require(`express`);
const { request } = require("http");
const mysql = require(`mysql`)
const app = express();
const config = require(`config`)
const appForcategory = express.Router();

var connection = mysql.createConnection({
        host     : config.get('host'),
        user     :  config.get('user'),
        password :  config.get('password'),
        database :  config.get('database')
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




module.exports = appForcategory;
