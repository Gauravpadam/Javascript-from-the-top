// There are multiple ways to declare and print strings in JS

const name = "Krishnamurthy"
const repoCount = 33

// Here's the older syntax used to print strings
console.log(name + " " + repoCount);

// This is an outdated approach and one should not use it in modern development
// Instead, a much more appreciated syntax nowadays is using string interpolation
// tf is that? -_-
// Let me explain, It's when you create placeholders for variables to be added within strings
// In Javascript, This is done using backticks

console.log(`Hello this is ${name} and my repo count is ${repoCount}`);

// This looks much more clear, concise and is well appreciated
// Why use string interpolation?
// Many things can be done on the go, for instance apply string methods to the variables

// Now I'm about to twist your brain, Here's another way to declare a string as an object

const anotherString = new String("Stringasanobject")

console.log(anotherString); // Interesting right?

// Let's go deeper
console.log(anotherString[0]); // Letters are stored as key value pairs

console.log(anotherString.__proto__) // String's prototypes, (Not empty , Just displayed empty)

console.log(anotherString.length) // Access all string methods here

// Accha tell me one thing, Will the original string be changed if I apply any string manipulation like the below one?
console.log(anotherString.toUpperCase())
// Aree, Why would it change? String is a primitive call by value datatype, It makes a copy and transforms that copy not the original one
// Only stack memory is changed
// That's it


// Let's manipulate the strings further

const yetAnotherString = "     fixthisString      "

console.log(yetAnotherString.trim()) // trims the whitespace and \n characters , trimstart and trimend have the same logical use cases

console.log(yetAnotherString.trim().substring(0 , 7)) // Print a substring

console.log(yetAnotherString.trim().slice(-15 , 7)) // Prints a slice of the string in any position

const url = "https://www.gauravpadam.netlify.app"

console.log(url.replace("www." , "")) // Replaces www. with empty string

console.log(url.includes('gauravpadam')) // Prints True

console.log(url.split('.')) // Returns an array of strings with the split at given value