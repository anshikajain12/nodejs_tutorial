// const oper= require('./oper');
// console.log(oper.add(2,3))
// console.log(oper.name);

/**
 * or
 */

const { add, name, sub, mul, div } = require("./oper");
const getNotes = require('./notes');
console.log(add(2, 3));
console.log(name);
console.log(sub(5, 3));
console.log(mul(2, 3));
console.log(div(10, 3));

console.log(getNotes());