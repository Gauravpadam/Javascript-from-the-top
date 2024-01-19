// Now that you know prototypes and prototypal inheritance
// Classes are just a syntactic sugar for you
// Just an abstraction of how javascript works behind the scenes

// Javascript does support classes just like any other language

class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    logMe(){
        console.log(`Hello ${this.username}!`);

    }
}

// This defines a class user

// Let's make an object of class user

let foo = new User("foo" , "foo@foo.com" , "oof")

// foo can access class functions

foo.logMe() // Prints Hello foo!

// Looks nice right?
// This is what actually happens behind the scenes

function user(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

user.prototype.logMe = function(){
    console.log(`Hello ${this.username}!`);
}

const foobar = new user("foobar" , "foobar@google.com" , "foobar")

foobar.logMe()

// It's all prototypes in action; The magic of prototypes & prototypal inheritance
// Everything is an instance of object
