const Cryptr = require('cryptr');
cryptr = new Cryptr()

const connection = require('./../db');
module.exports.authenticate=function(req,res){
    var email = req.body.email;
    var password=req.body.password;

    connection.query('SELECT * FROM users WHERE email = ?',[email], function(error,results,fields){
        if(error){
            res.json({
                status:false,
                message: 'An error with the query has occurred'
            })
        }
        else{
            res.json({
                
            })
        }
    })
}