const Razorpay = require('razorpay');

const {Orders} = require('../model/database');
const cred = require('../credentials/razorpay');


exports.getPurchase = async(req,res,next)=>{
    try{
        let amount = 99999;
        
        let rzp = new Razorpay({
            key_id: cred.keyId,
            key_secret: cred.keySecret 
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
                    order.key = cred.keyId;
                    res.send(order);
                    console.log('purchase control line 25>>>',order);
                    
                    try{
                        const data = await Orders.create({
                            paymentid: "No id now",
                            orderid: order.id,
                            status: "pending"
                        })
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

        

    }catch(err){
        console.error(err);
    }
};


exports.postPurchase= async(req,res,next)=>{
    let order_id = req.body.order_id;
    let paymentid = req.body.payment_id;
    let status = req.body.status;
    console.log('ressss',req.body);


    let rzp = new Razorpay({
        key_id: cred.keyId,
        key_secret: cred.keySecret 
    })


    try{
        let razorRes = await rzp.orders.fetch(order_id)
        console.log('razor order fetch',razorRes);

        try{
            const data = await Orders.update({
                paymentid: paymentid,
                status: status
            },
            {where:{
                orderid: razorRes.id
              }
            })


            if(data){
                console.log('order table created');
            }
            else{
                console.log('error in creating order table in post purchse controle');
            }


        }catch(err){
            console.error(err);
        }

    }catch(err){
        console.error(err);
    }
};