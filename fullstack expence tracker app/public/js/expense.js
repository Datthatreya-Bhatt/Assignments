window.onload = async()=>{
    try{
    let res = await axios.get();
    let length = res.data.length;
    for(let i = 0;i<length;i++){

    };

    }catch(err){
        console.log(err);
    }
};