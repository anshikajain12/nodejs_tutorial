const os = require("os");
console.log(`architecture; ${os.arch()}`);
console.log(`host name: ${os.hostname()}`)
console.log(`platform name: ${os.platform()}`)
console.log(`cpus name: ${os.cpus()}`)
console.log(`endianness name: ${os.endianness()}`)
console.log(`loadavg name: ${os.loadavg()}`)
console.log(`networkinterfaces name: ${os.networkInterfaces()}`)
console.log(`release name: ${os.release()}`)
console.log(`tmpdir name: ${os.tmpdir()}`)
console.log(`type name: ${os.type()}`)
console.log(`uptime name: ${os.uptime()}`)
console.log(`userInfo name: ${os.userInfo()}`)


// const freeMemory = os.freemem();
// // console.log(freeMemory); //it gives in byte format
// console.log(`free Memory: ${freeMemory / 1024 / 1024 / 1024}`);
console.log(`free Memory: ${os.freemem() / 1024 / 1024 / 1024}`);

const totalMemory = os.totalmem();
console.log(`total Memory: ${totalMemory / 1024 / 1024 / 1024}`);