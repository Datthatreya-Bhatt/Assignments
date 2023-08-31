const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1pl@teGolibaje',
    database:'shop'
});
exports.postData = (req,res,next)=>{
    let {item,description,quantity,rate} = req.body;
    console.log(item,description,quantity,rate);
    connection.query('INSERT INTO candy  (item,description,quantity,rate) VALUES (?,?,?,?)',
    [item,description,quantity,rate],
    (err,result)=>{
        if(err){
            console.log(err);
            res.send(err);
        }else{
            res.send('success');
        }
    });
};

exports.getData = (req,res,next)=>{
    connection.query('SELECT * FROM candy',
    (err,result)=>{
        if(err){
            res.send(err);
        }else{
            res.send(result);
        };
    })
};

exports.putData = (req,res,next)=>{
    const {quantity} = req.body;
    const {id} = req.params;
    connection.query(`UPDATE candy SET quantity =${quantity} WHERE id = ${id} `,
    (err,result)=>{
        if(err){
            res.send(err);
        }else{
            res.send('success');
        }
    });
};

