// You know hoe forEach works now

const coding = ["js" , "py" , "java" , "cpp"]

// Let's try storing the values
const values = coding.forEach( (element) => {

    console.log(element);
    return element

} )

// Let's try calling the reference of the stored values
console.log(values); // This does nothing, Nothing at all

// With or without the reference, There is an undefined returned, Why? Let's find out
// I'm adding a return to the forEach, Let's see if it fixes the problem

// In conclusion, forEach can NOT return values, Reason?
// forEach is primarily designed to iterate over and modify your elements

// If you want, You can push your values to a new array, something like

const myArr = new Array()

coding.forEach( (element) => {
    if (element.startsWith('j')) {
        myArr.push(element)
    }
} )

console.log(myArr); // prints js, java

// No shit sherlock, How do I return my values now? -_-
// Here's when filter map reduce walks in. Let's see

let numArray = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]


const result = numArray.filter( (element) => (element > 4) )

console.log(result); // Interesting, Prints [5 , 6 , 7 , 8 , 9 , 10]

// So, Both can do some similar stuff eh? What's so special about filter?

// filter is widely used in realtime scenarios where you need to filter some data from the json
// Suppose you fetch some JSON from a db

const fetchedData = [    
    {"name":"Ram", "email":"ram@gmail.com", "age":23},    
    {"name":"Shyam", "email":"shyam23@gmail.com", "age":28},  
    {"name":"John", "email":"john@gmail.com", "age":33},    
    {"name":"Bob", "email":"bob32@gmail.com", "age":41}   
] 

  // Cool, We have some JSON data, Let's filter it out

let jsonFiltering = fetchedData.filter( (object) => object.age > 30) // filters out  John and Bob


console.log(jsonFiltering); // prints 33 & 41 ages

// Now that you know the use of filter

// Let's see what map holds for us

numArray = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

// Let's say I want to add 10 to each number

let modifiednumArray = numArray.map((num) => (num + 10)) // 10 is added

console.log(modifiednumArray) // prints numArray with added 10

// Hold on, Do these methods affect original arrays too?

console.log(numArray) // NADA, Doesn't affect the original Data structure

// Now let's take it to the next level, Chaining

// Chaining is when you use multiple methods at the same time

// suppose I want to add 10 and filter out the numbers greater than 15, Let's do this

modifiednumArray =  numArray.map((num) => (num + 10)).filter((num) => (num > 15))

console.log(modifiednumArray); // Prints [ 16, 17, 18, 19, 20 ]

// Cool, That's it

// Now a heads up, You can use multiple techniques to do the same work, Choose whatever comes to mind while doing it
// If forEach comes to mind, Use that, for OF? Use that, For in? Use that, filter map reduce came to mind? Go ahead
// That's how It should be

// Okay , Coming back to reduce

// Reduce acts as an accumulator, What do you mean by this? We'll see

const arrayReduce = numArray.reduce(function (acc , num) {
    return acc + num
} , 0)

// Okay wtf just happened?
// Let me explain
// reduce is an accumulator, It takes an initial value, And takes the array values
// Adds the initial value with the array value and returns it
// For the next iteration, Return value becomes the initial value and it is added to the next array value
// At last, We get the accumulated result of the array, The sum some might say

// Easy? Let's see where it might come in handy in real-ltime environment

// Suppose you build an e-commerce website and you need to add up the prices in shopping cart, but anything which costs more than rs 5 is discounted!
// It's a sale xD
// Okay so what comes to mind?
// chaining filter and reduce? Let's try that

const shoppingCart = numArray.filter((num) => (num <= 5)).reduce((acc , num) => (acc + num) , 0) // What I did? Simple

// I filtered out all values less than and equal to 5 and I applied an accumulator on those values, with an initial value of 0
// Let's see the result

console.log(shoppingCart); // prints 15, perfect

// That's it, Cool, Easy



