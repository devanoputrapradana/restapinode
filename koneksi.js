var mysql = require('mysql');

//buat koneksi database
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_noderestapi'
});

conn.connect((err) =>{
    if(err) throw err;
    console.log('Mysql Terkoneksi!');
});

module.exports = conn;