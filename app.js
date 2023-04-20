const http = require('http');

const server = http.createServer((req,res)=>{
    let url = req.url;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>blank</title></head>');
        res.write('<body><h3>This is a blank page</h3></body>');
        res.write('</html>');
        return res.end();
    }
    else if(url === '/home'){
        res.write('<html>');
        res.write('<head><title>blank</title></head>');
        res.write('<body><h3> Welcome home</h3></body>');
        res.write('</html>');
        return res.end();
    }
    
    else if(url === '/about'){
        res.write('<html>');
        res.write('<head><title>blank</title></head>');
        res.write('<body><h3>Welcome to About Us page</h3></body>');
        res.write('</html>');
        return res.end();
        
    }
    
    else if(url === '/node'){
        res.write('<html>');
        res.write('<head><title>blank</title></head>');
        res.write('<body><h3>Welcome to my node js project</h3></body>');
        res.write('</html>');
        return res.end();
        
    }
});

server.listen(4000);
