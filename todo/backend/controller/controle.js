const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: '1pl@teGolibaje',
    database: 'todo'
});

exports.getData = (req,res,next)=>{
    connection.query('SELECT * FROM tasks',
    (err,result)=>{
        if(err){
            res.send(err);
        }else{
            res.send(result);
        };
    })
};


exports.postData = (req,res,next)=>{
    const {task,description,flag} = req.body;
    connection.query('INSERT INTO tasks (task,description,flag) VALUES (?,?,?)',
    [task,description,flag],
    (err,result)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send('success');
        }
    })
};


exports.putData = (req,res,next)=>{
    const {id} = req.params;
    const {flag} = req.body; 
    console.log(id,flag);
    connection.query(`UPDATE tasks SET flag =${flag} WHERE id = ${id} `,
    (err,result)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send('success');
        }
    })
};


exports.deletetData = (req,res,next)=>{
    const {id} = req.params;
    console.log(req.params);
    connection.query(`DELETE FROM tasks WHERE id = ${id} `,
    (err,result)=>{
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            res.send('success');
        }
    });
};