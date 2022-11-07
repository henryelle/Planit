const router = require("express").Router;
const {body} = require("express-validator");

const {
    homePage,
    login,
    loginPage,
    signup,
    signupPage,
} = require("./controllers/userController");

const ifNotLoggedIn = (req,res,next) => {
    if(req.session.userID){
        return res.redirect('/login');
    }
    next();
}

const ifLoggedIn = (req,res,next) => {
    if(req.session.userID){
        return res.redirect('/');
    }
    next();
}

router.get('/', ifNotLoggedIn, homePage);

router.get("/login", ifLoggedIn, loginPage);
router.post("/login", ifLoggedIn)