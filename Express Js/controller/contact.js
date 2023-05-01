exports.getContact = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactus.html'));
};

exports.postContact = (req,res,next)=>{ 
    res.redirect('/success');
};