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

// That's it, That's the nested scope, Cool