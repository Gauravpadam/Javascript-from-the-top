// Primitive

// Primitive datatypes are call by value which means that when a variable is passed to a function or some context,
// A deep copy is passed instead of a reference to the memory location of the original variable, Thus the changes you will make to these
// Datatypes affect those passed variables only and not the original variables

// 7 types are:
// Strings
// Number
// Boolean
// null
// undefined
// symbol
// bigint

// An example for symbol datatype
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // False; The beauty of symbols, Makes values unique

// An example for bigint
const bigint = 3434343434343434343434n

// Non - Primitive datatypes / Reference types
// Reference types are call by reference, In the sense that if you pass one of these datatypes to any function or a context
// A reference to the original value's memory location is passed, So any changes you might make here will affect the original
// Variable as well

// Types are
// Arrays
// Objects
// Functions

// Arrays definition

const heroes = ["Shaktimaan" , "Batman" , "Iron Man"]

// Objects definition

let myObj = {
    name: "Krishnamurthy",
    age: "21",
}

// Function definition

// Treating function as a variable

const myFunc = function(){
    console.log("Hellow World");
}

// typeof is used to check the datatypes
console.log(typeof myFunc , typeof(bigint)); // prints function & bigint