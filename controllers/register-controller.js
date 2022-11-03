const bcrypt = require('bcrypt');
const express = require("express");
const connection = require('./../db');

console.log("controller says hi");

module.exports.register= function (req,res){
        bcrypt.hash(req.body.password, 10, function(err, bcryption){
        var users={
            "AccountName":req.body.name,
            "Email":req.body.email,
            "Pass": bcryption,
            "FirstName": req.body.firstname,
            "LastName": req.body.lastname
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