// MDN Webdocs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value

// Promise is an object
// It marks the eventual completion OR failure (resolve/reject) of an async operation
// resolved promises can return data
// rejected promises can return errors
// (Technically both can do both but it makes more sense this way)

// History of promises begin with the BlueBird library and Q library
// Eventually native js in ES5/ES6 adopted BlueBird's concepts

// Let's make a promise

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    setTimeout(function (){
        console.log("Async task 1 completed");
        resolve() // I resolve the promise
    },1000)
})

// To 'consume' this resolved promise, I will use .then()

promiseOne.then(function (){
    console.log("Promise one consumed");
})

// Try running this with node

// Another way to declare a promise...

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2 completed");
        resolve() // I resolve the promise
    }, 2000)
    
}).then(function () {
    console.log("Promise two consumed");
}) // Immediate consummption without any references

// We aren't using reject yet

// Now, let's pass an object on resolving the promise

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 3 completed");
        resolve({username: "Gauravpadam" , email: "gaurav@gauravxyz"}) // passing an object on resolving
    } , 3000)
})

promiseThree.then(function (user) {
    console.log(user);
    console.log("Promise three consumed");
})

// Thenning / then chaining / chaining
// refers to passing down an object from continous chains of then

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 4 completed");
        resolve({username: "Gauravpadam" , email: "gaurav@gauravxyz"}) // passing an object on resolving
    } , 4000)
})

promiseFour.then(function (user) {
    console.log(user);
    // Chaining / Thenning refers to returing an object from then to the next then
    return user.username
}).then(function (username) {
    console.log(username);
    console.log("Promise four consumed");
})

// IRL, When dealing with DB fetches, Network fetches, APIs etc.
// You will face errors(for sure)
// It's very important to use reject to handle these errors gracefully(along with try,catch,finally)

const promiseFive = new Promise(function (resolve, reject) {
    let error = Boolean(Math.round(Math.random())) // I'll simulate an error; It might or might not occur
    setTimeout(function () {
        console.log("Async task 5 completed");
        if (!error){
            resolve({username: "Gauravpadam" , email: "gaurav@gauravxyz"})
        }
        else {
            reject("Something went wrong")
        }
    } , 5000)
})

promiseFive
.then(function (user) {
    console.log(user.email);
})
// In case of error
.catch(function (error) {
    console.log(`ERROR: ${error}`);
})
// Finally always gets executed irrespective of the error case
.finally(function () {
    console.log("Promise five consumed");
})

// Irrespective of the .then() norm,
// Promises can and very often be written in async await cases

const promiseSix = new Promise(function (resolve, reject) {
    let error = Boolean(Math.round(Math.random())) // I'll simulate an error; It might or might not occur
    setTimeout(function () {
        console.log("Async task 6 completed");
        if (!error){
            resolve({username: "Gauravpadam" , email: "gaurav@gauravxyz"})
        }
        else {
            reject("Something went wrong")
        }
    } , 6000)
})

// An async function for consuming the promise

async function consumePromiseSix() {
    try {
        const response = await promiseSix
        console.log(response);
    } catch (error) {
        console.log(`ERROR: ${error}`);
    }
}

consumePromiseSix() // call function to consume the promise

// Remember, JSON conversion is ALSO an async task and must be awaited
// An example

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        // const data = response.json() // Uncomment this and the promise stays on pending
        // But when I make it await...
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
      
}

setTimeout(function () { // added a timeout to prevent repeated callbacks
    getAllUsers()
}, 6000)

// We used fetch
// Fetch is an API which can do MANY things
// Fetch returns a promise
// More about fetch in the next module

// Fetch returns a promise, So it can also be consumed using .then()

fetch('https://api.github.com/users/Gauravpadam')
.then(async function (user) {
    const data = await user.json()
    console.log(data.bio);
})
// But what if a meteor drops on GitHub servers and the servers explode?
.catch(function (error) {
    console.log(`ERROR: ${error}`);    
})
.finally(function () {
    console.log("Promise seven consumed, Thala for a reason")
})
// This fetch breaks all bounds and gets executed first
// If you check the output, Fetch example(the first one) creates a mess without a timeout so I added it
// More about fetch in the next module