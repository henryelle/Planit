const express = require("express");
const bodyParser = require('body-parser');

const connection = require('./db');
const app = express();

const authenticateController=require('./controllers/authenticate-controller');
const registerController=require('./controllers/register-controller');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.get('/', function (req,res){
    res.sendFile(__dirname + "/" + "index.html");
})

app.get('/login.html', function(req,res){
    res.sendFile(__dirname + "/" + "login.html");
})

app.post('/api/register', registerController.register);
app.post('/api/authenticate', authenticateController.authenticate);

console.log(authenticateController);
app.post('/controllers/register-controller', registerController.register);
app.post('/controllers/authenticate-controller', authenticateController.authenticate);
