window.onload = async ()=>{
    try{
    let res = await axios.get('http://localhost:4000');
    let length = res.data.length;
    for(let i = 0;i<length;i++){
        let id = res.data[i].id;
        let task = res.data[i].task;
        let description = res.data[i].description;
        let flag = res.data[i].flag;
        let row = document.createElement('div');
        row.className = 'row';
        if(flag == 0){
            let in1 = document.createElement('input');
            in1.className = 'form-control';
            in1.value = task;
            let in2 = document.createElement('input');
            in2.className = 'form-control';
            in2.value = description;


            let btn1 = document.createElement('button');
            btn1.className = 'btn btn-primary';
            btn1.innerText = 'Done';
            btn1.addEventListener('click',async()=>{
                try{
                await axios.put(`http://localhost:4000/put/${id}`,{
                    task:task,
                    description: description,
                    flag:1
                });
                
                location.reload();
                }catch(err){
                    console.log(err);
                 }
            });

            let btn2 = document.createElement('button');
            btn2.className = 'btn btn-danger';
            btn2.innerText = 'Cancel';
            btn2.addEventListener('click',async()=>{
                try{
                await axios.delete(`http://localhost:4000/delete/${id}`);
                location.reload();
                }catch(err){
                    console.log(err);
                }
            });

            let div1 = document.createElement('div');
            div1.className = 'col-md-4';
            let div2 = document.createElement('div');
            div2.className = 'col-md-4';

            let div3 = document.createElement('div');
            div3.className = 'col-md-2';
            let div4 = document.createElement('div');
            div4.className = 'col-md-2';

            div1.appendChild(in1);
            div2.appendChild(in2);
            div3.appendChild(btn1);
            div4.appendChild(btn2);

            row.appendChild(div1);
            row.appendChild(div2);
            row.appendChild(div3);
            row.appendChild(div4);

            document.getElementById('container').appendChild(row);



        
        }else{

               
            let in1 = document.createElement('input');
            in1.className = 'form-control';
            in1.value = task;
            let in2 = document.createElement('input');
            in2.className = 'form-control';
            in2.value = description;


            let div1 = document.createElement('div');
            div1.className = 'col-md-3';
            let div2 = document.createElement('div');
            div2.className = 'col-md-9';

           

            div1.appendChild(in1);
            div2.appendChild(in2);
           

            row.appendChild(div1);
            row.appendChild(div2);
           

            document.getElementById('container1').appendChild(row);



        }


    }
}
catch(err){
    console.log(err);
}
};

document.getElementById('button').addEventListener('click',async()=>{
    let task = document.getElementById('task').value;
    let description = document.getElementById('description').value;
    try{
    await axios.post('http://localhost:4000/',{
        task: task,
        description: description,
        flag: 0
    });
    location.reload();
    }catch(err){
        console.log(err);
    }
});