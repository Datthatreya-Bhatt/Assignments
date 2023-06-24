
let token = localStorage.getItem('token');
axios.defaults.headers.common['Authorization'] = token;



window.onload = async()=>{
    try{
    let res = await axios.get('http://localhost:3000/expense/data');
    
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

//form submit
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


//leaderBoard
document.getElementById('btn').addEventListener('click',async()=>{
    
    try{
        
        let res = await axios.get('http://localhost:3000/user/premium/leaderboard');
        console.log('res',res);


        let h = document.createElement('h3');
        h.innerHTML = 'LEADER BOARD';

        let div = document.getElementById('leaderboard');
        div.appendChild(h);

        
        let length = res.data.length;
        for(let i = 0;i<length;i++){
            let li = document.createElement('li');
            li.innerHTML = `Name-${res.data[i].name}-Total Expense-${res.data[i].total_expense}`;
            div.appendChild(li);
        }
                    
                       
    }catch(err){
        console.log(err);

    }


});

//file download



document.getElementById('btn2').addEventListener('click',async()=>{
    
    try{
        
        let res = await axios.get('http://localhost:3000/download');
        console.log('res',res);

        let url = res.data;

        console.log(url);


        

        
        
                    
                       
    }catch(err){
        console.log(err);

    }


});

