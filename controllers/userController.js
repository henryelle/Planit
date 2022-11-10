const {validationResult} = require("express-validator");
const bcrypt = require('bcryptjs');
const connection = require(".././db.js");

exports.homePage = async(req,res,next) => {
    const [row] = await connection.execute("SELECT * FROM users WHERE 'UserID' = ?", [req.session.userID]);

    if(row.length !== 1){
        return res.redirect('/logout');
    }
    res.render('home',{
        user: row[0]
    });
}

exports.signupPage = (req, res, next) => {
    res.render("signup");
};

exports.signup = async (req, res, next) => {
    const errors = validationResult(req);
    const {body} = req;

    if(!errors.isEmpty()){
        return res.render('signup', {
            error: errors.array()[0].msg
        });
    }
    try{
        const [row] = await connection.execute(
            "SELECT * FROM users WHERE 'AccountName' = ?", [body._username]
            );
        if(row.length >= 1){
            return res.render('signup', {
                eerror: "This username is already being used."
            });
        }

        const bcrypt_hash = await bcrypt.hash(body._password, 12);
        const [rows] = await connection.execute(
            "INSERT INTO 'users' ('AccountName','FirstName','LastName','Email','Pass') VALUES(?,?,?)", 
            [body._username, body._FirstName, body._LastName, bcrypt_hash, body._email]
            );
        if(rows.affectedRows !== 1){
            return res.render('signup', {
                error: "User creation is not successful."
            });
        }
        res.render('signup', {
            msg: "User creation is successful."
        });
    }
    catch(e){
        next(e);
    }
};

exports.loginPage = (req, res, next) => {
    res.render("login");
};

exports.signup = async (req, res, next) => {
    const errors = validationResult(req);
    const {body} = req;

    if(!errors.isEmpty()){
        return res.render('login', {
            error: errors.array()[0].msg
        });
    }
    try{
        const [row] = await connection.execute(
            "SELECT * FROM users WHERE 'AccountName' = ?", [body._username]
            );
        if(row.length >= 1){
            return res.render('login', {
                eerror: "This username is already being used."
            });
        }

        const checkpass_hash = await bcrypt.compare(body._password, row[0].Pass);

        if(checkpass_hash == true){
            req.session.userID = row[0].UserID;
            return res.redirect('/');
        }
        res.render('login', {
            error: "The password you entered is incorrect."
        });
    }
    catch(e){
        next(e);
    }
};