const path = require('path');
require('dotenv').config();
const Sib = require('sib-api-v3-sdk');

//For showing forgotpassword page
exports.getforgotpasswordPage = (req,res,next)=>{
    res.status(200).sendFile(path.join(__dirname,'../','public','forgotpassword.html'));

};



//For sending email
exports.getEmail = async (req,res,next)=>{
        
    const client = Sib.ApiClient.instance;

    const apiKey = client.authentications['api-key'];
    apiKey.apiKey = process.env.SIB_API_KEY;

    const transactionalEmailsApi = new Sib.TransactionalEmailsApi();

    const sender = {
        email: 'techkosha@gmail.com'
    }

    let receiver = req.body.email;
    console.log(receiver);
    const receivers = [
        {
            email: 'markethawk101@gmail.com'
        }
    ]

    try{
        let emailRes = await transactionalEmailsApi.sendTransacEmail({
            sender,
            to: receivers,
            subject: 'test',
            textContent: 'testss'
        })
        console.log('Line 41',emailRes);

    }catch(err){
        console.error(process.env.SIB_API_KEY);
        console.error('line 44',err);
    }

};

