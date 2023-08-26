// Since we already know how functions work in other languages, I'll try to make one example in which I can cover most of the syntax of functions in JS


const myfunc = function(username){ // Peculiarity of JS, Functions can be assigned to a variable and then variable name can be called
    return (`${username} just logged in`)
}

console.log(myfunc("Satinder")) // prints satinder just logged in

// Let's take it one step further

function addTwoNumbers(number1 = 1 , number2 = 2){ // Or the function can be defined with the keyword function, Your choice
    return number1 + number2
}

console.log(addTwoNumbers) // This prints [Function: addTwoNumbers], You are refering to the reference of the function!
console.log(addTwoNumbers()); // Result is 3 since you are using the default parameters
console.log(addTwoNumbers(4 , 5)) // prints 9
console.log(addTwoNumbers(3 , "a")) // string 3a is returned! Remember the comparison and datatypes basics!!
console.log(addTwoNumbers(3 , null)); // prints 3 , null is converted to 0
console.log(addTwoNumbers(NaN , NaN)); // returns NaN of type number (ffs javascript -_-)

// What if no default values are present and you pass nothing?
const anotherFuncToAdd = function(number1 , number2){
    return number1 + number2
}

console.log(anotherFuncToAdd()); // NaN! you have not defined any arguments to pass onto the function

// Let's take this up a notch

let myfunc2 = function(num1){
    return num1
}

console.log(myfunc2(200 , 400 , 600)) // Expecting an error right? Multiple arguments passed expecting 1 argument?
// Suprisingly it prints, 200 (ffs javascript *2 -_-)

// It took the first value and made a nice ruckus of the other two

// The question for you is, Give me all the values, Use your brains
// Yes, That's right, We'll return an array, But how?
// The rest operator ...

//let's see

myfunc2 = function(...num1){ // The spread and rest operators are the same, It depends on the context they are used in!
    return num1
}

console.log(myfunc2(200 , 400 , 600)) // Returns [200 , 400 , 600]! An array

// Let's take it up another notch

myfunc2 = function(var1 , var2 , ...num1){
    return num1
}

console.log(myfunc2(...[200 , 400 , 600 , 2000])); // Now tell me the output of this ;)

// that's right, [600 , 2000]
// How? It's easy, The array first gets spread by the spread operator,
// Then the var1 and var2 takes 200 and 400
// Leftover 600 and 200 is taken by the rest operator and an array is returned out of it

// That's it

// What about passing objects and arrays?

let passingObjects = function(myObject){

    return Object.entries(myObject) // returns key-value pairs out of object attributes

}

console.log(passingObjects({name: "Gaurav" , profession: "DevOps Engineer"}));

// Be careful when passing objects, If you try to print attributes which don't exist, It doesn't throw an error, Just prints undefined!


let passingArrays = function(myArr){
    // return Math.max(myArr) returns NaN
    return Math.max(...myArr)
}

const arr = [10 , 20 , 30 , 40]
console.log(passingArrays(arr)); // prints 40? Check again

// Math.max wants a range of numbers as an input, Not an array, So we spread the array!
// After the spread edit, It prints 40

// That's it, Cool