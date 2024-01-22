// A deep dive into objects
// Problem statement: Can you change the value of Math.pi?

// Let's try
console.log(Math.PI); // 3.141592653589793

// To reassign this property
Math.PI = 7 // coz thala

console.log(Math.PI); // Still 3.141592653589793

// The reason behind not being able to overwrite is the definition of pi property

console.log(Object.getOwnPropertyDescriptor(Math, "PI"))

/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/

// The description of this property says that it is not writeable, enumerable and configurable
// Can we change this?

// Object.defineProperty(Math, "PI" , {
//     writeable: true,
//     enumerable: true,
//     configurable: true
// })

// This throws an error
/*
TypeError: Cannot redefine property: PI
    at Function.defineProperty (<anonymous>)
    at Object.<anonymous> (/workspaces/Javascript-from-the-top/10_oops/07_object_properties.js:28:8)
    at Module._compile (node:internal/modules/cjs/loader:1376:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
    at Module.load (node:internal/modules/cjs/loader:1207:32)
    at Module._load (node:internal/modules/cjs/loader:1023:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
    at node:internal/main/run_main_module:28:49
*/
// So PI can't be redefined, but what about other objects that we create?

function foo() {
    this.username = "foo"
    this.email = "foo@foomail.foo"
    this.whichFoo = function () {
        console.log("newfoo");
    }
}

const newfoo = new foo()

console.log(newfoo.username); // prints foo

newfoo.username = "foobar"

console.log(newfoo.username); // prints foobar; overwritten

console.log(Object.getOwnPropertyDescriptor(newfoo, "username"))

/* { value: 'foobar', writable: true, enumerable: true, configurable: true } */

// Let's try to restrict it
Object.defineProperty(newfoo, "username" , {
    writable: false,
    enumerable: true
})

console.log(Object.getOwnPropertyDescriptor(newfoo, "username"))

/* {  value: 'foobar',  writable: false,  enumerable: false,  configurable: true } */

newfoo.username = "fooagain"

console.log(newfoo.username); // unchanged; prints foobar

// enumerable property makes your object keys enumerable
// This means loops like for of can visit/iterate over them

// With enumerable set to false

for (const [key , value] of Object.entries(newfoo)) {
    console.log(`${key} : ${value}`);
}

// Prints
/*
TypeError: newfoo is not iterable
    at Object.<anonymous> (/workspaces/Javascript-from-the-top/10_oops/07_object_properties.js:87:29)
    at Module._compile (node:internal/modules/cjs/loader:1376:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
    at Module.load (node:internal/modules/cjs/loader:1207:32)
    at Module._load (node:internal/modules/cjs/loader:1023:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
    at node:internal/main/run_main_module:28:49
*/

// A thing I debugged here is that...
// When you make objects out of a class with a new keyword
// They are not iterable by default
// Reason is that they do not possess the Symbol.iterator() property which provides the next() item in the iteration
// Better explained in 05_iterations (for of loops)

// Another thing I debugged is that while objects are not directly iterable, Their entries are which can be accessed by
// Object.entries(ObjectName)

// Let's try to make an iterable object

const foobar = {
    name: "foo",
    email: "foo@foo",
    id: function () {
        return `${this.name}${Math.round(Math.random()*100)}`
    }
}

for (let [key , value] of Object.entries(foobar)) {
    typeof value === 'function' ? console.log(`${key} : ${foobar[key]()}`) : console.log(`${key} : ${value}`);
}

// That's it, Now you know object properties






