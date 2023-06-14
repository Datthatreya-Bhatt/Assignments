const path = require('path');
const bcrypt = require('bcrypt');

const {Expense,User} = require('../model/database');



//For showing expense page
exports.getPremiumPage = (req,res,next)=>{
    res.status(200).sendFile(path.join(__dirname,'../','public','premium.html'));

};

exports.getLeaderBoard = async(req,res,next)=>{
    
   
  try{

    let temp = await User.findAll();
    let data = await Expense.findAll();

    let obj = {};
    data.forEach((expense)=>{
      
      if(obj[expense.userId]){
        obj[expense.userId] += expense.amount;
      }
      else{
        obj[expense.userId] = expense.amount;
      }
      
    });

    let leaderBoard = [];
    temp.forEach((user)=>{
      leaderBoard.push({name: user.name, total_expense: obj[user.id]});
    });



    // console.log(leaderBoard);
    // console.log(obj);
    
    
    //sorting leaderboard
    for(let i = 1;i<leaderBoard.length;i++){
      let curr = leaderBoard[i];
      let j = i-1;
      while(j>=0 && leaderBoard[j].total_expense<curr.total_expense){
        
        leaderBoard[j+1] = leaderBoard[j];
        j--;
      } 
      leaderBoard[j+1] = curr;
    }

    // console.log(leaderBoard);


    if(data && temp ){
        //console.log(data);
    }
    else{
        console.log('no data in getLeaderBoard premium controller');
    }

    res.send(leaderBoard);
  
  }catch(err){
    console.error(err);
  }
  
};
















