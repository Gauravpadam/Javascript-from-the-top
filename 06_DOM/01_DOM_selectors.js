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



