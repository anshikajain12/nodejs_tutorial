const http= require('http');
const fs= require('fs');
const server= http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end('Hello from home side ');
    }else if(req.url=="/about"){
        res.write('Hello from about side ');
        res.end();
    }else if(req.url=="/userapi"){
        fs.readFile(`${__dirname}/user_API/user.json`,"utf-8",(err,data)=>{
            const objData= JSON.parse(data);
            res.writeHead(200,{"Content-type":"application/json"})
            console.log(objData[2].name);
            res.end(data);
        })
    }else{
        res.writeHead(404,{"content-type":"text/html"});
        res.end("<h1>404 error</h1>");
    }
});
server.listen(8000,'127.0.0.1',()=>{
    console.log(`listening to the port n0: 8000`);  
})