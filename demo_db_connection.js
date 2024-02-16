const { constants } = require('buffer');
var mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Passw0rd",
  database: "domain",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
});

module.exports= con