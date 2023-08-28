// while and do while in js
// Same as Java and C++

let i = 0
while (i <= 5) {
    console.log("This is a while loop")
    i+=1
}

// Taking it up a notch,

i = 0
while (1) { // Truthy value inside a while loop

    console.log("To stop, Break the loop");

    if (i == 4) {
        break;
    }

    i+=1
}

// Did you know? While and else go together in Python, Can JS do the same? Let's find out

// i = 0
// while (i > 0) {
//     console.log("Will this even be printed?");
// }
// else {
//     console.log("This is definitely an error"); // Syntax error, unexpected else
// }

// So while and else DO NOT go together in JS

// Let's take the game up another notch

// use While as a for loop

i = 0 // Initialization outside the loop

while (i+=1) { // Value incrementing moved up
    if (i > 10) { // break condition inside the loop
        break;
    }
    console.log("Kinda similar to what we did in the first example of this code");
}


// do while, A good old C++ friend
i = 0
do {
    console.log("Who even uses a do while loop");
    i+=1
} while (i <= 4)

// while loop on an array?

const array = new Array(1 , 2 , 3 , 4 , 5)

i = array.length - 1

while (i) { // A truthy loop

    console.log(`Value is ${array[i]}`);

    i-=1
    
}

// Where's the one where's the one whe...?!
// for printing 1 , i became 0 , when i became 0 the condition is no longer true, So no 1

// That's it