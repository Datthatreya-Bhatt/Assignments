const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.auth = (req,res,next)=>{
    
    let token = req.header('Authorization');
    

    jwt.verify(`${token}`,process.env.JWT_S_KEY,(err,decode)=>{
        if(err){
            console.trace(err);
            res.redirect('/user/login');
        }else{
            req.userID = decode.id;
            next();
        }
    });
    
};