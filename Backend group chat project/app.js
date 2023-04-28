const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/login', (req, res) => {
  res.send(`
    <h1>Login</h1>
    <form method="post" action="/">
      <input type="text" name="username" id="input" />
      <button type="submit" id="btn">Login</button>
    </form>
    <script>
    document.getElementById("btn").addEventListener('click',()=>{
      let data = document.getElementById('input').value;
      localStorage.setItem('username',data);
    })
    </script>
  `);
});


app.post('/', (req, res) => {
  const username = req.body.username;
  const message = req.body.message;
  if(message === undefined){

  }
  else{
    fs.writeFileSync('message.txt'," "+message+" :",{flag:'a+'},err=>console.log(err));
  }
  if(username === undefined){

  }
  else{
    fs.writeFileSync('message.txt',username+"->",{flag:'a+'},err => console.log(err));
  }
  console.log(username);
  const data = fs.readFileSync('message.txt','utf-8');

  res.send(`
    <h1>${data}</h1>
    <form method="post" action="/">
      <input type="text" name="message"/>
      <button type="submit" id="btn">Send</button>
    </form>
  `);
 
});


app.listen(4000);

