const path = require('path');
const bcrypt = require('bcrypt');
const mysql = require('mysql2');



//For showing signup page
exports.getdata= (req,res,next)=>{
    res.status(200).sendFile(path.join(__dirname,'../','public','expense.html'));
};





