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
    let sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    con.query(sql, function(err, result){
        if(err) throw err;
        console.log("1 record inserted");
    });
  });