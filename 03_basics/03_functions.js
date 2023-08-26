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

// That's it, Cool