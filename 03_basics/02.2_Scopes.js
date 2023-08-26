// Let's take it up a notch with nested scoping

let investment = 2000

function one(){

    let price = 500
    console.log(investment) // No problems here, In scope

    function two(){
        let profit = 1000
        console.log(investment) // No problems here too, In scope
        console.log(price)
    }
    two()

    // console.log(profit) // beautiful, we broke it (reference error)
}

one()

// Okay why can price be printed and profit cannot?

// A very interesting concept, For a nested function, The global scope is the scope of the outer function, And this applies to all the nesting as long as it goes
// So , price is defined globally wrt. function two and profit is defined locally wrt. function one
// That's why this behaviour

// Now what if I declare a variable in the global scope of the program? Will function two access it?
// Yes, The investment variable is accessed globally by all nested functions, Thus global scope applies globally

// This is the brief description of closure property, Child functions can access the variables and functions of the parent function but the parent function can't do the same
// We'll come back to closure in DOM Manipulation


// The same story repeats in if - else

if (true) {
    let show = "breakingbad"

    if (true) {
        let protag = "heisenberg"
        console.log(show)
    }

    // console.log(protag) // Beautiful, You broke it again (Reference error)

    // Let's go nuts now

    // console.log(price); // You know what this means? Every call has a separate scope in memory which cannot be accessed by one another

}

// ******************************************* Interesting ******************************************************

// Let's take a spoiler of hoisting in javascript

// So, We already know there are two ways to declare a function, And both have different behviours in certain cases like this one


// # Method 1: No assignment, Direct declaration
console.log(addOne(5)); // This is strange how will this work the function declared aft... wait what?!
function addOne(num){
    return num + 1
}

console.log(addTwo(5)) // Were you expecting 7? It gives a reference error before initialization
let addTwo = function(num){ // This kind of function declaration is also called expression
    return num + 2
}

// The latter gave error because, And remember this
// Only declarations can be hoisted , Initializations and assignments cannot
// First is a declaration, Second is an assignment, Therefore the second one is not hoisted

// We'll come back to hoisting later

// That's it, Cool, Easy