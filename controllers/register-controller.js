const bcrypt = require('bcrypt');
const express = require("express");
const connection = require('./../db');

module.exports.register= function (req,res){
        bcrypt.hash(req.body.password, salt, function(err, bcryption){
        var users={
            "accountname":req.body.name,
            "email":req.body.email,
            "password": bcryption,
            "firstname": req.body.firstname,
            "lastname": req.body.lastname
        }
        });
    
    connection.query('INSERT INTO users SET ?', users, function(error,results,fields){
        if(error){
            res.json({
                status:false,
                message: 'User could not be created.'
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