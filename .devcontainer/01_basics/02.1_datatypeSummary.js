// Types of datatype:-

// 1. Primitive (call by value)
// 7 types: String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100;
const scoreValue  = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let useEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 56585785875785875n;

// 2. Reference/ Non primitive
// Array, Objects, Functions

const heros = ["ironman", "spiderman", "hulk"];
let myObl = {
    name: "Yuvraj",
    age: 25,
}

const myFunction = function(){
    console.log("Hello World");
    
}

// JavaScript is a dynamically typed language.
// This means that:
// Type checking occurs at runtime: 

// The type of a variable is determined when the code is executed, not during a compilation phase.

// Variables can hold values of different types: A variable can be assigned a number, then a string, then an object, 
// all within the same program execution, without requiring explicit type declarations.

// No explicit type declarations are required: 
// You do not need to specify the data type of a variable when you declare it in JavaScript. 
// The interpreter infers the type based on the value assigned.


