let config = require('./connect_db.js');
let con = config.connection;


    
con.connect(function(err){
    if(err) throw err;
    con.query("SELECT * FROM customers ORDER BY name", function (err, result){
        if(err) throw err;
        console.log(result);
    });
});