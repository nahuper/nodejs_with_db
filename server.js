// Juan A. Villalpando
// http://kio4.com/arduino/117_Wemos_NodeJs_MySQL.htm

//-------------------------------------------------------------------------------------
/*var url = require('url');*/
/*var http = require('http');*/
/*var querystring = require('querystring');*/
var mysql = require('mysql');
/*const { appendFile } = require('fs');*/




//-------------------------------------------------------------------------------------
/*function requestHandler(request, response) {
    var uriData = url.parse(request.url);
    var pathname = uriData.pathname; 
    var query = uriData.query;
    var queryData = querystring.parse(query);*/


const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.port || 3000;

app.use(cors());

app.use(express.json());

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`);
});
	
	var con = mysql.createConnection({
	  host: "127.0.0.1",
	  user: "root",
	  password: "abcd1234",
	  database: "mydb" // Data Base name.
	});


  app.post("/save_dat", (req, res) => {
    const name = req.body.name;
    const address = req.body.address;
    const response = req.body;

    if(name!=="" && address!==""){
      con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO customers (name, address) VALUES ('"+name+"','"+address+"')";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log(name);
          res.end("Datos agregados a la base.");
        });
        res.send(response);
        con.end();
      });
    }else{
      res.status(404).send({message: "Los campos no pueden estar vacíos"});
    }
  })


  app.get("/get_dat", (req, res) => {
    con.connect(function(err){
      console.log("Conected!");
      let sql = "SELECT name, address FROM customers";
      con.query(sql, function(err, result){
        if (err) throw err;
        console.log(result)
        res.send(result);
      })
    })
  })

  app.get("/get_5", (req, res) => {
    con.connect(function(err){
      console.log("Conected!");
      let sql = "SELECT name, address FROM customers WHERE id > " + con.escape(5);
      con.query(sql, function(err, result){
        if(err) throw err;
        console.log(result)
        res.send(result);
      })
    })
  })

  
/*
    //--- INSERT ------------------------------------------------------------------------------
    if (pathname == '/insertar') {	
var name = queryData.name;
var address = queryData.address;
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO customers (name, address) VALUES ('"+name+"','"+address+"')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(name);
	response.end("Datos agregados a la base.");
  });
  con.end();
});
    //--- DELETE ------------------------------------------------------------------------------
  } else if (pathname == '/borrar') {
var name = queryData.name;
con.connect(function(err) {
  if (err) throw err;
   var sql = "DELETE FROM customers WHERE name ='"+name+"'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
	response.end("Datos borrados.");
  });
   con.end();
});	
    //--- UPDATE ------------------------------------------------------------------------------
  } else if (pathname == '/actualizar') {
var name = queryData.name;
var address = queryData.address;
con.connect(function(err) {
  if (err) throw err;
   var sql = "UPDATE customers SET address = '"+address+"' WHERE name ='"+name+"'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records updated: " + result.affectedRows);
	response.end("Datos modificados.");
  });
   con.end();
});	
    //---- SELECT WHERE -----------------------------------------------------------------------
  } else if (pathname == '/buscar') {
var name = queryData.name;
var address = queryData.address;
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers WHERE name = '"+name+"'", function (err, result) {
    if (err) throw err;
    console.log(result);
	response.end(JSON.stringify(result));
  });
   con.end();
});		
    //--- SELECT ------------------------------------------------------------------------------
  } else if (pathname == '/ver') {
var name = queryData.name;
var address = queryData.address;
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers ", function (err, result) {
    if (err) throw err;
    console.log(result);
    response.end(JSON.stringify(result));
  });
      con.end();
});		
    //---------------------------------------------------------------------------------
    } else { 
            response.end("Wrong order.");
    }
    //---------------------------------------------------------------------------------
}
var server = http.createServer(requestHandler);
server.listen(3000); 
console.log('Server listening on port 3000');*/