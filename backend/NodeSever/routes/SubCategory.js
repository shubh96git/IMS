const { error } = require("console");
const express = require(`express`);
const { request } = require("http");
const mysql = require(`mysql`)
const app = express();
const config = require(`config`)
const appForsubcategory = express.Router();

var connection = mysql.createConnection({
        host     : config.get('host'),
        user     :  config.get('user'),
        password :  config.get('password'),
        database :  config.get('database')
       });



//EndPOint For Adding a New SUBCategory
//POST:localhost:5000/subcatgry/2
appForsubcategory.post("/:id",(request,response) =>{
    var query =    `insert into sub_categories (name,category_id) values ('${request.body.name}',${request.params.id})`;
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




module.exports = appForsubcategory;
