const path= require('path');
const dirPath= 'D:/Assignment/Practice/NodeJs/modules/coreModules/PathModule/path.js';
console.log(path.dirname(dirPath));
console.log(path.extname(dirPath));
console.log(path.basename(dirPath));

console.log("..............................")
const parsePath=  path.parse(dirPath);
// console.log(path.parse(dirPath));
console.log(parsePath);
console.log(`file name: ${parsePath.name}`);
