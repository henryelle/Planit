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

function showCustomer(str) {
  var xhttp;
  if (str == "") {
    document.getElementByTagName("h1").innerHTML = "";
    return;
  }
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    document.getElementsByTagName("h1").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "connect.php?q="+str, true);
  xhttp.send();
}
