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
                    console.log('purchase control line 29>>>',req.userID);
                    try{
                        const data = await Orders.create({
                            paymentid: "No id now",
                            orderid: order.id,
                            status: "pending",
                            userId: req.userID
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


exports.postSuccess = async(req,res,next)=>{
    console.log("success",req.body);
    let order_id = req.body.res.razorpay_order_id;
    let payment_id = req.body.res.razorpay_payment_id;
    console.log('purchase control post success line 67>>>',req.userID);

    try{

        let data = await Orders.update({
            orderid: order_id,
            paymentid: payment_id,
            status: 'SUCCESS',
            userId: req.userID
        },{
            where:{
                orderId: order_id
            }
        })

        if(data){
            console.log('post success line 83', data);
            res.send('task complete');
        }else{
            console.log('error in post success line 86');
        }

        

    }catch(err){
        console.error(err);
    }
    
};


exports.postFailed = async(req,res,next)=>{
    console.log("failed",req.body,'>>>>>>>>>',req.body.res.error.metadata);

    let order_id = req.body.res.error.metadata.order_id;
    let payment_id = req.body.res.error.metadata.payment_id;
    console.log('purchase control post failed line 96>>>',req.userID);

    try{
        let data = await Orders.update({
            orderid: order_id,
            paymentid: payment_id,
            status: 'FAILED',
            userId: req.userID
            },
            {
            where:{
                orderid: order_id
            }
        }) 

        
        if(data){
            console.log('post failed line 121', data);
            res.send('task complete');
        }else{
            console.log('error in post failed line 124');
        }

    }catch(err){
        console.error(err);
    }

    

};






// exports.postPurchase= async(req,res,next)=>{
//     let order_id = req.body.order_id;
//     let paymentid = req.body.payment_id;
//     let status = req.body.status;
//     console.log('ressss',req.body);


//     let rzp = new Razorpay({
//         key_id: cred.keyId,
//         key_secret: cred.keySecret 
//     })


//     try{
//         let razorRes = await rzp.orders.fetch(order_id)
//         console.log('razor order fetch',razorRes);

//         try{
//             const data = await Orders.update({
//                 paymentid: paymentid,
//                 status: status
//             },
//             {where:{
//                 orderid: razorRes.id
//               }
//             })


//             if(data){
//                 console.log('order table created');
//             }
//             else{
//                 console.log('error in creating order table in post purchse controle');
//             }


//         }catch(err){
//             console.error(err);
//         }

//     }catch(err){
//         console.error(err);
//     }
// };