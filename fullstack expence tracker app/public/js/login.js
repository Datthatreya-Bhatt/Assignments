document.getElementById('button').addEventListener('click',async()=>{
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    try{
        let res = await axios.post('http://localhost:3000/user/login',{
            email: email,
            password: password
        })
            
        if(res.data === 'incorrect'){
            alert('Email or Password is incorrect');
        }else{
            let id = res.data;
            location.href = `http://localhost:3000/${id}/expense`;  
        }

    }catch(err){
        console.log(err);
    };
})