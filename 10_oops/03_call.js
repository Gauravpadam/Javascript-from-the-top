// The reason behind explicit need of .call()

// We know by now,
// First thing that gets loaded onto the call stack is the GEC(Global execution context)
// As the control keeps flowing through the program, local/functional execution contexts are loaded on top of it

// Now, Interesting thing is that we know we can't access something outside our current context directly
// But in the case of functions, javascript allows some lease
// Let's see how

const fooHolder = function () {
    console.log("I log foos");
}

function fooCaller(username, email, password) {
    fooHolder()
    this.username = username
    this.email = email
    this.password = password
}

fooCaller("foo" , "foo@foo" , "foobar")

// This sctually prints "I log foos"
// So, The function is being called correctly
// What's the big deal?
// The deal is that the contexts differ

// Let's take a look at the problem

function setFoobar(username) {
    this.username = username
}

function getFoobar(username, email , password) {
    // setFoobar(username) This does not work!
    setFoobar.call(this , username)
    this.email = email
    this.password = password

    return this // (always try to write verbose code)
}

const fooOwner = new getFoobar("foobar" , "foobar@foobar" , "foobar")
// console.log(fooOwner);

// The problem here is, username is not being set
// This is because when we call the other setFoobar and set the username
// setFoobar sets the username in it's own context
// After execution of the function, this context is deleted and the variable is lost
// what remains is email and password

// We solve this problem by passing the current execution context
// and call helps us do exactly that, pass the current execution context along with the function call

console.log(fooOwner);

// That's it, now the context anomaly is solved
// another function can now resolve the scope and set the variables to other function's contexts'

