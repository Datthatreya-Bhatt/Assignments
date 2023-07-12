const Razorpay = require('razorpay');
require('dotenv').config();

const sequelize = require('../model/sequelize');
const {Orders} = require('../model/database');





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
                    order.key = RAZORP_KEY_ID;
                    res.send(order);
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
                        console.trace(err);
                       
                    }
                    

                }catch(err){
                    console.trace(err);
                }
            }
        }
        );

     await t.commit();

    }catch(err){
        await t.rollback();
        console.trace(err);
    }
};





exports.postSuccess = async(req,res,next)=>{
    let order_id = req.body.res.razorpay_order_id;
    let payment_id = req.body.res.razorpay_payment_id;
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
            res.send('task complete');
            await t.commit();
        }else{
            console.log('error in post success line 86');
        }

        

    }catch(err){
        console.trace(err);
        await t.rollback();
    }
    
};





exports.postFailed = async(req,res,next)=>{
    let order_id = req.body.res.error.metadata.order_id;
    let payment_id = req.body.res.error.metadata.payment_id;

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
            await t.commit();
        }else{
            console.log('error in post failed line 124');
        }

    }catch(err){
        console.trace(err);
        await t.rollback();
    }

    

};



