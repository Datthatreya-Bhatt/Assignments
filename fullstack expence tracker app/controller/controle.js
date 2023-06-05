const mysql = require('mysql2');
const path = require('path');
const express = require('express');
const app = express();

const connection = mysql.createPool({
    host:'localhost',
    user: 'root',
    password:'1pl@teGolibaje',
    database:'expense'
})

//signup page
exports.signup = (req,res,next)=>{
    res.status(200).sendFile(path.join(__dirname,'../','public','signup.html'));
};

exports.postData = (req,res,next)=>{
    const {name,email,password} = req.body;

    //getting data
    connection.query('SELECT email FROM user',(err,result)=>{
        if(err){
            res.status(500).send(err);
        }else{
            if(result.length <= 0){
                            
                connection.query('INSERT INTO user (name,email,password) VALUES (?,?,?)',
                [name,email,password],
                (err,result)=>{
                    if(err){
                        res.status(500).send(err);
                    }
                    else{
                        res.send('success');
                    }
                })

            }else{
                res.send('fail');
            }
        }
    });
};




exports.getlogin = (req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','public','login.html'));
};