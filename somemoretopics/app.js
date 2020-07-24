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
let num1 = 10;
let num2 = 5;
let sum = num1 + num2; //adding null and a number is equal to 0 (null) + 5 = 5

sum ? console.log('Truthy value') : console.log('falsey value'); // if else

sum == 9
  ? console.log('sum is 9')
  : sum == 10
  ? console.log('sum is 10')
  : console.log('no sum');

//   local Scope , global scope , function in function (scope) / variable lookup

//  parent functions have no access to children functions or their variables
//  children functions have full access to parent functions and their variables

function sayHello(name) {
  console.log(`hello ${name}`);
}

function subtraction(x, y) {
  const z = x - y;
  console.log(z);
  //   console.log(result); variable result has a local scope of multiply function only
  //function within the function
  function multiply() {
    const result = z * 2;
    console.log(result); // variables outside can be accessed here
    sayHello('johny'); // functions outside can be accessed here
  }
  multiply(); // this function has a scope inside the subtraction function only cannot be called outside subtraction()
}

// function subtraction() {
//   const z = num1 - num2; //num1 and num2 have global scope and can be used/accessed any where in the code
//   console.log(z);
//   globalNumber = 099; //a variable without type in the function can be accessed outside of that function (global scope)

// }

// console.log(z); z has local scope and can be used/accessed in the function subtraction only
subtraction(num1, num2);
// console.log(globalNumber);
