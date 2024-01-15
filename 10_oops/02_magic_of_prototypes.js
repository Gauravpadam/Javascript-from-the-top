// Prototypes
// MDN Web Docs: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes

// So, we know now that everything is an object in js, except null

// Every object in JavaScript has a built-in property, which is called its prototype.
// The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain.
// The chain ends when we reach a prototype that has null for its own prototype.

// What this means is that every object has a prototype
// and every object INHERITS prototypes from the base `object`
// The prototypal inheritance carries on until the null bracket is reached

// This is essentially how inheritance works in javascript

// (Functions are objects too btw)
function multipleBy5(num){

    return num*5
}

// Like I said, Everything owned by object is also owned by higher objects (eg. Power prototype property)
// Prototypal Inheritance in action
multipleBy5.power = 2

console.log(multipleBy5(5)); // prints 25
console.log(multipleBy5.power); // prints 2
console.log(multipleBy5.prototype); // prints empty {}

// Let's see another example
function createUser(username, score){
    this.username = username
    this.score = score
}

// We're essentially providing a prototype to the object, called increment
createUser.prototype.increment = function(){
    this.score++
}

console.log(createUser.prototype); // Above function is a part of this now!

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

console.log(createUser.prototype); // Now two functions are a part of it

// Now let's see something interesting
// const chai = createUser("chai", 25)
const chai = new createUser("chai" , 25)
const tea = createUser("tea", 250)

chai.printMe() // should've printed 25 right?

// The problem here is 'chai' is taking a reference without declaring an instance
// Better use new


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. 
    This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object.
    If no explicit return value is specified from the constructor, JavaScript assumes this, 
    the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, 
    if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

// Let's dive deeper into prototypes

// Suppose I take a string
// const str = "foobar     "

const str = new String("foobar    ")


// Now I want the true length of this string, without the whitespaces
// And do not apply a trim directly

// One of the ways I can think of is, giving the prototype of trueLength to this object
// Let's do that

// str.prototype.trueLength = function () {
//     console.log(`True length is: ${this.trim().length}`);
// }
String.prototype.trueLength = function () {
    console.log(`True length is: ${this.trim().length}`);
}

str.trueLength() // prints 6 now

// again, this wont work until we add new
// but new does not work too, huh?

// yes, for this to work, target the higher hierarchy, the String object
// Now, Every object you create out of string will have this trueLength property

// Want to try? let's see
let foo = "foo   "
foo.trueLength() // prints 3

// Let's see the power of absolute prototypal inheritance
// We know by now that javascript inherits prototypes from the top hierarchy i.e. object

// Let's assign a prototype to the object this time

Object.prototype.sayHello = function(){
    console.log(`Hello ${this}!`);
}

// let's see the magic
str.sayHello() // says Hello foobar    !
chai.sayHello() // says Hello [Object Object] xD
foo.sayHello() // says Hello foo    !

// Essentially, every object inherits the top hierarchy prototypes
// That is inheritance in javascript, period.

// A different method of achieving the same effect is __proto__

const user = {
    name: "foo",
    email: "foo@foo.foo"
}

const architecture  = {
    lgtm: true
}

const app = {
    name: "fooapp",
    works: true,
    __proto__: architecture // This essentially means that...
}

console.log(app.lgtm); // I inherited lgtm from architecture, or lets say I inherited architecture

// Another way
app.__proto__ = user
console.log(app.email); // Inherited user too
console.log(app.lgtm); // That erased architecture

// A more modern syntax of doing things is

Object.setPrototypeOf(app , user)
Object.setPrototypeOf(app , architecture) // erases the top again

console.log(app.lgtm , app.email);

// That's prototype masterclass for you





