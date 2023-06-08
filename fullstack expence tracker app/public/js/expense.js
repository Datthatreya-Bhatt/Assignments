window.onload = async()=>{
   
    try{
    let res = await axios.get('http://localhost:3000/expense/data');
    console.log(res);
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