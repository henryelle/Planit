const Cryptr = require('bcrypt');
const express = require("express");
const connection = require('./../db.js');

console.log("controller says hi");

module.exports.register= function (req,res){
        const passCrypt = Cryptr.encrypt(req.body.password);
        var users={
            "AccountName":req.body.username,
            "Email":req.body.email,
            "Pass": passCrypt,
            "FirstName": req.body.firstname,
            "LastName": req.body.lastname
        }
    
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