const validator = require('validator');
const chalk = require('chalk');
console.log(validator.isEmail('anshikajain@example.com'));
console.log(validator.isEmail('example.com'));
console.log(validator.isURL('https/example.io'));
console.log(chalk.green("Success!!"));
console.log(chalk.bgBlueBright.red.bold.inverse("Success!!!"));
console.log(chalk.yellow.italic.underline("Success!!!"));