window.onload = async ()=>{
    let res = await axios.get('http://localhost:3000/');
    console.log(res.data);
    let length = res.data.length;
    for(let i =0;i<length;i++){
        let id = res.data[i].id;
        let name = res.data[i].name;
        let number = res.data[i].number;
        let email = res.data[i].email;
     
        let li = document.createElement('li');
        li.innerHTML= `${name}-${number}-${email}`;

        let del = document.createElement('button');
        del.innerHTML = "delete";
        del.addEventListener('click', async ()=>{
            console.log('before');
            try{
                await axios.delete(`http://localhost:3000/delete/${id}`);
                console.log('after');
                li.parentNode.removeChild(li);
            }catch(err){
                console.log(err);
            }
           
        });
     
        li.appendChild(del);
        document.getElementById('list').appendChild(li);
     
    }
}

document.getElementById('button').addEventListener('click', async ()=>{
    let name = document.getElementById('name').value;
    let num = document.getElementById('number').value;
    let mail = document.getElementById('email').value;
    
    console.log(name,num,mail);
    await axios.post('http://localhost:3000/',{
        name : name,
        number : num,
        email : mail
    });
    console.log('after post request');

    try{
        console.log('before get request');
    let res = await axios.get('http://localhost:3000/');
    console.log('after get request');
    console.log(res);
    let id =res.data[res.data.length-1].id;
    let res_name =res.data[res.data.length-1].name;
    let number =res.data[res.data.length-1].number;
    let email =res.data[res.data.length-1].email;

    let li = document.createElement('li');
    li.innerHTML= `${res_name}-${number}-${email}`;

    let del = document.createElement('button');
    del.innerHTML = "delete";
    del.addEventListener('click',async ()=>{
        try{
        await axios.delete(`http://localhost:3000/delete/${id}`);
        li.parentNode.removeChild(li);
        }catch(err){
            console.log(err);
        }
     });

    li.appendChild(del);
    document.getElementById('list').appendChild(li);
    }catch(err){
        console.log(err);
    }
})

