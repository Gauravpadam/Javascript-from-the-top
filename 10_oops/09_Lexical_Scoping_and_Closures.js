// Not exactly limited to OOPS as a module
// But better to know after understanding OOPS in JS

// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
/*
The word lexical refers to the fact that lexical scoping uses the location where a variable is declared
within the source code to determine where that variable is available.
Nested functions have access to variables declared in their outer scope.
*/

// We know Lexical scoping from 03_basics
// Let's understand closures

// A closure is a combination of the lexical environment and a function, That's it
// This means a nested function creates a 'closure' with it's parent function
// So, that's the actual reason you can use outer variables in nested functions

// MDN DOCS say
/*
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state 
(the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. 
In JavaScript, closures are created every time a function is created, at function creation time.
*/

// function foo() {
//     const name = "foo";

//     function printAFoo() { // Nested function creates a 'closure'
//         console.log(name);
        
//     }
//     printAFoo();
// }

// foo(); // Prints "foo"

// Cool, now let's amp it up a bit

function foo() {
    const name = "foo";

    function printAFoo() { // Nested function creates a 'closure'
        console.log(name);
        
    }
    return printAFoo; // Now we return a reference
}

const myFoo = foo(); // So a reference is stored in another reference
myFoo(); // And we execute the other reference

// This is extremely useful in practical scenarios like state management in react

