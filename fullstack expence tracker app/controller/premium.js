const path = require('path');
const bcrypt = require('bcrypt');

const {Expense,User} = require('../model/database');
const { Sequelize } = require('sequelize');



//For showing expense page
exports.getPremiumPage = (req,res,next)=>{
    res.status(200).sendFile(path.join(__dirname,'../','public','premium.html'));

};

exports.getLeaderBoard = async(req,res,next)=>{
    
  try{

    let leaderBoard = await User.findAll({
      attributes:['id','name',  [Sequelize.fn('sum', Sequelize.col('amount')), 'total_expense'] ] ,
      include: [
        {
          model: Expense,
          attributes: []
        }
      ] ,
      group: ['user.id'] ,
      order: [['total_expense', 'DESC']],
    });
    



    res.send(leaderBoard);
  
  }catch(err){
    console.error(err);
  }
  
};
















