// Javascript has two kinds of data properties
// 1. Data properties
// 2. Accessor properties

// Data properties we saw in 07 module
// Accessor properties provide control over object access
// A part of accessor properties is getter and setter functions

// getters and setters provide us control over how our data is accessed & used by object instances and users

// If you define a getter, you will need to define a setter as well; and vice versa
// othwewise you'll get an error



class User{
    constructor(username, email, password){
        this.username = username,
        this.email = email,
        this.password = password
    }

    get username(){
        // return `${this.username}123` // this causes race condition
        return `${this._username}123`
    }

    set username(newName){
        // this.username = newName // this causes race condition
        this._username = newName
    }
}

const foo = new User("foo" , "foo@foo" , "foo123")


console.log(foo.username) // Doesn't even reach here!

/*
RangeError: Maximum call stack size exceeded
    at set username [as username] (/workspaces/Javascript-from-the-top/10_oops/08_getters_setters_&_access_control.js:13:23)
    at set username [as username] (/workspaces/Javascript-from-the-top/10_oops/08_getters_setters_&_access_control.js:13:23)
    at set username [as username] (/workspaces/Javascript-from-the-top/10_oops/08_getters_setters_&_access_control.js:13:23)
    at set username [as username] (/workspaces/Javascript-from-the-top/10_oops/08_getters_setters_&_access_control.js:13:23)
    at set username [as username] (/workspaces/Javascript-from-the-top/10_oops/08_getters_setters_&_access_control.js:13:23)
    at set username [as username] (/workspaces/Javascript-from-the-top/10_oops/08_getters_setters_&_access_control.js:13:23)
    at set username [as username] (/workspaces/Javascript-from-the-top/10_oops/08_getters_setters_&_access_control.js:13:23)
    at set username [as username] (/workspaces/Javascript-from-the-top/10_oops/08_getters_setters_&_access_control.js:13:23)
    at set username [as username] (/workspaces/Javascript-from-the-top/10_oops/08_getters_setters_&_access_control.js:13:23)
    at set username [as username] (/workspaces/Javascript-from-the-top/10_oops/08_getters_setters_&_access_control.js:13:23)

Node.js v20.11.0
*/

// This happens because defining the setter causes a 'race condition' between the constructor and the setter itself
// Both trying to set the same value 'username'
// This causes a stack overflow on the call stack; which is calling the constructor and setter indefinitely

// Let's try changing the setter variable to _username
// The problem happens when you uncomment line 37
// When you try to get...

/*
RangeError: Maximum call stack size exceeded
    at get username [as username] (/workspaces/Javascript-from-the-top/10_oops/08_getters_setters_&_access_control.js:24:24)
    at get username [as username] (/workspaces/Javascript-from-the-top/10_oops/08_getters_setters_&_access_control.js:24:24)
    at get username [as username] (/workspaces/Javascript-from-the-top/10_oops/08_getters_setters_&_access_control.js:24:24)
    at get username [as username] (/workspaces/Javascript-from-the-top/10_oops/08_getters_setters_&_access_control.js:24:24)
    at get username [as username] (/workspaces/Javascript-from-the-top/10_oops/08_getters_setters_&_access_control.js:24:24)
    at get username [as username] (/workspaces/Javascript-from-the-top/10_oops/08_getters_setters_&_access_control.js:24:24)
    at get username [as username] (/workspaces/Javascript-from-the-top/10_oops/08_getters_setters_&_access_control.js:24:24)
    at get username [as username] (/workspaces/Javascript-from-the-top/10_oops/08_getters_setters_&_access_control.js:24:24)
    at get username [as username] (/workspaces/Javascript-from-the-top/10_oops/08_getters_setters_&_access_control.js:24:24)
    at get username [as username] (/workspaces/Javascript-from-the-top/10_oops/08_getters_setters_&_access_control.js:24:24)

Node.js v20.11.0
*/

// Now get creates a race condition for username
// Try uncommenting line 37 now after _username is set and get
// So, this essentially means that constructor is setting and getting some different variable and getters and setters
// are working on different variable

// Let's see the legacy way to do this (With object prototypes)

function legacy(email , password){
    this._email = email
    this._password = password
}

const legacyFoo = new legacy("legacyFoo@legacy.org" , "legacyFoo123")

// With properties, we can do the same thing

Object.defineProperty(legacyFoo , "email" , {
    get: function(){
        return `${this._email.toUpperCase()}`
    },

    set: function(value){
        this._email = value
    }
})

console.log(legacyFoo.email); // prints LEGACYFOO@LEGACY.ORG
legacyFoo.email = "foo@foo.foo"

console.log(legacyFoo.email); // prints FOO@FOO.FOO

// Similarly for other properties

Object.defineProperty(legacyFoo , "password" , {
    get: function(){
        return `${this._password.toUpperCase()}`
    },

    set: function(value){
        this._password = value
    }
})

console.log(legacyFoo.password); // prints LEGACYFOO123
legacyFoo.password = "foolegacy123"
console.log(legacyFoo.password); // prints FOOLEGACY123

// Some more syntaxes

const anotherFoo = {
    _user: "foo",

    get  user() {
        return `${this._user.toUpperCase()}`
    },

    set  user(value) {
        this._user = value
    }
}

console.log(anotherFoo.user); // prints FOO
anotherFoo.user = "anotherFoo"
console.log(anotherFoo.user); // prints ANOTHERFOO

// Also factory functions can do the same

const newFoo = Object.create(anotherFoo) // Setting anotherFoo as base; inheritance

console.log(newFoo.user); // prints ANOTHERFOO
