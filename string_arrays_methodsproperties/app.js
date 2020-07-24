// string properties and methods
let text = ' Peter Jordan';
let result = text.length; //property to findout length of string
console.log(result);

console.log(text.length);
console.log(text.toLowerCase()); // to lowercase
console.log(text.toUpperCase()); // to uppercase
console.log(text.charAt(0)); // tells the charector at index number (0 in this case)
console.log(text.charAt(text.length - 1)); // gives the final charector of the string
console.log(text.indexOf('e')); //gives the index of charector e
console.log(text);
console.log(text.trim()); // removes any whitespaces in the start of the string
console.log(text.trim().toLowerCase().startsWith('peter')); //  combining different string methods
console.log(text.includes('eter')); // whether the string includes eter or not
console.log(text.slice(0, 2)); //slices the text from 0 index to 1 , 2 not included
console.log(text.slice(0, text.length)); //slices the text from 0 index to the final charector of the string , text.length not included
console.log(text.slice(-3)); // slices the string from backwards , last three charectors

// Array Properties and Methods

let names = ['john', 'bobo', 'barry', 'olga', 'ben'];

//length
console.log(names.length); //gives the lenth of the array
console.log(names[names.length - 1]); //gives the element at the last index of the array

// concat
const lastNames = ['pepper', 'onion', 'banana'];
const allNames = names.concat(lastNames); // concats the array names with the lastNames array
console.log(allNames);
const fullName = names[1].concat(lastNames[1]); //without space
const fullNames = names[1].concat(' ').concat(lastNames[1]); // concats the first element of names array with the first element of the lastNames array (with space)

console.log(fullName);
console.log(fullNames);
// reverse
console.log(allNames.reverse());

//unshift // adds an element in the start of the array
allNames.unshift('susy');
console.log(allNames);
allNames.unshift('anna');
console.log(allNames);
//shift // removes an element from the start of the array
allNames.shift();
console.log(allNames);
allNames.shift();
console.log(allNames);
allNames.shift();
console.log(allNames);
allNames.shift();
console.log(allNames);
//push //adds an element at the end of the array
allNames.push('susy');
console.log(allNames);
//pop // removes and element from the end of the array
allNames.pop();
// allNames.pop();
// allNames.pop();
// allNames.pop();
console.log(allNames);
// splice - mutates original array(changes the origional array)
const specificNames = allNames.splice(0, 3); //selects items from index number 0 to 3 (3 included) and puts them in specificNames array and also changes the origional array
console.log(specificNames);
console.log(allNames);

//slice (does not change the origional array )
const newNames = names.slice(0, 3); //selects elements of index 0 to 2 (3 not included) and puts them in array newNames
console.log(names); // slice doesnot mutates the origional array
console.log(newNames); // sliced array
