const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const sk = require('../credentials/jwtSecret');

const {User} = require('../model/database'); 

//For showing signup page
exports.signup = (req,res,next)=>{
    res.status(200).sendFile(path.join(__dirname,'../','public','signup.html'));
};


exports.postData = async(req,res,next)=>{
    const {name,email,password} = req.body;

    //to check if all the inputs are filled
    if(name.length>0 && email.length>0 && password.length>0){
        //To check if email exists
        try {
            const user = await User.findOne({
              where: {
                email: email,
              },
              attributes: ['email'],
            });

            console.log(user,' user controle line 33');
            if (user) {
                res.send('fail');
                const email = user.email;
                
            }
            else {

                console.log('No user found with the input email');

                //creating new user
                const saltRound = 10;
                bcrypt.hash(password,saltRound,async(err,hash)=>{
                    if(err){
                        console.log('enryption error');
                    }
                    else{
                        try {
                            const user = await User.create({
                              name: name,
                              email: email,
                              password: hash,
                            });
                        
                            console.log('User created successfully:', user);
                            res.send('success');

                        } catch (error) {
                            console.error('Error creating user:', error);
                        }
                    }  
              
                });
                //
            }
            
        } catch (error) {
        console.error(error);
        }
    }else{
        res.send('length');
    }        
};





//to show login page for old users
exports.getlogin = (req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','public','login.html'));
};

//to validate login page
exports.postlogin = async(req,res,next)=>{
    const {email,password} = req.body;
    
    //to check password and email

    try{
        const user = await User.findOne({
            where:{
                email: email 
            }
        })

        if(user){
            let hash = user.dataValues.password;
            bcrypt.compare(password,hash,async(err,result)=>{
               if(result){
                    try{
                        const user = await User.findOne({
                            where:{
                                password:hash
                            }
                        })
                        if(user){
                            let id = user.dataValues.id;
                            let token = jwt.sign({id:id},sk);
                            res.status(201).send(token);
                            
                        }else{
                            console.error('error at postlogin')
                        }
                    }catch(err){
                        res.status(500);
                        console.log(err);
                    }
                    
               }
               else if(err){
                console.log(err);
               }
               else{
                
                    res.send('incorrect');
               }
            });
        }
        else if(user === null){
             res.send('incorrect');
        }
        else{
            res.status(500).send('error');
            console.log(err);
        }


    }catch(err){
        console.log('first try block error',err);
    }



            
};