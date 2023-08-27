// There are some values which are always considered True in js
// These are known as truthy values

// Truthy values of JS:
/*
    1. True
    2. 1
    3. "0"
    4. "false"
    5. " "
    6. "basicallyIfTheStringContainsEvenASingleCharacter"
    7. []
    8. {}
    9. function(){}
*/

// Let's see what truthy values are capable of

if (true) {
    console.log("this code will always be executed");
}

if ("doesthisevenmatter") {
    console.log("Can't stop the truthy values");
}

// Okay you get my point

// A more realistic use case would be in DSA, Which I frequently use in python, And React


// Some falsy values you should know at all costs

/*
    1. false
    2. 0
    3. -0
    4. ""
    4. BigInt 0n
    5. null
    6. undefined
    7. NaN

*/

// Some important operators and their use cases

let user = "Gaurav"
let user2 = "Someone"

// Logical AND

if (user && user2) {
    console.log(`${user} and ${user2} logged in`);
}

user = null
user2 = false

// Logical OR

if (user || user2) {
    console.log("This will never be reached");
}

user = null

// The conditional operator (?)

console.log((user == null ? "User is null":user)) // conditional operator is very handy, Remember it


// The nullish coalscence operator (??)

console.log(user ?? "User is null again"); // Detects a nullish value and prints a corresponding default value if true
// The last 2 are extremely important for realtime applications in React & APIs, Remember them

// That's it, Cool