// Dates and time

let myDate = new Date()
console.log(myDate); // Prints the date in this format 2023-08-25T11:35:33.604Z

// What if we try to modify this a bit?

console.log(myDate.toString()); // Print date in a string
console.log(myDate.toDateString()); // Prints the date in a clean legible format
console.log(myDate.toLocaleString()) // Prints the date along with time
console.log(typeof myDate) // Date is an object in javascript!!

let myCreatedDate = new Date(2023 , 0 , 23) // Month starts from 0 in JS
console.log(myCreatedDate.toDateString());

myCreatedDate = new Date(2023 , 0 , 23 , 5 , 3) // This declares date and time both
console.log(myCreatedDate.toLocaleString())

myCreatedDate = new Date("2023-01-14") // Formatting the date as DD-MM-YY. Note when you dexcribe a format, Month starts from 1!
console.log(myCreatedDate.toLocaleString()); // Prints 14/1/2023 5:30:00 AM

//**************************  Something that should've intrigued you **************************************************************

/*

Notice how we are creating a new object using let and then modifying it using new keyword everytime,
So are we really modifying the same object or, Is a new object really created in heap when we use the new keyword?

Yes that's right, Everytime the new keyword is used there will be a new object created in the heap memory. Aree but we are trying to
manipulate the same variable, Are we really doing that then? Since you saw a new object is instantiated everytime?

Now we're asking the real questions, Here's how it works:
A new object is instantiated EVERYTIME, mark my kind words, EVERYTIME, we use the new keyword with a constructor.
Only the reference of the object gets changed to the newer onemptied, That's it, Done. You know how things work now. Cool

*/

// *********************************************************************************************************************************

let myTime = Date.now() // Returns the number of miliseconds elapsed after Jan 1 1970
console.log(myTime);

// Why in the living sherlock holmes will I ever use this brutus? -_-
// I'll let you know in a second

// I'll use my created date and get it's time
let myDatesTime = myCreatedDate.getTime()
console.log(myDatesTime);

// Now you have two date values, Compare them and use them
// Where would you compare two times?
// Well that's easy, Anywhere you need to compare timely changes, Track events, Arrange in chronological order and much more, You'll compare timestamps

// Okay brutus, Now Give me time in seconds, And mind you, NO DECIMALS
console.log(Math.round(myDatesTime/1000)) // There we go, Can even use Math.floor()


// Some important date time manipulators

let aNewDate = new Date()

console.log(aNewDate.getDay());
console.log(aNewDate.getMonth());

// Total object manipulation on a date

aNewDate = new Date().toLocaleString('default' , {
    weekday: 'long',
    timeZone: 'Asia/Kolkata'
})

console.log(aNewDate) // We get 'Friday' instead of 'Fri' due to weekday being long type