let mysql = require('mysql');

config = {
  host: "127.0.0.1",
  user: "root",
  password: "abcd1234",
  database: "mydb"
}

let connection = mysql.createConnection(config);
connection.connect(function(err){
  if (err){
    console.log('Error connecting:' + err.stack);
  }
  console.log('Connected successfully to DB.');
});

module.exports ={
     connection : mysql.createConnection(config) 
} 