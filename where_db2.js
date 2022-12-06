var config = require('./connect_db.js');
var con = config.connection;

con.connect(function(err){
    if(err) throw err;
    con.query("SELECT * FROM customers WHERE address LIKE 'S%'", function(err, result){
        if(err) throw err;
        console.log(result);
    })
})