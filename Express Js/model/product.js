const path = require('path');
const fs = require('fs');
const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
    ); 
   
    
const getProductFromFile = (cb)=>{
       
    fs.readFile(p,(err,filecontent)=>{
        if(err){
           cb([]);
        }
        else{    
            cb(JSON.parse(filecontent));
        }
    })
}

module.exports = class Product{
    constructor(title){
        this.title = title;
    }

    save(){
       getProductFromFile(products =>{
            products.push(this);
            fs.writeFile(p,JSON.stringify(products),(err)=>{
            console.log(err)});
       
       })
        
    };
    static fetchAll(cb){
      getProductFromFile(cb);
        
    };
};