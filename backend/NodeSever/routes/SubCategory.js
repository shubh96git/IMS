const { error } = require("console");
const express = require(`express`);
const { request } = require("http");
const mysql = require(`mysql`)
const app = express();
const appForsubcategory = express.Router();

var connection =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'manager',
    database:'inventory_mgmt_system'
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

	//EndPoint to get a list of All SUB Categories
	//GET:localhost:5000/subcatgry
	appForsubcategory.get("/",(request,response) =>{
	connection.query("select * from sub_categories",(error,result) =>
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

//EndPoint to get a list of All SUBCategories  where categoryID supplied
//GET:localhost:5000/subcatgry/2
appForsubcategory.get("/:id",(request,response) =>{
    var query = `select * from sub_categories where category_id=${request.params.id}`;
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
