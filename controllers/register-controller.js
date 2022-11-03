const Cryptr = require('cryptr');
const express = require("express");
const connection = require('./../db');

module.exports.register= function (req,res){
    var encryption = Cryptr.encrypt(req.body.password);
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