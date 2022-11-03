const Cryptr = require('cryptr');
cryptr = new Cryptr()

const connection = require('./../db');
module.exports.authenticate=function(req,res){
    var accountname = req.body.accountname;
    var password = req.body.password;
    //password= bcrypt.compare(plaintextPassword, hash, function(err, result){
        //if (result){

       // }
   // });

    connection.query('SELECT * FROM users WHERE AccountName = ?',[accountname], function(error,results,fields){
        if(error){
            res.json({
                status:false,
                message: 'An error with the query has occurred'
            })
        }else{
            if(results.length > 0){
                decryption = cryptr.decrypt(results[0].password);
                if(password===decryption){
                    res.json({
                        status:true,
                        message:"Authentication successful."
                    })
                }else{    
                    res.json({
                        status:false,
                        message:"Email and password do not match."
                    });
                }
            
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