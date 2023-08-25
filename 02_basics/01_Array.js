// Arrays in javascript are consecutive stores of data

let nums = [0 , 1 , 2 , 3 , 4, "Is this even legal?" , true , "Yes arrays in JS and Python can contain different datatypes!"]

console.log(nums);

// Let's look at the object syntax

let arr = new Array(1 , 2 , 3 , 4)

// array methods

arr.push(5) // arr.append?
arr.pop() // 5 popped

console.log(arr)

arr.unshift(9) // Insert the element at the start of array and returns the new length
console.log(arr);

arr.shift() // Pops the first element of the array and returns it, On empty array it returns undefined and array is not modified

console.log(arr); // 9 Gone

console.log(arr.includes(9)) // prints false
console.log(arr.indexOf(9)) // prints -1 ; Not found

const newArr = arr.join('') // converts into string ; ''.join(arr)

console.log(newArr) // prints 1234

// slice & splice

console.log("A ", arr);

let sliced = arr.slice(0 , 3) // A little heads up , Slice and splice both are end index EXCLUSIVE

console.log("Slice" , sliced) // 1 , 2 , 3

let spliced = arr.splice(0 , 3)

console.log("Spliced" , spliced); // 1 , 2 , 3 ?! So slice and splice are same right?

// Terribly wrong! Lets check the original array after splice

console.log(`B ${arr}`); // Prints 4 , Splice REMOVES the original elements from the array and returns them in a new array, It can also replace the original array with provided element


// Let's take it up a notch

const marvel = ['thor' , 'Ironman' , 'Hulk']
const dc = ['superman' , 'flash' , 'green lantern']

marvel.push(dc); // What did you expect? A flattened array? Not quite it
console.log(marvel); // Output: [ 'thor', 'Ironman', 'Hulk', [ 'superman', 'flash', 'green lantern' ] ]

// Push treats every thing, every object as a single entity

marvel.pop() // reset

// The spread operator '...'
// The spread operator is used to separate all the entities of an array object

marvel.push(...dc) // there we go, A flattened array
console.log(marvel) // output: [ 'thor', 'Ironman', 'Hulk', 'superman', 'flash', 'green lantern' ]

marvel.splice(-3) // reset
console.log(marvel)

// Another way to flatten a complex nested array structure

let nestedArray = new Array(1 , 2 , 3 , [1 , 2 , 3 , [1 , 2 , 4 , 5 , 9]])
console.log(nestedArray); // A nested array structure

let deNested = nestedArray.flat(Infinity) // flattens all the nesting; ;Returns a new array, Does not do it in-place
console.log(deNested); // output: [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 ]

// How to make an array out of other objects?

let exampleString = new String("Makethisanarray")

let arrayFromString = new Array(Array.from(exampleString)) // Two objects are created in this call! This is stupidity though don't do it

arrayFromString = Array.from(exampleString)
console.log(arrayFromString); // Prints [ 'M', 'a', 'k', 'e', 't', 'h', 'i', 's', 'a', 'n', 'a', 'r', 'r', 'a', 'y' ] ; A string mapped array

// But what if, Just what if, I pass an object to Array.from?

let anInterestingCase = Array.from({name: "Czechoslovakia"})
console.log(anInterestingCase); // This prints an empty array [] , Interesting right? Why did it not convert name to an array?

// In this case, You must define what you need to make an array out of, The keys or the values, We'll see this further in objects

// Okay, What if I want an array of some values?
let score1 = new Number(100)
let score2 = new Number(200)
let score3 = new Number(300)

let allScores = Array.of(score1 , score2 , score3) // Returns an array of given variables
console.log(allScores); // prints [100 , 200 , 300]

// That's it, Cool