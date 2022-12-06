let config = require('./connect_db.js');
let con = config.connection;


    
    let adr = 'Mountain 21';
    let sql = 'SELECT * FROM customers WHERE address = ' + con.escape(adr);
    
    con.query(sql, function(err, result){
        if(err) throw err;
        console.log(result);
    })