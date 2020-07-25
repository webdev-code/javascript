//get element by id
const heading = document.getElementById('heading');
heading.style.background = 'black';
heading.style.color = 'white';

//get element by tag name

//nodelist - arraylike object , index - length
//spread operator in es6 to make nodelist an array

const listItems = document.getElementsByTagName('li');
console.log(listItems); //nodelist of all elements of tag li
// redClass.style.color = 'red'; // gives error
// redClass[0].style.color = 'red'; // setting style for individual (indexed 0) element

// get element by class name

const blue = document.getElementsByClassName('blue');
console.log(blue); //nodelist of all elements of class blue
// blue[1].style.background = 'black'; // setting style for individual (indexed 1) element
// blue[1].style.color = 'blue'; // setting style for indexed 1 element

// setting style for all nodelist elements
for (let i = 0; i < blue.length; i++) {
  blue[i].style.background = 'aqua';
}

for (let i = 0; i < listItems.length; i++) {
  listItems[i].style.color = 'red';
}
