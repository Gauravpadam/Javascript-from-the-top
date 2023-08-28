// The infamous for loop
// We'll not focus much on this, The syntax is same as Java and C++

for (let i = 0 ; i < 10 ; i++) {
    console.log("This is a for loop"); // prints this line 10 times
}

// Why use let i , Why not var i or const i?
// const will immediately throw an error of editing a const value, While var will cause trouble for us in context to the global scope pollution
// So, we use let

// Cool, Let's try to do the same with an array

let array = new Array(1 , 2 , 3 , 4 , 5)

for (let i  = 0 ; i < array.length ; i++) {
    console.log(array[i]); // prints 1 2 3 4 5
}


// Let's print some tables! (fir the nested looping)

for (let i = 1 ; i <= 10 ; i++) {
    console.log(`\nTable of ${i}\n`);
    for (let j = 1 ; j <= 10 ; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
    } 

    // console.log(`There's not way ${j} is available here, scope is different`); // prints a reference error for j not defined
}

// One question, Would j be available outside the inner loop? You can see the commented print statement and figue it out yourself ;)

// for as a while loop
// same as Java again, just a quick brush up

console.clear() // clearing the clutter
// btw I noticed something peculiar. If you do this in browser, console gets cleared, But in Node environment, Only the statements after console.clear() will appear, Rest will not dissappear but just move up the console
for (let i = 1 ; i <= 10 ; ) {

    console.log(`I'll control the i this time`); // Prints this line 7 times

    if (i % 2 === 0) { // This happens six times
        i+=2
    }
    else {  // If you use a lil brain, This will happen only once
        i--
    }
}

// break and continue

// In real word context, Suppose you're fetching from a database, And using the values for pagination
// In such cases, A page limit has to be defined or your page is f*cked
// We break the fetch loop at the page limit

console.clear() // Again clearing the clutter
let page_limit = 5;

for (let i = 1; i < Infinity; i++) {
    if (i <= page_limit) {
        console.log(`Card ${i} fetched`); // prints card 1 fetched, card 2 fetched...
    }

    else {
        break;
    }
}

// And what about continue?
// What if I want to print only even values?

for (let i = 1; i <= 10; i++) {
    if (i % 2 != 0) {
        continue;
    }

    console.log(`${i} even`); // Mind you I'm not using an else, Continue skips an iteration totally!

}
