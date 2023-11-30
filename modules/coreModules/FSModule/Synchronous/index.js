const fileSystemModule= require("fs");
fileSystemModule.writeFileSync('read.txt',"Welcome to my fs module\n");
// fileSystemModule.writeFileSync('read.txt',"How Are you?"); //It override the text
fileSystemModule.appendFileSync('read.txt',"How Are you?");

const buf_data= fileSystemModule.readFileSync('read.txt');
// console.log(buf_data)
//<Buffer 57 65 6c 63 6f 6d 65 20 74 6f 20 6d 79 20 66 73 20 6d 6f 64 75 6c 65 20 48 6f 77 20 41 72 65 20 79 6f 75 3f>
const org_data= buf_data.toString();
console.log(org_data)

fileSystemModule.renameSync('read.txt','readWrite.txt')

// fileSystemModule.unlinkSync('readWrite.txt')