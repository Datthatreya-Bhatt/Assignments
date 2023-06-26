let token = localStorage.getItem('token');
axios.defaults.headers.common['Authorization'] = token;


let temp = async()=>{
    let res = await axios.get('http://localhost:3000/ispremium');
    console.log(res);
    if(res.data ==="PREMIUM"){
        location.href = 'http://localhost:3000/user/premium';
    }
}
temp();






window.onload = async()=>{
    try{
        let res = await axios.get('http://localhost:3000/expense/data/1');
         console.log(res);
        loop(res);
        

    }catch(err){
        console.log(err);
    }
};








document.getElementById('button').addEventListener('click',async()=>{
    let amount = document.getElementById('amount').value;
    let description = document.getElementById('description').value;
    let category = document.getElementById('category').value;
    console.log(amount,description,category);
    try{
            await axios.post(`http://localhost:3000/expense/data`,{
            amount: amount,
            description: description,
            category: category
        });

        location.reload();
    }catch(err){
        console.log(err);
    }
});
document.getElementById('purchase').addEventListener('click',async()=>{
    try{
        
        let res = await axios.get('http://localhost:3000/purchasepremium');
        console.log('res',res);
        let options ={
            "key": res.data.key,
            "order_id": res.data.id,
            "handler": async(res)=>{
                try{   
                    
                        await axios.post('http://localhost:3000/success/purchase',{
                            res:res 
                        })

                        location.href = 'http://localhost:3000/user/premium';

                    }catch(err){
                        console.log(err);
                    }              
            }
        }
        const rzpl = new Razorpay(options);
        rzpl.open();

        rzpl.on('payment.failed',async(res)=>{
            try{   
                    
                await axios.post('http://localhost:3000/failed/purchase',{
                   res:res
                })

            }catch(err){
                console.log(err);
            }
            alert('transaction failed please retry after some time');
            console.log(res.error);
        })
    }catch(err){
        console.log(err);

    }
});







async function prev(){
    let curr = document.getElementById('btn1').innerHTML;
    
    
    

    curr = Number(curr);

    if(curr>1){
        let list = document.getElementById('list');
        let div = document.getElementById('pagination');
        list.innerHTML = '';
        div.innerHTML = '';

        try{

            let page = curr-1;
            let res = await axios.get(`http://localhost:3000/expense/data/${page}`);
           // pagination(res);
            loop(res);

        }catch(err){
            console.log(err);
        }
    }
}

async function next(){
    let curr = document.getElementById('btn1').innerHTML;
    let max = document.getElementById('lastbtn').innerHTML;
    
    

    
    curr = Number(curr);
    max = Number(max);

    if(curr < max){
        let list = document.getElementById('list');
        let div = document.getElementById('pagination');
        list.innerHTML = '';
        div.innerHTML = '';
        try{

            let page = curr+1;
            let res = await axios.get(`http://localhost:3000/expense/data/${page}`);
            //pagination(res);
            loop(res);
            

        }catch(err){
            console.log(err);
        }
    }
}


function pagination(res){
    let currentPage = res.data.obj.page;
    let lastPage = res.data.obj.count;

    let div = document.getElementById('pagination');
    let p = document.createElement('p');
    let curr = document.createElement('button');
    let pre = document.createElement('button');
    let nex = document.createElement('button');
    let last = document.createElement('button');
    let text = document.createTextNode('of');

    curr.innerHTML = currentPage;
    last.innerHTML = lastPage;
    pre.innerHTML = 'Prev';
    nex.innerHTML = 'Next';

    curr.id = 'btn1';
    last.id = 'lastbtn';

    pre.addEventListener('click',prev);
    nex.addEventListener('click',next);

    p.appendChild(pre);
    p.appendChild(curr);
    p.appendChild(text);
    p.appendChild(last);
    p.appendChild(nex);

    div.appendChild(p);

   

}

function loop(res){
    let length = res.data.user.length;
    if(length>0){

        for(let i = 0;i<length;i++){
            let id = res.data.user[i].id;
            let amount = res.data.user[i].amount;
            let description = res.data.user[i].description;
            let category = res.data.user[i].category;

            let li = document.createElement('li');
            li.innerHTML = `${amount}-${description}-${category}`;

            let btn = document.createElement('button');
            btn.innerText = 'Delete Item';
            btn.addEventListener('click',async()=>{
                try{
                    let res = await axios.delete(`http://localhost:3000/expense/${id}`)
                    li.parentNode.removeChild(li);
                    location.reload();
                }catch(err){
                    console.log(err);
                }
            });

            li.appendChild(btn);
            let list = document.getElementById('list');
            list.appendChild(li);
        };
        let div = document.getElementById('pagination');
        div.style.visibility = 'visible';
        pagination(res);
    }

}