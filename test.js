let arr = [1,2,3,4,5,6];
let out = [];
for(let i =0;i<arr.length;i+=2){
    if(i+1 === arr.length){
        out.push(arr[i]);
    }
    else{
        out.push(arr[i]+arr[i+1]);
      
    }
}
console.log(out);

  