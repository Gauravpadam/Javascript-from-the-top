// De-structuring an object to extract properties from it

let user = {
    name: "Davinder",
    courseInstructor: "K.Murthy",
    courseTypes: {
        Languages: "Javascript"
    }
}

let {courseInstructor} = user
console.log(courseInstructor);

// Interesting, Now what if couseInstructor is too much of a big name for me?

let {courseInstructor: instrutor} = user
console.log(instrutor); // Same thing, Shorter name

// Accha what will be the type of this extracted property? IS it an object too?
console.log(typeof instrutor) // It is a string, because the extracted property is a string!

// So what If I extract an object?
let {courseTypes: types} = user
console.log(types); // Nice extraction, Check the type now

console.log(typeof types); // Prints Object

// Thus, The type of extracted property will SAME as the PROPERTY itself!

// Destructuring will be EXTENSIVELY used in json formatting & API, Remember this!