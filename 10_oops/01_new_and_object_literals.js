// OOPs in javascript is prototype based
// This means we have classes, objects, constructors everything in place, but...
// at backstage, prototyping is at work

// In javascript, Object, or Object literals(,or literally objects!) are the basic unit of everything
// Everything except null is an object
// We learned in basics that 'new' keyword creates a new instance of an object
// But to create that instance, an object definition already exists, YES

// eg.
let date = new Date(); // Date is a predefined object and new creates another instance of this object

// likewise, If I define my own object

// Lets say

const user = function(username, email, password){
    this.username = username
    this.email = email
    this.password = password
    // this refers to the current context

    return this
}

// Now lets try making two objects, without new

// const userOne = user('foo' , 'foo@foo.com' , 'foo')
// console.log(userOne); // what'd you expect?
// const userTwo = user('foobar' , 'foobar@bar.com' , 'foobar')
// console.log(userOne); // Now what'd you expect?

// This prints foobar
// but we set foo for userOne?

// This is why new instances are important
// Try this

const userOne = new user('foo' , 'foo@foo.com' , 'foo')
const userTwo = new user('foobar' , 'foobar@foobar.com' , 'foobar')
console.log(userOne);
console.log(userTwo);

// This prints things alright
// Because new instances are created each time i.e. an empty object reference is modified
