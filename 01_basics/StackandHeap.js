// ************* Primitive Datatypes kept in Stack *************
// Non Primitive datatypes kept in Heap

let myName = "Krishnamurthy" // String, A primitive datatype created in stack memory
let yourName = myName

yourName = "Gaurav"
console.log(yourName); // Gaurav; I just changed it
console.log(myName); // Krishnamurthy; Passed by value, Not by reference

// *************** Non - Primitive always kept in heap ******************

let cityOne = { // Object created in heap memory
    name: "Boston",
    class: "S"
}

let cityTwo = cityOne // Call by reference

cityOne.name = "Birmingham";

console.log(cityTwo); // I have changed the reference
console.log(cityOne); // The original one gets changed

// Checkout the png to better understand this
