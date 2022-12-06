let mysql = require('mysql');

let con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "abcd1234",
    database: "mydb"
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    let sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function(err, result){
        if(err) throw err;
        console.log("Table created");
    });
  });