const jwt = require('jsonwebtoken');
const sk = require('../credentials/jwtSecret');

exports.auth = (req,res,next)=>{
    
    let token = req.header('Authorization');
    


    jwt.verify(`${token}`,sk,(err,decode)=>{
        if(err){
            console.trace(err);
            res.redirect('/user/login');
        }else{
            req.userID = decode.id;
            next();
        }
    });
    
};