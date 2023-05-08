const path = require('path');
exports.useError = (req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'../','views','pagenotfound.html'));
};