// Immediately invoked function expression (IIFE)

// For understanding IIFE, You need to understand global scope pollution
// Global scope is the outer scope in javascript, Call it the window in browser environment.
// When you declare anything in this global scope, It is accessible throughout the environment, Within all nestings as well
// This becomes a problem when you don't know what you're doing, AS it causes some problems like nomenclature clashing, unintended interactions etc.

// So better than polluting that global scope, Use block scope wherever possible
// Now this can be achieved using normal block scoping as well, So why IIFE?

// IIFE has a special property alongwith this block scoping, It can invoke itself automatically, Where will you use it?
// Some parts of code need automatic executions, let us take a connection to database for instance, You might not want to invoke the function in this case,
// Rather, You want the function to invoke itself, Comes into picture IIFE

(() =>  // Unnamed IIFE, IIFE has no name
{console.log("DB CONNECTED")}
    )(); // basically just surround the function with block scope () and execute it there and there with a trailing parentheses (), Don't forget the semicolon!

// It is good practice to end the IIFE with a semi-colon; as in some cases it needs to be terminated manually

// Not only arrow functions, You can even use The declaration syntax, something like
(function connection(){ // Named IIFE, Function has a name
    console.log("DB TWO CONNECTED");

})();

// Notice how I'm not invoking any function, And the output I'm getting on execution is
/*
    DB CONNECTED
    DB TWO CONNECTED
*/

// Now mind you if I remove the semicolon after the immediate execution parentheses() in the first block, It will give me a typeError
// Saying the latter function is not a function! wtf?
// The reason behind this is (somewhat the ambigious behaviour of ASI --> Automatic semicolon insertion of javascript not doing its job properly)
// that javascript doesn't know where to end the context of the currently executed IIFE, So a semicolon helps identify the termination point

// Let's play around more with IIFE

( (user) => { // receiving a parameter
    console.log(`${user} connected to DB`);
} )("Gaurav"); // passing a prop/argument
