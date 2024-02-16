var http = require('http');
var fs = require('fs');
var mysql = require('mysql');
var con= require("./demo_db_connection")

http.createServer(function(req, res) {
    console.log(req.url);
     let domeen = " "
     let email = " "

let [path, queryString] = req.url.split("?")

 let queryParams = new URLSearchParams(queryString)

    let data = " ";
    if (path == "/") {
        data = fs.readFileSync("./domeen.html", "utf8");
    }
    if (path == "/domeen-2.html") {
        data = fs.readFileSync("./domeen-2.html", "utf8");
    }
    if (path == "/domeen-3.html") {
        var sql = `INSERT INTO client (name) VALUES ('${mysql_real_escape_string(queryParams.get('name'))})`;

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted", queryParams.get('name'));
  });
    
        data = fs.readFileSync("./domeen-3.html", "utf8");
    }

    

    res.write(data);
    res.end();

}).listen(8080);


function mysql_real_escape_string (str) {
    return str.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, function (char) {
        switch (char) {
            case "\0":
                return "\\0";
            case "\x08":
                return "\\b";
            case "\x09":
                return "\\t";
            case "\x1a":
                return "\\z";
            case "\n":
                return "\\n";
            case "\r":
                return "\\r";
            case "\"":
            case "'":
            case "\\":
            case "%":
                return "\\"+char; // prepends a backslash to backslash, percent,
                                  // and double/single quotes
            default:
                return char;
        }
    });
}