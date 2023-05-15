const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: 'mypassword',
    database:"users"
});

//handeling post request
exports.createUser = (req, res, next) => {
    console.log('post request on /');
    const {name,number,email} = req.body;

    connection.query('INSERT INTO user (name,number,email) VALUES (?,?,?)',
    [name,number,email],
    (err,result)=>{
        if(err){
            console.log(`error occured:${err}`);
            res.status(500).json({
                message: "Error occured",
                error: err
            });
        }else{
            console.log(`operation success:${result}`);
            res.status(200).json({
                message: "User created successfully",
                result: result
            });
        }
    });
};

//handeling get request
exports.getAllUsers = (req, res, next) => {
    console.log('get request on /');
    connection.query('SELECT * FROM user',
    (err,result)=>{
        if(err){
            console.log(`error occured:${err}`);
            res.status(500).json({
                message: "Error occured",
                error: err
            });
        }else{
            console.log(`operation success:${result}`);
            res.status(200).send(result);
        }
    });
};

//handeling delete request
exports.deleteUser = (req, res, next) => {
    console.log('delete request on /delete/id');
    console.log(req.params.id);
    const id = req.params.id;
    connection.query(`DELETE FROM user WHERE user.id = ${id}`,
    (err,result)=>{
        if(err){
            console.log(`error occured:${err}`);
            res.status(500).json({
                message: "Error occured",
                error: err
            });
        }else{
            console.log(`operation success:${result}`);
            res.status(200).json({
                message: "User deleted successfully",
                result: result
            });
        }
    });
};
