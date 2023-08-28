// Now this is where things start to get interesting

// JS is more powerful than python when it comes to inbuilt iterators
// Python does the same thing with itertools module, However some inbuilt iterators are sommon between them


// for of loop

let arr = new Array(1 , 2 , 3 , 4 , 5)

for (let num of arr) {
    console.log(`Value is ${num}`); 
}

// Map (or a hashmap)

const map = new Map() // Initiating a hashmap

// Entering values in a map

map.set("IN" , "India")
map.set("Fr" , "France")
map.set("Ru" , "Russia")

for (let key of map) {
    console.log(`Value for ${key} is ${map.get(key)}`);
// prints Value for IN,India is undefined Value for Fr,France is undefined ,Not quite what we expected huh?
}

// Let's try destructuring the keys and values of map

for (const [key , value] of map) { // Remember the syntax for destructuring a map in JS
    console.log(`Key is ${key} and value is ${value}`); // prints the format Key is IN and value is India
}

// Interesting, Will the same work for objects as well? Let's find out

 let myObj = new Object({
    Thor: "Ragnarok",
    Daredevil: "Sixth Sense",
 })

//  for (const [hero , power] of myObj) {
//    // console.log(`${hero} => ${power}`); // and it FAILS, typeError myObj is not iterable, why is that?
//  }

 // simple, objects need some tweaking to iterate through, We generally use for in loops to iterate through objects

 // for in loop

 // Ayee >:( first teach me why for in? What was the need of for in When we had for of?
 // Okay, Let's get this clear

 // There is some inner story of Objects
 // There are two kinds of Objects in javascript when it comes to the context of iteration
 // 1. Iterable objects (arrays, strings, maps, sets, etc.) , Also known as collections
    /* These objects can be iterated through by using iteration mechanisms like for of and other loops.
        They have:
            - A defined iteration order
            - Iteration Protocol (The key to making an object iterable)
                What does iteration protocol contain?
                A Symbol.iterator key for Symbol.iterator method which returns an iterable object.
                This iterable object has a next method which is supposed to produce the next value in iteration sequence
                This next method itself returns an object with two properties:
                    -> value - The current value to be iterated
                    -> done - a bool which says if the iteration is completed or not
    */

 // 2. Non-Iterable objects
    /*
        Unlike Iterable objects, Non-Iterable objects lack the Iterable Protocol and therefore do not have a predefined way to be iterated
        using constructs like for of loop. They do not have an iterator object with the next method defined in them, So no value and done are produced as such
        Thus, They are Non-Iterable

        So the question is, Why for in works on these objects then?
            for in iterates through the enumerable properties of an object, It does not rely on the iterable protocol like the for of does
            So, It can access the keys and values easily, Since it is iterating through the properties of an object
        
        That's it, Cool

    */

for (const key in myObj) {
    console.log(`${key} => ${myObj[key]}`); // This prints perfectly!
}

for (const [hero , power] in myObj) { // This is a peculiar behaviour, You can only access the KEY with for in so the output you get is T => h and D => a
    console.log(`${hero} => ${power}`); // Destructuring gets treated as the KEY
}

// Now now, Would this for in work for iterable objects? Let's find out

for (const num in arr) {
    console.log(num) // it does! It does work for iterable objects! It works...? right?
}

// Let's try this again
console.clear()
arr = ["This" , "Is" , "A" , "Test"]

for (const key in arr) {
    console.log(key); // Wtf, It does not print the strings but 0 1 2 3 4, It prints the KEYS godammit!
}

// So this means, Arrays have keys TOO?
// Brutus, Yes they do, And they start from 0
// Wtf do you mean by arr[0] or arr[1] if they are not the keys tell me
// Those indices are keys itself

// I think you know what I'm doing next, But I'll still do it

for (const key in arr) { // This behaves like an ordinary for loop
    
    console.log(arr[key]); // Prints This Is A Test
}

// Okay, Let's take it to the next level

// Apply for in on a map, Let's see what happens

const hashmap = new Map()
hashmap.set('Dharmendra' , 'Deol')
hashmap.set('Henry' , 'Cavill')

for (const key in map) {
    console.log(key); // Strange huh, It prints nothing, No errors Just nothing, Why?
}

// For now, Let's just say that
// We know already for in is meant for iterating through enumerable properties, But a map on the other hand, Stores the properties
// In key-value pairs, Which are not enumerable in the same way as properties of other objects


// Alright, Next up is forEach loop

const anotherArray = new Array("JS" , "Py" , "Java" , "CPP" , "Rb")

anotherArray.forEach( function (element) { // A callback function is expected inside forEach, Callbacks do not have a name
    console.log(element);
} )

// Interesting, Let's try with an arrow function
 
anotherArray.forEach( (element) => {
    console.log(element);
} )

// Now, Let's pass a reference to the forEach
console.clear()

function printMe(element) {
    console.log(element); // Okay this does have any context over here, It prints nothing
}

// This is passed to forEach

anotherArray.forEach(printMe) // Mind you don't add parentheses, We just need a reference not execution

// And it prints our values perfectly

// Now, I'll show you the true prowess of forEach

// It does not only bring the element, But also the index and the entire f*cking array along with it, Don't believe me? Just watch

anotherArray.forEach( (element , index , arr) => {
    console.log(element, index, arr); // prints JS 0 [ 'JS', 'Py', 'Java', 'CPP', 'Rb' ], Py 1 [ 'JS', 'Py', 'Java', 'CPP', 'Rb' ] ...
} )


// The most important port, The significance of forEach in a realtime enviornment

// Suppose I fetch a JSON from a database

const fetchJson = [
    {
        languageName: "Javascript",
        abbreviation: "JS"
    },
    {
        languageName: "Python",
        abbreviation: "Py"
    },
    {
        languageName: "Java",
        abbreviation: "Java"
    },
]

// Json array? Broken down within SECONDS with a forEach

fetchJson.forEach( (element) => { // In arrays, Each element was a string, In a JSON array, each Element is an Object!
    console.log(element.languageName); // Destructuring of an object
} )

// This print Javascript, Python and Java

// Now you know, Why forEach rules the iterations in JS

// That's it, Easy, Cool

