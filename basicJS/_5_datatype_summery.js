// Primitive : String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreVal = 100.3

const isLoggedin = false
const outSideTemp = null
let userEmail;


console.log(typeof outSideTemp);
// Output : object

const id = Symbol('234')
const anotherId = Symbol('234')


console.log(id === anotherId);
// Output : false

const bigNumber = 54353452n
// console.log(bigNumber);


// Reference (Non primitive) : Arrays, Objects, Functions
// Return type of non-primitive datatype is : object
// Array
const language = ["js", "java", "c", "c++"];

// Obj
let myObj = {
    name: "Ram",
    age: 25,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);
console.log(typeof myObj);
console.log(typeof language);


// Interview question: val of typeof operator

/*
Type of val     Result
Undefined       "undefined"
Null            "object"
Boolean         "boolean"
Number          "number"
String          "string"
Object
*/