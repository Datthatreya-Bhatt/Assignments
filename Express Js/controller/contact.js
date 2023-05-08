const path = require('path');

exports.getContact = (req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','contactus.html'));
};

exports.postContact = (req,res,next)=>{ 
    res.redirect('/success');
};