const fs= require('fs');
const http= require('http');

const server= http.createServer();
server.on('request',(req,res)=>{
    // fs.readFile('input.txt',(err,data)=>{
    //     if(err) return console.error(err);
    //     res.end(data.toString());
    // });
    const readableStream= fs.createReadStream("input.txt");
    readableStream.on('data',(chunkData)=>{
        res.write(chunkData);
    });
    readableStream.on("end",()=>{
        res.end();
    });
    readableStream.on("error",(err)=>{
        console.log(err);
        res.end("File not found");
    });
    readableStream.on("open",()=>{
        res.write("Again open");
    })

});

server.listen(8000,'127.0.0.1');