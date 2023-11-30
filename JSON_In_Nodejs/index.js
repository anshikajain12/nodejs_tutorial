const fileSystem = require('fs');


/**
 * create a object
*/
const bio = {
    name: "Anshika",
    age: 22,
    tutorial: "Node js Tutorial"
}
console.log(bio)
console.log(bio.tutorial) //it gives "Node js Tutorial"


/**
 * convert object into json
*/
const jsonData = JSON.stringify(bio);
console.log(jsonData)
console.log(jsonData.tutorial) //it gives undefined


/**
 * create a json file
*/

fileSystem.writeFile("json1.json", jsonData, () => {
    console.log("Done");
})


/**
 * read the json file
 */
fileSystem.readFile('json1.json', 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
        const originalData = JSON.parse(jsonData);
        console.log(originalData);
    }
})


/**
 * convert json into object 
 */
const objData = JSON.parse(jsonData);
console.log(objData)
console.log(objData.tutorial) //it gives "Node js Tutorial"