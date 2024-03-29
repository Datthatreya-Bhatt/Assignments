const fs = require('fs');

const requestHandler = (req,res)=>{
    let url = req.url;
    let method = req.method;
    if(url === '/'){
        let test = fs.readFileSync('message.txt','utf-8');
        res.write('<html>');
        res.write('<head><title>blank</title></head>');
        res.write(`<body><p>${test}</p><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>`);
        res.write('</html>');
        return res.end();
        
       }
    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data',(chunk)=>{
            body.push(chunk);
        });
        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt',message);
        });
       
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    }
};

// module.exports = requestHandler;

// module.exports = {
//     handler:requestHandler,
//     text:'some text'
// };

// module.exports.handler = requestHandler;
// module.exports.text = 'some text';

exports.handler = requestHandler;
exports.text = 'some text';