const router = require("express").Router();
const {body} = require("express-validator");

const {
    homePage,
    login,
    loginPage,
    signup,
    signupPage,
} = require("./controllers/userController.js");

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
router.post("/login", ifLoggedIn,[
    body("_email", "Invalid email address")
    .notEmpty()
    .escape()
    .trim()
    .isEmail(),
    body("_password", "The password length must be at a mininum of 8 characters")
    .notEmpty()
    .trim()
    .isLength({min: 8})
],
    login
);
router.get("/signup", ifLoggedIn, signupPage);
router.post("/signup", ifLoggedIn,
[
    body("_name", "The name length must be at a mininum of 3 characters")
    .notEmpty()
    .escape()
    .trim()
    .isLength({min: 3}),
    body("_email", "Invalid email address")
    .notEmpty()
    .escape()
    .trim()
    .isEmail(),
    body("_password", "The password length must be at a mininum of 8 characters")
    .notEmpty()
    .trim()
    .isLength({min: 8})
],
    signup
    );

router.get('/logout', (req,res,next) => {
    req.session.destroy((err) => {
        next(err);
    });
    res.redirect('/login');
});

module.exports = router