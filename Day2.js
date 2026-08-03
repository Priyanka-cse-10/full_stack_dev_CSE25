// callback function 
function hello(n1,n2){
    console.log("Hello World")
}
let a=10;
let b=20;
console.log(hello(a,b));
function sayHi(){
    console.log("callback function");
}
sayHi();
function sayHi(){
    console.log("This is called second callback function")
}
sayHi();