const mysql = require('mysql2');

const connection = mysql.createPool({
    host:'localhost',
    user: 'root',
    password:'1ol@teGolibaje',
    database:'expense'
})

exports.postData = (req,res,next)=>{
    console.log(req.body);
    res.send('success')
}