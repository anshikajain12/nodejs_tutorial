const chalk= require('chalk');
var validator = require('validator');

const res= validator.isEmail('foo@gmail.com');
const mob= validator.isMobilePhone("+99999999");
console.log(res? chalk.greenBright.inverse(res) : chalk.red.inverse(res) )
console.log(mob? chalk.yellow.inverse(mob) :  chalk.redBright.inverse(mob) );