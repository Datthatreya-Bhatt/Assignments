document.getElementById('button').addEventListener('click',async()=>{
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    try{

    
    let res = await axios.post('http://localhost:3000/user/signup',{
        name: name,
        email: email,
        password: password
    });

    if(res.data === 'fail'){
        alert('user already exists');
    }

    }catch(err){
        console.log(err);


    }

})