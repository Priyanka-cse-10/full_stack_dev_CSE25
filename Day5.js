// Event
// EventEmitter is class in which we have to use emit (event emit para)
// const EventEmitter=require("events")
// const event=new EventEmitter();
//event.on("greet", ()=>{
//    console.log("This is event emitter")
// })
// once.once("greet" , ()=>{
//     console.log("This is event emitter")
// })
// event.emit("greet");
// event.emit("greet");
// event.emit("greet");
// event.emit("greet");
// Program 1: create custom EventEmitter that trigger "greet" or "exit"
// class MyEmitter extends EventEmitter{}
// const event=new MyEmitter()
// event.NONE("greet", (name)=>{
// console.log('hello ${name}'); 
// })
// event.on("exit", ()=>{
//     console.log("exit mycustom evet emitter..");
// })
// event.emit("greet", "cse25");
// event.emit("exit");
// 2. Stimulate DOM-like event handling in Node.js using   