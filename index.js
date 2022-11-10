const express = require("express");
const session = require('express-session');
const path = require('path');
const routes = require('./route.js');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(session({
    name: 'planit',
    secret: 'IT121622',
    resave: false,
    saveUninitialized: true,
    cookie:{
        maxAge: 3600 * 1000,
    }
}));

app.use(express.static(path.join(__dirname, 'style')));
app.use(routes);

app.use((err, req, res, next) => {
    return res.send('Server Error')
});

app.listen(3000, () => console.log("Server runs on port 3000"));