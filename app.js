export var mysql = require('mysql');

export var con = mysql.createConnection({
  host: "199.231.187.232",
  user: "hosanna",
  password: "*"
});

export default con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb1", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
