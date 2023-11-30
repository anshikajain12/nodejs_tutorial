const EventEmitter = require("events");
const event = new EventEmitter();
/**
 * define an event
 */
event.on('sayMyName',()=>{
    console.log("Anshika")
});
event.on('sayMyName',()=>{
    console.log("Jain")
}); 

/**
 * call / fire an event
 */
event.emit('sayMyName');


event.on("checkPage",(statusCode,msg)=>{
    console.log(`status code is ${statusCode} and page is ${msg}`);
})

event.emit("checkPage",200,"ok");