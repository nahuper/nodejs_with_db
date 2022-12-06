let config = require('./connect_db.js');
let con = config.connection;

con.connect(function(err){
    if(err) throw err;
    let sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
    con.query(sql, function(err, result){
        if(err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
    });
});