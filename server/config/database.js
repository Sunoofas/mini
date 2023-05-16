const config = require('./db.config');
const pgp = require('pg-promise');

const connect = config.db_access;
const db1= pgp(connect);
db1.queryResult('Select * from mini_table', (err, res)=>{
    if(!err){
        console.log(res.body);
    }
    else{
        console.log(err);
    }
})
module.exports = db1;