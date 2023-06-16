const Razorpay = require('razorpay');
const { Sequelize } = require('sequelize');

const {Orders} = require('../model/database');


require('dotenv').config();


const sequelize = new Sequelize('expense', 'root', process.env.SQL_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
  });



exports.getPurchase = async(req,res,next)=>{
    const t = await sequelize.transaction();
    try{
        let amount = 99999;
        
        let rzp = new Razorpay({
            key_id: RAZORP_KEY_ID,
            key_secret: RAZORP_KEY_S
        })
        
        rzp.orders.create({
        amount: amount,
        currency: "INR",
        },
        async(err,order)=>{
            if(err){
                console.error(err);
            }else{
                try{
                    console.log('>>>>>>>>>>>>2555',order);
                    order.key = RAZORP_KEY_ID;
                    res.send(order);
                    console.log('purchase control line 25>>>',order);
                    console.log('purchase control line 29>>>',req.userID);
                    try{
                        const data = await Orders.create({
                            paymentid: "No id now",
                            orderid: order.id,
                            status: "pending",
                            userId: req.userID,
                            
                        },{transaction: t}
                        )
                        if(data){
                            console.log('order table created');
                           
                        }
                        else{
                            console.log('error in creating order table');
                        }
                    }catch(err){
                        console.error(err);
                       
                    }
                    

                }catch(err){
                    console.error(err);
                }
            }
        }
        );

     t.commit();

    }catch(err){
        t.rollback();
        console.error(err);
    }
};


exports.postSuccess = async(req,res,next)=>{
    console.log("success",req.body);
    let order_id = req.body.res.razorpay_order_id;
    let payment_id = req.body.res.razorpay_payment_id;
    console.log('purchase control post success line 67>>>',req.userID);
    const t = await sequelize.transaction();

    try{

        let data = await Orders.update({
            orderid: order_id,
            paymentid: payment_id,
            status: 'SUCCESS',
            userId: req.userID,
            
        },{
            where:{
                orderId: order_id
            },
            transaction: t
        })

        if(data){
            console.log('post success line 83', data);
            res.send('task complete');
            t.commit();
        }else{
            console.log('error in post success line 86');
        }

        

    }catch(err){
        console.error(err);
        t.rollback();
    }
    
};


exports.postFailed = async(req,res,next)=>{
    console.log("failed",req.body,'>>>>>>>>>',req.body.res.error.metadata);

    let order_id = req.body.res.error.metadata.order_id;
    let payment_id = req.body.res.error.metadata.payment_id;
    console.log('purchase control post failed line 96>>>',req.userID);

    const t = await sequelize.transaction();

    try{
        let data = await Orders.update({
            orderid: order_id,
            paymentid: payment_id,
            status: 'FAILED',
            userId: req.userID,
          
            },
            {
            where:{
                orderid: order_id
            },
            transaction: t
        }) 

        
        if(data){
            console.log('post failed line 121', data);
            res.send('task complete');
            t.commit();
        }else{
            console.log('error in post failed line 124');
        }

    }catch(err){
        console.error(err);
        t.rollback();
    }

    

};



