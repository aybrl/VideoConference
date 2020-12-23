const mysql = require('mysql');

const connection = mysql.createConnection({ 
    host     : 'localhost',
    user     : 'root',
    password : process.env.DB_CONNECT,
    database : 'videoconferencedb'
});

module.exports = connection