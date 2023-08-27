// For understanding arrow functions, We need to understand the concept of 'this' keyword

// this keyword is used to refer to the current context
const user = {
    username: "Gaurav",
    pwd: "12345678",

    welcomeMessage: function() {
        // console.log(`${this.username}, Welcome to the website`);
        console.log(this); // This prints the entire context of the user object
    },
}

user.welcomeMessage() // Before changing context
user.username = "sam" // Changing username of tontext
user.welcomeMessage() // After changing context

// Okay Pokemons, Now we know what happens inside an object's context, But what's the context in global scope?
// Must include everything right?
console.log(this) // It is an empty object!

// Okay this is interesting
// If you do the same thing in a browser console, You'll get the global context as 'Window'
// But it is an empty object in Node Environment, Why is that?

// This is because in Browsers, 'Window' is a global object and 'this' captures the context of window
// Now why is Window a global object in Browsers?
// Aree, What kind of question is this? How would you capture different events of browsers if window is not a global object, How would you
// Manipulate DOM tree then? Is this even a question?


// Hold on, Can we use this keyword in functions too then? Let's find out
function bohotscopehai() {
    let username = "Daniel Craig"
    console.log(this);
    console.log(this.username) // Not quite what you expected right? Undefined
}

bohotscopehai()

// Okay there's definitely some context for 'this' keyword to catch on, But does it work as intended?
// You must have noticed an undefined below the whole fuction context, Yes, Now you know the answer to the above question
// Context only works inside Objects and not inside Functions, This will be useful knowledge in DOM Manipulation


// Now that we have enough 'context' regarding this (Pun absolutely intended), Let's start this Arrow function

// The basic syntax for an arrow function is:
// () => {} , That's it
// Now hold it in a variable and it looks something like this
const arrow = () => {
    console.log("Hello Arrow")
}

arrow() // Prints Hello Arrow

// This is the syntax of the arrow function. You just remove the function keyword and add an arrow, That's it


// But Why use arrow function anyway, What was the need? Weren't normal declarative or assignment functions enough?
// Let's find out

// You remember our old friend 'this'? Try to print the context of this inside an arrow

const anotherArrow = () => {
    console.log(this); // Hmm that's strange, An empty object? But normal functions had some context to catch on, Why not this?
}

anotherArrow()

// This is a good to know point, But is not the real difference between normal & arrow functions

// So what is the real difference between arrow & normal functions?

// Arrow functions are 'callable' not 'constructable'. You can't use the new keyword to construct an arrow function, Let's try it out

// First, Normal function behaviour
function normalFunction(){
    console.log("Normal function");
}

let x = new normalFunction() // No errors, And the function prints "Normal function"

console.log(typeof x); // x is an object created through a constructor

// Now let's see what the arrow function does
const arrowFunction = () => {
    console.log("Arrow function");
}

// let y = new arrowFunction() // TypeError, Arrow function is not a constructor!

// But why would you use function as a constructor anyways?
// Should I remind you that constructors are special "Functions"?

// Why would you create an instance using function?
// How are objects initialized then, You tell me. Using constructors right? And what are constructors? Special functions of a class right? That's it
// Here, x is an object and normalFunction acts as a constructor for that object

// Now you know the difference between an arrow and a normal function


// Let's see a peculiarity of arrow functions that significantly helps to reduce the code, Implicit return property
// Suppose you have a single line operation to do, With the help of arrow functions, You don't need to make a block and return
// Something like we always do, Instead you can return the result in one line, Like this

let implicitaddTwo = (num1 , num2) => num1 + num2 // No blocks, No return keyword, Just a single line operation

// OR , You can add some parentheses surrounding the operation, something like

implicitaddTwo = (num1 , num2) => ( num1 + num2 ) // This is extensively use in REACT! Remember this!

// A few wise words to remember, When you use curly braces, You need to add return keyword
// When you use parentheses, No need to add the return keyword

console.log(implicitaddTwo(3 , 4)) // prints 7

// That significantly helps to reduce the written code in many scenarios

// Accha why use parentheses when it is possible to return things without them?
// Try returning objects without parentheses

let username = () => {username: "Tara Singh"} // an object

console.log(username()) // Prints undefined, Why? This comes under explicit return, You're using curly braces!

// Now doing the same thing with parentheses

username = () => ( {username: "Tara Singh"} ) // An object again, But inside parentheses

console.log(username()); // Prints the object { username: 'Tara Singh' }

// This is how you implicitly return objects, And this is why it is a good practice to always use parentheses while using implicit return

