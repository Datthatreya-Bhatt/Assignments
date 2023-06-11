
let token = localStorage.getItem('token');
axios.defaults.headers.common['Authorization'] = token;
// console.log(token);


window.onload = async()=>{
    try{
    let res = await axios.get('http://localhost:3000/expense/data');
    // console.log(res);
    let length = res.data.length;
    for(let i = 0;i<length;i++){
        let id = res.data[i].id;
        let amount = res.data[i].amount;
        let description = res.data[i].description;
        let category = res.data[i].category;

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
                    
                        await axios.post('http://localhost:3000/updatetransaction',{
                            order_id: res.razorpay_order_id,
                            payment_id:res.razorpay_payment_id,
                            status:"SUCCESS"  
                        })

                    }catch(err){
                        console.log(err);
                    }

                alert('You are a premium user now');
                let btn = document.getElementById('purchase');
                btn.parentNode.removeChild(btn);
            }
        }
        const rzpl = new Razorpay(options);
        rzpl.open();

        rzpl.on('payment.failed',async(res)=>{
            try{   
                    
                await axios.post('http://localhost:3000/updatetransaction',{
                    order_id: res.error.metadata.order_id,
                    payment_id: res.error.metadata.payment_id,
                    status: "FAILED"
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