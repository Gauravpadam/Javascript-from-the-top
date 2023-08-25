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

