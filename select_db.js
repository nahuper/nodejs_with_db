var config = require('./connect_db.js');
var con = config.connection;

con.connect(function(err){
    if(err) throw err;
    con.query("SELECT name, address FROM customers", function(err, result, fields){
        if(err) throw err;
        console.log(result);
    })
})