window.onload = async ()=>{
    try{
    let res = await axios.get('http://localhost:3000/get');
    console.log(res);
    let length = res.data.length;
    for(let i =0;i<length;i++){
        let id = res.data[i].id;
        let amount = res.data[i].amount;
        let description = res.data[i].description;
        let category = res.data[i].category;

        let li = document.createElement('list');
        li.innerHTML = `${amount}-${description}-${category}`;

        let del = document.createElement('button');
        del.innerText = 'delete';
        del.className = 'btn btn-primary';
        del.addEventListener('click',async ()=>{
            try{
            axios.delete(`http://localhost:3000/delete/${id}`);
            location.reload();

            }catch(err){
                console.log(err);
            }
        })

        let edit = document.createElement('button');
        edit.innerText = 'edit';
        edit.className = 'btn btn-primary';
        edit.margin = '10px';
        edit.addEventListener('click',async()=>{
            try{
            let res = await axios.get('http://localhost:3000/get');
            let length = res.data.length;
            for(let i =0;i<length;i++){
                if(res.data[i].id === id ){
                    document.getElementById('item').value = res.data[i].amount;
                    document.getElementById('item2').value = res.data[i].description;
                    document.getElementById('cate').value = res.data[i].category;
                }
            }
            }catch(err){
                console.log(err);
            }
            try{
                await axios.delete(`http://localhost:3000/delete/${id}`)
            }catch(err){
                console.log(err);
            }
        });

        li.appendChild(del);
        li.appendChild(edit);

        document.getElementById('items').appendChild(li);
        
    } 
    }catch(err){
        console.log(err);
    }
}


document.getElementById('item3').addEventListener('click',async()=>{
    try{
        let amount = document.getElementById('item').value;
        let description = document.getElementById('item2').value;
        let category = document.getElementById('cate').value;
        
        await axios.post('http://localhost:3000/post',{
            amount: amount,
            description: description,
            category: category
        });
        
        location.reload();
    }catch(err){
        console.log(err);
    }
})