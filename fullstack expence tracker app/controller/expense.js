const path = require('path');
const bcrypt = require('bcrypt');

const {User} = require('../model/database'); 
const {Expense} = require('../model/database');
const {Orders} = require('../model/database');

//For showing expense page
exports.getData= (req,res,next)=>{
    res.status(200).sendFile(path.join(__dirname,'../','public','expense.html'));

};

exports.getExpenseData = async (req,res,next)=>{
   
    // console.log('line 14 >>>>>',req.userID);
    let id = req.userID;
    
    try{

        const user = await Expense.findAll({
            where:{
                userId:id
            }
        });
        if(user){
            res.send(user);
            // console.log(' expense control line 27',user);
        }
        else{
            res.send('fail')
            console.log('expense control line 31',user);
        }
    
    }catch(err){
        console.error(err);
    }


};


exports.postData = async (req,res,next)=>{
    let {amount,description,category} = req.body;

    if(amount.length>0 && description.length>0 && category.length>0){
        let id = req.userID;
        try{

            //updating expense table
            const expense = await Expense.create(
                {
                    amount:amount,
                    description:description,
                    category: category,
                    userId : id
                }
            )
            if(expense){
                res.send('success from postData');
                console.log('success from postData',expense);
            }
            else{
                res.send('expense/postData error');
                console.log('expense/postData error',expense);
            }


            //updating user table
            let user = await User.findOne({
                attributes: ['id','total_expense'],
                where:{
                    id: id
                }
                
            })

            console.log(user,user.total_expense,'line 78');

            let ex = parseFloat(user.total_expense)  +parseFloat(amount);

            let update = await User.update({
                total_expense: ex
            },{
                where: {
                    id: id
                }
            })




        }catch(err){
            console.error(err);
        }

    }
};

exports.deleteData = async (req,res,next)=>{
    let id = req.userID;
    let product = req.params.id;
    
    try{
        const user = await Expense.destroy({
            where:{
                userId:id,
                id:product
            }
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
            console.log('PREMIUM USERRRRRRRRRRRRRR',data);
            res.send("PREMIUM");
        }else{
            console.log('NOT A PREMIUM USER');
        }


    }catch(err){
        console.error(err);
    }
};
