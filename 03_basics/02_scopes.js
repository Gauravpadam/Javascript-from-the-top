// The story begins with let var and const

// Before that

// ---------------------------------------------------------------------------------------------------------------------------------
/*

    THIS IS GLOBAL SCOPE



    if (true) {

        THIS IS LOCAL/BLOCK SCOPE

    }


    THIS IS GLOBAL SCOPE

    
*/
// --------------------------------------------------------------------------------------------------------------------------------


// Now that we know what's global & local scopes, Let's see the scope in JS


// if (true) {
//     let a = 10
//     const b = 20
//     var c = 30 // The culprit
// }

// console.log(a); // a is not defined, Good! That's how it should be (reference error)
// console.log(b) // again out of scope, not defined globally (reference error)
// console.log(c); // this is the rotten mango; var always takes up global scope!

// Now when can this become a menace, Imagine a developer writes some code in which he uses c variable

let c = 300 // c is set to 300

if (true) {
    let a = 10
    const b = 20
    c = 30 // sets c as 30 globally
}

console.log(c); // prints 30, This creates a lot of confusion, especially when we import other modules and they have same nomenclature of variables which are declared as var

//This is why we don't use var anymore
// Note: The global scope in browsers and the global scope in NodeJS enviironment are completely different! Remember this
// That's it, Cool