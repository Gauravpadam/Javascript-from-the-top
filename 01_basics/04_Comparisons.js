console.log("2" < 1, "2" > 1, "2" <= 1, "2" >= 1, "2" == 1); // false true false true false

// Tf just happened?
// Strings are converted into numbers by comparisons and not by equals ==, Hence the result

/* This is ambigious behavious below here */
console.log(null <= 0); // prints true
console.log(null == 0); // prints false
console.log(null >= 0); // prints true

// The reason why it happens is that comparisions (>= , <= , > , <) work differently than equals ==,
// Comparisons convert null into a number, and we have seen that null as a number converts to 0
// That's why, 1 and 3 are true

// Similarly
console.log(undefined == 0, undefined < 0, undefined > 0); // undefined is undefined, even after conversion or in general too

// strict ===
console.log("2" === 2); // prints false, Because types are different and no conversion takes place in strict check