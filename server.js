
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
	  password: "",
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
