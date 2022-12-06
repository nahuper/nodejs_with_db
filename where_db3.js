let config = require('./connect_db.js');
let con = config.connection;


    let name = 'Amy';
    let adr = 'Mountain 21';
    let sql = 'SELECT * FROM customers WHERE name =  '+ con.escape(name) + 'OR address = ' + con.escape(adr);
    
    con.query(sql, [name, adr], function(err, result){
        if(err) throw err;
        console.log(result);
    })