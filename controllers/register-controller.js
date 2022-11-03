const bcrypt = require('bcrypt');
const express = require("express");
const connection = require('./../db');

module.exports.register= function (req,res){
    var encryption = bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(plaintextPassword, salt, function(err, hash){
    
        })
    });
    var users={
        "accountname":req.body.name,
        "email":req.body.email,
        "password": encryption,
        "firstname": req.body.firstname,
        "lastname": req.body.lastname
    }
    connection.query('INSERT INTO users SET ?', users, function(error,results,fields){
        if(error){
            res.json({
                status:false,
                message: 'User could not be entered.'
            })
        }
        else{
            res.json({
                status:true,
                data:results,
                message: 'The user was created successfuly!'
            })
        }
    });
}