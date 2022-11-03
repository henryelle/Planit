const mysql = require("mysql");

const connection = mysql.createConnection({
  host: '199.231.187.232',
  database: 'Planit_You',
  user: 'hosanna',
  password: 'gillian'
});


connection.connect((err) =>{
  if (!err){
    console.log("Connection has been established!")
  }
  else{
    console.log("Connection can't be established!");
  }
  });
module.exports = connection;