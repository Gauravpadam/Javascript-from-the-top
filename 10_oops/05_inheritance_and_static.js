// Now you know the syntactic sugar of classes

// We can look at inheritance now
// Again, it's all prototypes bts

// class User extends Object {
//     // Inheritance over xD
// }

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Hello ${this.username}!`);
    }

    static createId(){ // making this static for a reason
        return "123";
    }
}

// once an object is declared static, It cannot be re-instantiated

const foo = new User("foo")

foo.logMe(); // Hello foo!

try {
    console.log(foo.createId()); // will not work and throw errors
} catch (error) {
    console.log(`This method is static and will not be reinstantiated by any object`);
}

// Let's inherit the user

class SpecialUser extends User{
    constructor(username, email, password){
        super(username) // behind the scenes, call() is working here; sending the current context and setting the variable
        this.email = email
        this.password = password
    }
}

const anotherFoo = new SpecialUser("anotherFoo" , "anotherFoo@foomail.foo" , "foobar")

anotherFoo.logMe() // Function is inherited, super works too

// can I use the static method with inheritance?
try {
    console.log(anotherFoo.createId());
} catch (error) {
    console.log(`This method is static and will not be reinstantiated by any object`);
}

// No, the function is not created again for a new instance once it is declared static
// This means? the function does not exist for intances, there's nothing called createId outside that class

// Bts of static
/*
Public static features are declared using the static keyword. 
They are added to the class constructor at the time of class evaluation using the [[DefineOwnProperty]] semantic 
(which is essentially Object.defineProperty()). They are accessed again from the class constructor.
*/

// but if i use
console.log(User.createId())

// prints 123

// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
/*
Static methods are often utility functions, such as functions to create or clone instances. 
Public static fields are useful when you want a field to exist only once per class, not on every class instance you create. 
This is useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.
*/

