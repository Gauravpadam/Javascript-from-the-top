// There are two ways to declare an object in JS
// 1. Object as a literal
// 2. Object as a constructor

// Objects can be singleton
// A singleton is a design pattern used in software engineering which... are you actually going to read this POS?

// Let me try again,
/*
    Singleton objects are those which have only one instance of a class, A class which is a global point of access for all instances

    Three properties of a singleton pattern:

        A singleton class has only once instance
        A singleton class is globally accessible
        A singleton class follows lazy initialization. This means that the class will not be instantiated until it is first called. This ensures efficient utilization of resources
*/

// We'll see more of this later

// Let's now focus on objects as a literal


let jsUser = {} // This is how you make a literal object 

// Using symbol as a key
const mySym = Symbol("key1")

jsUser = {
    name: "jsUser",
    "Full name": "Gaurav padam", // Here's a challenge for you, Access this with '.'
    age: 21,
    [mySym]: "mykey1", // Syntax to use symbol as a key
    location: "Mumbai",
    email: "jsUser@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "Saturday"]
}

// Different ways to access an object
console.log(jsUser.email); // Prints email
// console.log(jsUser[email]); // And here we get an error email is not defined
// Why? becasue email is stored as a string, So access it as one
console.log(jsUser["email"]) // Prints email
console.log(jsUser["Full name"]); // Only this notation can possibly print the full name of jsUser, '.' cannot
console.log(jsUser[mySym]); // prints mySym's value in object

// Let's try to break the syntax of mySym in the object, Make it mySym plain from [mySym]
console.log(jsUser); // mySym is treated as a string
console.log(typeof jsUser.mySym); // It is a STRING

// Change it back to [mySym]
console.log(jsUser); // Noticed the difference? [Symbol(key1)] is used


// Changing values
jsUser.email = "jsUser@orkut.com"

// freezing an object
// Object.freeze(jsUser) // Locks the attributes of the object and prevents any modification

// try to change after freeze
jsUser.email = "jsUser@myspace.com"
// Expected an error? Not quite it

// But let's try to print jsUser.email
console.log(jsUser.email); // Did it change after freezing?

// Make sure the object is not frozen before going ahead
console.log(Object.isFrozen(jsUser)) // false

// Now give a new attribute to the object

jsUser.greeting = function(){
    console.log(`Hello ${jsUser["Full name"]}`);
}


console.log(jsUser.greeting); // Did you expect Hello Gaurav Padam?
// It prints [Function (anonymous)], Check perhaps you forgot something, Making a call... parentheses?
// This is actually interesting, What you got above is function's reference, Not the function's return type!

console.log(jsUser.greeting()); // Prints Hello Gaurav Padam
// But why the extra undefined? That's strange :\

// Remember this, In JS, When the function does not have a return type explicitly defined, It returns undefined!
// That's why an undefined is printed


// Let's try using this keyword to refer an object

jsUser.greetingTwo = function(){
    console.log(`Hello ${this["Full name"]}`);
}

// this refers to the object the function is called upon!

console.log(jsUser.greetingTwo()) // prints Hello Gaurav Padam

