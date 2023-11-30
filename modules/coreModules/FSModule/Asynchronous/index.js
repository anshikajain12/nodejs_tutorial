const fs = require('fs');
fs.writeFile('write.txt', "Hello, Good Morning!!", (err)=>{
    console.log("File is created");
    console.log(err);
});
fs.appendFile('write.txt', "This is 2nd line which is append in the read.txt file ", (err)=>{
    console.log("text is added");
    console.log(err);
});
fs.readFile('write.txt','UTF-8',(err,data)=>{
    console.log(data)
});
console.log("HELLO");


// fs.unlink('write.txt',(err)=>{
//     if(err) throw err;
//     console.log("File Deleted!!")
// })