exports.getSuccess = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','success.html'));
};
