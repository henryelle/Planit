Hosanna
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "199.231.187.232",
  database: "Planit_You",
  user: "hosanna",
  password: "gillian"
});

connection.connect((err) =>{
  if (err) throw err;
  connection.query("SELECT * FROM users", function(err, result, fields) {
    if (err) throw err;
    console.log("Connection has been established");
  });
});
module.exports = connection;

// import mysql from './node_modules/mysql'

// export var con = mysql.createConnection({
//   host: "199.231.187.232",
//   user: "hosanna",
//   password: "*"
// });

// export default con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE mydb1", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });

// function showCustomer() {
//   var xhttp;
//   xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//     document.getElementById("main-div").innerHTML = this.responseText;
//     }
//   };
//   xhttp.open("GET", "connect_test.php", true);
//   xhttp.send();
// }
main
