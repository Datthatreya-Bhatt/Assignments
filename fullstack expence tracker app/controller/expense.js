const path = require('path');
const bcrypt = require('bcrypt');
const mysql = require('mysql2');

let connection = mysql.createPool({
    host:'localhost',
    user: 'root',
    password:'1pl@teGolibaje',
    database:'expense'
});


//For showing expense page
exports.getData= (req,res,next)=>{
    res.status(200).sendFile(path.join(__dirname,'../','public','expense.html'));
};

exports.getExpenseData = (req,res,next)=>{
    connection.query('SELECT * FROM expense.userexpense',
    (err,result)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send(result);
            
        }
    });
};


exports.postData = (req,res,next)=>{
    let {amount,description,category} = req.body;
    if(amount.length>0 && description.length>0 && category.length>0){
        connection.query(`INSERT INTO expense.userexpense(amount,description,category) VALUES(?,?,?)`,
        [amount,description,category],
        (err,result)=>{
            if(err){
                res.send(err);
            }
            else{
                res.send('success from postData');
            }
        });
    }
};

exports.deleteData = (req,res,next)=>{
    let id = req.params.id;
    console.log(id);
    connection.query(`DELETE FROM userexpense WHERE id=${id} `,
    (err,result)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send('success from deleteData');
        }
    });
};
