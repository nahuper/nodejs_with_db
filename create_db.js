let mysql = require('mysql');

let con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "abcd1234"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function(err, result){
    if(err) throw err;
    console.log("Database created");
  })
});