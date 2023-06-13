const path = require('path');
const bcrypt = require('bcrypt');

const {Expense} = require('../model/database');



//For showing expense page
exports.getPremiumPage = (req,res,next)=>{
    res.status(200).sendFile(path.join(__dirname,'../','public','premium.html'));

};

exports.getLeaderBoard = async(req,res,next)=>{
    
    try{

        let data = await Expense.findAll();
        if(data){
            console.log(1111111111111111111111111111111111111111,data[0].userexpense);
        }
        else{
            console.log('no data in getLeaderBoard premium controller');
        }

    }catch(err){
        console.error(err);
    }
};
















