var config = require('./connect_db.js');
var con = config.connection;

con.connect(function(err){
    if(err) throw err;
    let sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
    con.query(sql, function(err, result){
        if(err) throw err;
        console.log(result.affectedRows + " record(s) updated");
    });
});