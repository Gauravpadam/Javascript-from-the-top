console.log("Hello World")
//alert("There are 2 ways js is executed\n1.Browser\n2.NodeJS")

// Let's start having fun and manipulate now >:)
// Manipulate what?
/*
        Manipulate the DOM
        What ok what's a DOM?
        A DOM is a tree-like structure which represents the web-page
        This tree consists of nodes which represent objects.
        What are these objects?
        These objects are elements, Attributes, meta tags

        The root node consists of <html> always

        The DOM provides a DOM API, Which allows javascript to manipulate different elements of DOM

        This DOM API is provided by standardized organizations like World Wide Web Consortium (W3C)

        There are concepts like Virtual DOM used by react which creates a kind of pseudo DOM and makes state changes and other manipulations on it
        When the manipulations are completed or any state is changed, A "diffing" algorithm compares the state changes between two virtual DOMS
        On this basis, Minimal changes would be made to the actual DOM. This improves the efficiency alot

        One concept not related to rect but web browsers in general, The shadow DOM
        Let's for now say in a Shadow DOM, You can describe the behaviour of an element and make it a part of the shadow DOM

*/ 

// You know what JS does now? JS plays with the DOM tree, JS owns every element, every style, every attribute of the page and it can manipulate them at will of the programmer

document.write("I don't need petty tags ~ JS")

// Let's move on with console API
//Most commonly used functions of console API are these
console.log("This is console API")
console.warn("This is how we warn")
console.error("This gives me an error")
console.assert(4 == 4)
console.assert(4 == "bananas")
console.log("The above error is console.assert(4 == bananas)")
console.clear()

// Variables and Datatypes
/*
`   3 ways to declare a variable,
    var - var has a global scope, same as let but with a global scope
    let - let is same as var but with a local/block scope instead
    const - A value which can't be manipulated ahead in the program, They also have a block scope

    Datatypes in JS?
    Strings
    bool
    numbers:
        int
        float
    undefined
    not defined
    null
    nan
*/

// This will totally clear up the constrasting behaviour of vars an lets

function myfunc(){
    if (true){
        var varVariable = "I'm Var"
        let letVariable = "I'm Let"

        console.log(varVariable) // Output: "I'm Var"
        console.log(letVariable) // Output: "I'm Let"
    }

    console.log(varVariable) // Output: "I'm Var"
    console.log(letVariable) // Output: "Not defined"
}

// myfunc() I commented the call since the error cannot be cleared by console.clear()

// Thus proving my point, var has a global scope and let has a block scope
console.clear()


