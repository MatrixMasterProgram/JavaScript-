// funcation


// declaration


function myFuncation (a , b){
    return a*b
}
// code
// code
// code
// code
// code
// code
// code
// code
// code
// code
// code


console.log(myFuncation(2,4));
console.log(myFuncation(5,3));

// expression
let x = function(a,b){return a+b}

let z = x(2,2)
console.log(z);

//Funcation( )constructor
let y = Function("a" , "b" ,"return a*b")
let q = y(4,4)
console.log(q);

// HOisting

theName("alice")

function theName(name){
    console.log(name);
}
//funcations used as values 
function hello(name, surname){
    return name + " " + surname
}

let sayHello= hello("john" , "alex")
console.log(sayHello);

console.log(typeof hello);

// arrow funcation ES6 
//javascript ES5
var test = function(x, y){
    return x *y
}
//javascript ES6
var text = (x,y)=> x*y