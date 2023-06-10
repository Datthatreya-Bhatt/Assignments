const jwt = require('jsonwebtoken');

exports.auth = (req,res,next)=>{
    
    let token = req.header('Authorization');
    


    jwt.verify(`${token}`,'secretKey',(err,decode)=>{
        if(err){
            console.error("errorr at auth 11 >>>>>>",err);
            res.redirect('/user/login');
        }else{
            console.log("ans at auth 14>>>>>>",decode);
            req.userID = decode.id;
            next();
        }
    });
    
};