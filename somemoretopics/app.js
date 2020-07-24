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
