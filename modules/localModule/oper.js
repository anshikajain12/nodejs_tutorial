const add = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};
const mul = (a, b) => {
  return a * b;
};
const div = (a, b) => {
  return a / b;
};
const name = "Anshika";

// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.mul = mul;
// module.exports.div = div;
// module.exports.name = name;
/**
 * or
 */

module.exports = { add, sub, mul, div, name };
