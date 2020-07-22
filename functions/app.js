// function declarations

//declaring the function
function greetings() {
  console.log('Hello to the John');
  console.log('Hello to the jesse');
  console.log('Hello to the mike');
  console.log('Hello to the barry');
}

//calling the function
greetings();
//some code
greetings();
//some code
greetings();

//parameters , arguments

const num1 = 54;
const num2 = 45;

//function with parameters
//return
function sum(x, y) {
  // console.log(x + y);
  return x + y;
  console.log(x + y); //not run because of return
}

//passing the arguments
console.log(sum(num1, num2));
const ans = sum(num1, num2);
console.log(ans);
console.log('the sum of two numbers is :' + sum(num1, num2));

//function expressions
// const subt = function sub(x, y) {
//   return x - y;
// };
const subt = function (x, y) {
  return x - y;
};

const subtraction = subt(num1, num2);
console.log(subtraction);
