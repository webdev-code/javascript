//text content
const gettext = document.querySelector('#text-content');
const text = gettext.textContent;
console.log(text);

//nodevalue
const gettext2 = document.querySelector('#text-content');
// const text2 = gettext.nodeValue; //gives null
const text2 = gettext2.firstChild.nodeValue; //gives text content of the element
console.log(text2);

// getAttribute();
// setAttribute();

const first = document.querySelector('#getattribute'); //selecting the element with id getattribute
const idValue = first.getAttribute('id'); //getting the value of the id attribute
console.log(idValue); //logging the value of id attribute to the console

const second = first.nextElementSibling; //selecting the next sibling for first
const idValue2 = second.getAttribute('class'); // getting the value of a non existant attribute
console.log(idValue2);

const second1 = first.nextElementSibling; //selecting the next sibling for first
const setValue = second1.setAttribute('class', 'red'); // setting the value of class attribute

const setValue2 = second.getAttribute('class'); //getting the value of newly defined class attribute
console.log(setValue2);
