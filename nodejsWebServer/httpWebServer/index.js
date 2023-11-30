const http= require('http');
const server= http.createServer((req,res)=>{
    console.log(req.url);
    res.end('Hello from other side...........');
});
server.listen(8000,'127.0.0.1',()=>{
    console.log(`listening to the port n0: 8000`);  
})