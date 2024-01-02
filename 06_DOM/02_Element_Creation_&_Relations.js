const div = document.createElement('div') // Made a div
div.setAttribute('class' , 'main') // div class is now main

const title = document.createElement('h2')
title.appendChild(document.createTextNode("This is the main div")) // Appending a text node inside title
div.appendChild(title) // title is now a child of div

const nodeList = document.createElement('ul') // Made an unordered list

for (let i = 0; i < 4; i++) {
    const listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(`Day ${i}`));
    nodeList.appendChild(listItem); // chained operation to make a ul
}

div.appendChild(nodeList) // Appending nodeList as a child of parent

// Traversing the dom!

console.log(div.childNodes) // Prints a nodelist of all childnodes
console.log(div.children) // Prints all parent nodes inside div in an htmlCollection
console.log(div.firstElementChild.innerHTML) // Prints title probably just taking a hunch :P
console.log(div.lastElementChild.children); // list items will get printed
console.log(div.firstElementChild.nextSibling); // second child element of div element
console.log(div.querySelector('li').parent); // Prints ul

div.style.color = 'orange'; // orange font

const body = document.querySelector('body'); // selecting the body

body.style.backgroundColor = '#212121'; // body styling

document.addEventListener('DOMContentLoaded', function () {
    body.appendChild(div); // div is now the child of body
});


// Test this!

