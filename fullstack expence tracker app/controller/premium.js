const path = require('path');
const AWS = require('aws-sdk');
require('dotenv').config();

const sequelize = require('../model/sequelize');
const {User, DownloadedFile,Expense} = require('../model/database');





//For showing premium expense page
exports.getPremiumPage = (req,res,next)=>{
    res.status(200).sendFile(path.join(__dirname,'../','public','premium.html'));

};





//to send leaderboard page
exports.getLeaderboardPage = (req,res,next)=>{
  res.status(200).sendFile(path.join(__dirname,'../','public','leaderboard.html'));

};





//to send leaderboard data
exports.getLeaderBoard = async(req,res,next)=>{
  let id = req.userID;
  let page = Number( req.params.page);
  let limit = Number(req.query.limit);
  


  try{

    
    let leaderBoard = await User.findAll({
      attributes:['name','total_expense'] ,
      offset: (page-1)*limit,
      limit: limit,
      order: [['total_expense', 'DESC']]
    });
    
  
    let count = await User.count({
      where: {
        id: id
      }
    });
    
    count = Math.ceil(count/limit);
    let obj = {
        count: count,
        page: page
    }

    if(leaderBoard){    
      res.send({user: leaderBoard, obj: obj });
    }
    else{
      res.send('fail');
    }

  }catch(err){
    console.error(err);
  }
  
};


async function uploadToS3(data,fileName){
  try{
    const BUCKET_NAME = process.env.BUCKET_NAME;
    const IAM_USER_KEY = process.env.IAM_USER_KEY;
    const IAM_USER_SECRET = process.env.IAM_USER_SECRET;

    let s3bucket = new AWS.S3({
      accessKeyId: IAM_USER_KEY,
      secretAccessKey: IAM_USER_SECRET,
    
    })

  
    const params = {
      Bucket: BUCKET_NAME,
      Key: fileName,
      Body: data,
      ACL: 'public-read'
    }

   
    return new Promise((resolve,reject)=>{
      s3bucket.upload(params,(err,s3Res)=>{
      if(err){
        console.trace('something went wrong: ',err);
        reject(err);
       
      }
      else{
        console.trace('success', s3Res);
        resolve(s3Res);

      }


      })
    })
    
   

  }catch(err){
    console.trace(err);
  }

};





exports.downloadExpense = async(req,res,next)=>{
    try{
		    let t = await sequelize.transaction();
        let id = req.userID;
        const user = await Expense.findAll({
            where:{
                userId:id
            }
        });
        if(user){
          let stringyfy = JSON.stringify(user);
          let filename = `Expense${id}-${new Date()}.txt`;
          let fileUrl = await uploadToS3(stringyfy,filename);
          

		  let link1 = await DownloadedFile.create({
			userId: id,
			links: fileUrl.Location
		  },
		  {transaction: t
		  })
      console.trace(link1);
          res.status(200).send(fileUrl.Location);  
        }
    
    t.commit();
    }catch(err){
        t.rollback();
        console.trace(err);
        res.status(500).send(err);
    }


};





//to send downloaded file data
exports.downloadList = async(req,res,next)=>{
  
  let id = req.userID;
  let page = Number( req.params.page);
  let limit = Number(req.query.limit);
  
  

  try{
    let list = await DownloadedFile.findAll({
      attributes: ['userId','links'],
      offset: (page-1)*limit,
      limit: limit,
      where: {
        userId: id
      }
    })

    let count = await DownloadedFile.count({
      where: {
          userId: id
      }
    });

    count = Math.ceil(count/limit);
    let obj = {
        count: count,
        page: page
    }

    if(list){
      res.send({user: list, obj: obj });
    }
    else{
      res.send('fail');
    }
    
  }catch(err){
    console.trace(err);
  }


}





//to send downloaded file page
exports.getDownloadedListPage = (req,res,next)=>{
  res.status(200).sendFile(path.join(__dirname,'../','public','downloadlist.html'));

};




