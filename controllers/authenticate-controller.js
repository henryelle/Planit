const bcrypt = require('bcrypt');

const connection = require('./../db.js');
module.exports.authenticate=function(req,res){
    var accountname = req.body.accountname;
    var password = req.body.password;

    connection.query('SELECT * FROM users WHERE AccountName = ?',[accountname], function(error,results,fields){
        if(error){
            res.json({
                status:false,
                message: 'An error with the query has occurred'
            })
        }else{
            if(results.length > 0){
                bcrypt.compare(password, results[0].password, function(err, hashMatch){
                    if(hashMatch){
                    res.json({
                        status:true,
                        message:"Authentication successful."
                    });
                }else{    
                    res.json({
                        status:false,
                        message:"Email and password do not match."
                    });
                }
            });
        }
        else{
            res.json({
                status:false,
                message: "The email does not exist."
            });
        }
    }
    });
}