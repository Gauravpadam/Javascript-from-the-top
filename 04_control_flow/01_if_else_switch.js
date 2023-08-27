// This is pretty logical and same as other languages
// Let's look at the syntax for the if else & switch statements

let condition = true
if (condition == true) {
    console.log("Execute this code");
}
else {
    console.log("Execute that code");
}

// That's it, basic if else

// A switch looks something like

let month = 8

switch (month) {
    case 1: console.log("January");
            break;
    case 2: console.log("Feb");
            break;
    case 3: console.log("Mar");
            break;
    case 4: console.log("Apr");
            break;
    case 5: console.log("May");
            break;
    case 6: console.log("Jun");
            break;
    case 7: console.log("Jul");
            break;
    case 8: console.log("Aug");
            break;
    case 9: console.log("Sept");
            break;
    case 10: console.log("Oct");
            break;
    case 11: console.log("Nov");
            break;
    case 12: console.log("Dec");
            break;
    default: console.log("Go home");
}

// Did you add breaks to the cases?
// If not, A Fallthrough occurs
// Now wtf is a fallthrough -_- ?
// Don't add a break after a switch case and all the other cases after that will automatically be executed, That's fallthrough
// A break is not compulsary after default, No conditions after it so control is going to return to global anyways

// Let's discuss some operators
// Three musketeers everyone should know about, Well actually 4 :P
// && logical AND
// || logical OR
// ? Ternary conditional operator (super useful)
// ?? Nullish Coalscence, Extremely useful in REACT & REDUX

// We'll see more about this operators in truthy & falsy values

// That's it, Control flow ladies & gentlement