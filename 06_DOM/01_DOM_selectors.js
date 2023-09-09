// Okay dingus, let's come to DOM now

// You know DOM, How would you play with it? Selectors

// Javascript has selectors which can help manipulate the entire DOM tree
// What are these selectors?
// Selectors are methods

// Let's see some frequently used examples

document.getElementById('elementIdGoesHere')

// Suppose I select an element <h1 id='title' class='heading'>DOMDOMDOM</h1>

// Eh, How would I select it?

// Listen here Brutus -_-

document.getElementById('title')

// OR

document.getElementsByClassName('heading')

// OR ANYTHING which comes in your walnut brain, USE IT

// Wait wait wait wait wa
// Why className? Why not just class
// Interesting, In DOM, class clashes with the html keyword class, Which is actually an attribute, That's why in react too, We call classes by className only!

// Okay, So now you've selected this heading, Now what?
// Do your deed

document.getElementById('title').innerHTML(<h1>This is how you change the html inside the selected element</h1>)

// Or maybe I'd just want to get the attributes from it?

document.getElementById('title').getAttribute('Now pass any attribute name you want here')

// For instance

document.getElementById('title').getAttribute('class') // selects h1 and prints heading
document.getElementById('title').getAttribute('id') // selects h1 and prints title
// YES, The same reason we talked about before!

// Accha what if I want to set attributes?

document.getElementById('title').setAttribute('Attribute' , 'set value')

// For instance

document.getElementById('title').setAttribute('class' , 'brutus') // Now the class of h1 is brutus xD

// Important thing to note, It will always ALWAYS overwrite the current attribute, If you want you can keep multiple attributes

document.getElementById('title').setAttribute('class' , 'brutus heading') // Now we have two attributes set over this element h1

// Now let's do something more notchbreaking

// let's say I have a body tag, className is set to 'bg-black'
// How do I select this body tag?

let body = document.getElementsByClassName('bg-black')

// Congratulations buffon you just stored an htmlCollection into a variable
// Wait what?
// Yes, getElementsByClassName returns an html collection, even if there's only one element of that class by that name (like in this case)
// So. to select the actual body and store it, use

body = document.getElementsByClassName('bg-black')[0]

// Now body has body

// Let's change the body colours

body.style.backgroundColour='#000'
body.style.colour='#fff'

// And now the page is in dark mode!

// Now Now let's look at some different methods to peek inside a tag

let h1 = document.querySelector('h1') // This is a very handy method, It selects the first instance of the tag inside the DOM
undefined // This undefined is related to functions, Remember what happens when you execute a function with no return type?
h1 // Calling h1 object
<h1>​…​</h1> // h1 is a tag
h1.innerHTML // This deciphers the tag completely, Entire html structure is displayed
`What's a DOM anyway? <span style="display:none">This is unreadable</span> `
h1.innerText // This gives the text, Only the text visible inside the tag
"What's a DOM anyway?"
h1.textContent // This gives the hiddent text as well
"What's a DOM anyway? This is unreadable"

// Wanna see how deep the rabbit hole goes?
// See the level of specificity queryselector gives

document.querySelector('input') // This is normal
// Output <input type="password">
document.querySelector('input[type]') // This, we can search by specifying attribute
// Output <input type="password">
document.querySelector('input[type="username"]') // We can search by specifying what is the attribute
// Output null
document.querySelector('input[type="password"]') // If the attribute specified matches, It returns the tag
// Output <input type="password">

// And YES, querySelectors can be CHAINED, How? let's see

let listitem1 = document.querySelector('ul').querySelector('li')

// What if I want all the list items?

let allListItems = document.querySelector('ul').querySelectorAll('li')

// Now you have the list, That's it

// This allListItems is NOT an array, Although it behaves like one
// Iterators like forEach work on it, But filter map reduce wont

// Speaking of iterators, Let's try something fun

let arr = new Array(document.querySelector('h1'),document.querySelector('h2'),document.querySelector('h3')) // I made an array
//Output undefined
for(Element of arr){console.log(Element)} // for of loop works on arrays
// This prints
// VM1757:1 <h1>​…​</h1>
// VM1757:1 <h2>​A perception of thoughts​</h2>​
// VM1757:1 <h3>​Can you really say if a concept is conceptual or real?​</h3>​
// undefined
for(Element of arr){Element.innerText="Was someone playing with the DOM?"} // Modifying the elements all at once
// Sets all elements as 'Was someone playing with the DOM?'

// I remember telling you that NodeLists and HTMLCollections aren't arrays, Let's talk about that

myArr = document.getElementsByClassName('list-item') // stores html collection
// Prints HTMLCollection(4) [l1.list-item, l1.list-item, l1.list-item, li.list-item]

myArr.forEach((li) => (console.log(li))) // Trying to use forEach on an HTML Collection
// Like I said, HTML collections are not arrays
// VM2315:1 Uncaught TypeError: myArr.forEach is not a function
//     at <anonymous>:1:7
// (anonymous) @ VM2315:1
myArr = Array.from(myArr) // Converts HTML collection to an array
// Prints (4) [l1.list-item, l1.list-item, l1.list-item, li.list-item]
myArr.forEach((li) => (li.style.backgroundColor = 'green')) // Sets all li bg color to green
// prints undefined

// That's it