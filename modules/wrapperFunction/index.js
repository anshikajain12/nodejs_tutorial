(function(){
    var name="anshika";
    console.log(name);
    console.log(__filename);
    console.log(__dirname);
})();
/**
 * It gives en error  because name are private because anonymous func do the all variables as private
 */
// console.log(name) 
console.log(__filename);
console.log(__dirname);

//syntax
// (function(exports,require,module,__filename,__dirname){
//     console.log(__filename);
// console.log(__dirname);
// })()