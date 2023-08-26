// Let's talk about objects as singletons


const tinderUser = new Object() // This is a singleton object

console.log(tinderUser); // prints empty object

// same output as
// const tinderUser = {} // This is a non singleton object
// console.log(tinderUser)

tinderUser.id = "123abc"
tinderUser.name = "K.Murthy"
tinderUser.isLoggedIn = false
     
console.log(tinderUser) // Prints the object

// Are nested objects allowed in JS? Let's find out

const regularUser = {
    email: "some@gmail.com",
    fullname: { // An object inside object
        userfullname: { // An object inside object inside object!
            firstname: "Koala",
            lastname: "Sloth",
        }
    }

}

// Object nesting is allowed in JS!

console.log(regularUser); // Prints the nested object


// let's extract values from the object

console.log(regularUser.fullname.userfullname.firstname); // prints koala
console.log(regularUser.fullname.userfullname.lastname); // prints sloth

// A sneak peek into API calls

// What if fullname doesn't exist inside regularUSer?
// What will you do? Write a massive ugly looking if else block?
// See that will work, But Js offers better options

console.log(regularUser.fullname?.userfullname.firstname); // A simple ? will do the same thing as the if else block does


// Objects combinations , So important!

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}

let obj3 = { obj1 , obj2 } // Try to print this

// console.log(obj3); // Not quite what we wanted, We wanted a flat single object

// Let's try ... spreading the object

obj3 = {...obj1 , ...obj2} // This works as intended!

console.log(obj3) // prints { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// Let's try more ways to flatten objects

obj3 = Object.assign({} , obj1 , obj2) // Copies the values from obj1 and obj2 into a new object and returns that object, {} is the object that will be modified and returned
console.log(obj3);

// Try playing with the above syntax
obj3 = Object.assign({0: "z"} , obj1 , obj2) // The target object already contains some information for itself
console.log(obj3); // prints { '0': 'z', '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// What if I don't give a target object?
obj3 = Object.assign(obj1 , obj2)// In this case, obj1 is treated as target and obj2 is added to it, Finally target i.e. obj1 is returned
console.log(obj3); // output is the same

// Let's talk some real time scenario now
// Suppose you're fetching from a database , You get a json array

const users = [
    userDetails = {
        userone: {
            id: 1,
            email:"a@gmail.com"
        },
        usertwo: {
            id: 2,
            email:"b@gmail.com"
        },
        userthree: {
            id: 3,
            email:"c@gmail.com"
        },
        userfour: {
            id: 4,
            email:"d@gmail.com"
        },
        userfive: {
            id: 5,
            email:"a@gmail.com"
        },
}

]

// extracting info from a json array

console.log(users[0]) // Selects userDetails (object 0)
console.log(users[0].userone) // selects userone from userDetails
console.log(users[0].userone.email) // prints email of userone from userdetails

// Let's try to extract all keys from users

console.log(Object.keys(users)) // Prints 0 , AS userDetails is the 0th key
console.log(Object.keys(users[0])); // Prints the keys inside userDetails
console.log(Object.values(users[0])); // prints the values of the keys in userDetails

// JS is very convenient, It makes automatic key-value pairs when we use Objects.entries on an object
console.log(Object.entries(users)) // Interesting result

// Let's try something more convenient
console.log(Object.entries(tinderUser)) // Prints [ [ 'id', '123abc' ], [ 'name', 'K.Murthy' ], [ 'isLoggedIn', false ] ]

// Check if an objects has specified property
console.log(tinderUser.hasOwnProperty('isLoggedIn')) // Prints true

// That's it