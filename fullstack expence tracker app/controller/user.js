const mysql = require('mysql2');
const path = require('path');
const bcrypt = require('bcrypt');



const connection = mysql.createPool({
    host:'localhost',
    user: 'root',
    password:'1pl@teGolibaje',
    database:'expense'
})

//For showing signup page
exports.signup = (req,res,next)=>{
    res.status(200).sendFile(path.join(__dirname,'../','public','signup.html'));
};


exports.postData = (req,res,next)=>{
    const {name,email,password} = req.body;
    //to check if all the inputs are filled
    if(name.length>0 && email.length>0 && password.length>0){
        //To check if email exists
        connection.query(`SELECT email FROM user WHERE email='${email}'` ,(err,result)=>{
            if(err){
                res.status(500).send(err);
            }else{
                if(result.length <= 0){             
                    const saltRound = 10;
                    bcrypt.hash(password,saltRound,(err,hash)=>{
                        if(err){
                            console.log('enryption error');
                        }else{
                            //if email is new then creates account        
                            connection.query('INSERT INTO user (name,email,password) VALUES (?,?,?)',
                            [name,email,hash],
                            (err,result)=>{
                                if(err){
                                    res.status(500).send(err);
                                }
                                else{
                                    res.redirect('/user/login');
                                    console.log(1); 
                                }
                            })
                                }
                            });


                  

                }else{
                    console.log(2);
                    res.send('fail');
                }
            }
        });
    }
    else{
        console.log(3);
        res.send('length');
    }
};

//to show login page for old users
exports.getlogin = (req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','public','login.html'));
};

//to validate login page
exports.postlogin = (req,res,next)=>{
    console.log(req);
    const {email,password} = req.body;
    
    //to check password and email
    connection.query(`SELECT email,password FROM expense.user WHERE email='${email}';`,
    (err,result)=>{
        if(err){
            res.status(500).send('error');
            console.log(err);
        }
        else if(result.length <=0 ){
            res.send('incorrect');
        }else{
            
            let hash = result[0].password;
            bcrypt.compare(password,hash,(err,result)=>{
               if(result){
                    res.send(`${hash}`);
               }else{
                    res.send('incorrect');
               }
            });
        }
        
    });


            
};