const express = require("express")
const app = express();
const dotenv = require("dotenv");

dotenv.config({ path: './.env'})

app.set('view-engine', 'ejs')

app.use(sesssion({
  secret: '121622infotech',
  resave: true,
  saveUninitialized: true
}));

const connection = mysql.createConnection({
  host: '199.231.187.232',
  database: 'Planit_You',
  user: 'hosanna',
  password: 'gillian'
});


connection.connect((err) =>{
  if (err) throw err;
  connection.query("SELECT * FROM users", function(err, result, fields) {
    if (err) throw err;
    console.log("Connection has been established!");
  });
});
module.exports = connection;