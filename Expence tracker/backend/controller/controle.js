const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1pl@teGolibaje',
    database: 'expense'
});

exports.getData = (req,res,next)=>{
    connection.query('SELECT * FROM data',
    (err,result)=>{
        if(err){
            console.log(err);
            res.send('error occured');
        }
        else{
            res.send(result);
        }
    })
};
exports.postData = (req,res,next)=>{
    const {amount,description,category} = req.body; 
    connection.query('INSERT INTO data (amount,description,category) VALUES(?,?,?)',[amount,description,category],
    (err,result)=>{
        if(err){
            res.send('error');
        }
        else{
            res.send('success');
        }
    })
};

exports.deleteData = (req,res,next)=>{
    const id = req.params.id;
    connection.query(`DELETE FROM data WHERE ID = ${id}`,(err,result)=>{
        if(err){
            res.send('error');
        }
        else{
            res.send('success');
        }
    })
};