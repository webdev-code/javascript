//use queryselector for ids
//use queryselectorall for classes
//using queryselector for classes will return only the first instance of that class
//using queryselectorall for classes will return a node list of all the classes, but we can apply foreach on that straighaway
//to applpy styles on multiple items using query selectors use FOREACH

const heading = document.querySelector('#heading');

const paragraph = document.querySelectorAll('.paragraph');
console.log(paragraph);

const list = document.querySelector('#list');

const nice = document.querySelectorAll('.nice');
console.log(nice);

const white = document.querySelectorAll('.white');
console.log(white);

const listItems = document.querySelectorAll('li');
console.log(listItems);

heading.style.color = 'blue';
// paragraph.style.color = 'red'; //gives error

paragraph.forEach(function (para) {
  para.style.color = 'red';
});

list.style.color = 'grey';

// nice.style.color = 'pink'; //gives error

nice.forEach(function (niceItem) {
  niceItem.style.color = 'pink';
});

// white.style.color = 'grey'; //gives error

white.forEach(function (whiteItem) {
  whiteItem.style.color = 'white';
  whiteItem.style.background = 'black';
});

// listItems.style.color = 'grey'; //gives error

listItems.forEach(function (listItem) {
  listItem.style.fontSize = '3rem';
});
