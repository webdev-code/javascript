// primitive(value)[strings , numbers , boolean , null , undefined , symbols(ES6]
// vs
// refernce(object)[arrays , functions , objects]
// datatypes
const number = 1;
let number2 = number;
number2 = 7;
console.log(`the first value is ${number}`);
console.log(`the second value is ${number2}`);

let person = { name: 'bob' };
let person2 = person;
// let person2 = { ...person }; //spread operator
person2.name = 'susy';
console.log(`the name of the first person is ${person.name}`);
console.log(`the name of the second person is ${person2.name}`);

// truthy and falsey values
// falsey values : '' , "", ``, 0 , null , undefined , NaN false
// if something is evaluated to a falsey value it is considered to be false
// all other values are Truthy values

// null and undefined
// null is a keyword (representing nothing) ,  we assign the value of null to a variable
// undefined is a value obtained as result of a javascipt calculation

//ternary operator

// let num1 = null;
let num1 = undefined;
let num2 = 5;
let sum = num1 + num2; //adding null and a number is equal to 0 (null) + 5 = 5

sum ? console.log('Truthy value') : console.log('falsey value'); // if else

sum == 9
  ? console.log('sum is 9')
  : sum == 10
  ? console.log('sum is 10')
  : console.log('no sum');
