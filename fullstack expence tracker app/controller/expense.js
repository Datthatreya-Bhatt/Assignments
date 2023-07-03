//Change all url name to our aws url in frintend js file

// __/\\\\\\\\\\\\\____/\\\\____________/\\\\____/\\\\\\\\\_____
//  _\/\\\/////////\\\_\/\\\\\\________/\\\\\\__/\\\///////\\\___
//   _\/\\\_______\/\\\_\/\\\//\\\____/\\\//\\\_\///______\//\\\__
//    _\/\\\\\\\\\\\\\/__\/\\\\///\\\/\\\/_\/\\\___________/\\\/___
//     _\/\\\/////////____\/\\\__\///\\\/___\/\\\________/\\\//_____
//      _\/\\\_____________\/\\\____\///_____\/\\\_____/\\\//________
//       _\/\\\_____________\/\\\_____________\/\\\___/\\\/___________
//        _\/\\\_____________\/\\\_____________\/\\\__/\\\\\\\\\\\\\\\_
//         _\///______________\///______________\///__\///////////////__
//pm2 is just for fun 

const path = require('path');

const { Sequelize  } = require('sequelize');
const {User} = require('../model/database'); 
const {Expense} = require('../model/database');
const {Orders} = require('../model/database');


require('dotenv').config();


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER_NAME,  process.env.SQL_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  });

//For showing expense page
exports.getData= (req,res,next)=>{
    res.status(200).sendFile(path.join(__dirname,'../','public','expense.html'));

};

exports.getExpenseData = async (req,res,next)=>{
   
    let id = req.userID;
    let page = Number( req.params.page);
    let limit = Number(req.query.limit);
    
    try{

        const user = await Expense.findAll({
            offset: (page-1)*limit,
            limit: limit,
            where:{
                userId:id
            }
        });
        let count = await Expense.count({
            where: {
                userId: id
            }
        });
        count = Math.ceil(count/limit);
        let obj = {
            count: count,
            page: page
        }
  
        if(user){
            res.send({user: user,obj:obj});
        }
        else{
            res.send('fail');
        }
    
    }catch(err){
        console.error(err);
    }


};


exports.postData = async (req,res,next)=>{
    let {amount,description,category} = req.body;
    const t = await sequelize.transaction();

    if(amount.length>0 && description.length>0 && category.length>0){
        let id = req.userID;
        try{

            //updating expense table
            const expense = await Expense.create(
                {
                    amount:amount,
                    description:description,
                    category: category,
                    userId : id,
                   
                },
                { transaction: t}
            )
            if(expense){
                res.send('success from postData');
                console.log('success from postData');
                
            }
            else{
                res.send('expense/postData error');
                console.log('expense/postData error');
            }


            //updating user table
            let user = await User.findOne({
                attributes: ['id','total_expense'],
                where:{
                    id: id
                }
                
            })


            let ex = Number(user.total_expense)  + Number(amount);

            let update = await User.update({
                total_expense: ex
            },{
                where: {
                    id: id
                },
                transaction: t
                
            })

            if(update){
                await t.commit();
            }




        }catch(err){
            console.error(err);
            await t.rollback();
        }

    }
};

exports.deleteData = async (req,res,next)=>{
    let id = req.userID;
    let entry = req.params.id;
    const t = await sequelize.transaction();
    let amount = 0;
 try{

    //for getting amount from Expense table
    try{

        let data  = await Expense.findOne({
            attributes:['amount'],
            where:{
                userId:id,
                id:entry
            }
        });

        //for getting data from user table

        let data2 = await User.findOne({
            attributes: ['total_expense'],
            where: {
                id: id
            }
        })

        amount = Number(data2.total_expense) - Number(data.amount);

        if(data && data2){
            //console.log('no error');
        }
        else{
            console.error('error in delete');
        }


    }catch(err){
        console.error(err);
       
    }


    

    //for updating database
    try{

         
        const user = await User.update({
            total_expense: amount
        },{
            where:{
                id: id
            },
            transaction:t
        })

        if(user){
           console.log('success');
        }

    }catch(err){
        console.error(err);
      
    }



    
    //for deleting from database
    try{
        const user = await Expense.destroy({
            where:{
                userId:id,
                id:entry
            },
            transaction:t
        });

        if(user){
            res.send('success');
           
        }else{
            res.send('fail');
        }

    }
    catch(err){
        console.error(err);
      
    };


    await t.commit();

}
catch(err){
    console.error(err);
    await t.rollback();
  
};





};







exports.isPremium = async(req,res,next)=>{
    let id = req.userID;

    try{

        let data = await Orders.findOne({
            where:{
                userId: id,
                status: 'SUCCESS'
            }
        })

        if(data){
            //res.send("PREMIUM");
            res.redirect('/user/premium');
            console.trace('Logging');
            
        }else{
            console.log('NOT A PREMIUM USER');
        }


    }catch(err){
        console.error(err);
    }
};
