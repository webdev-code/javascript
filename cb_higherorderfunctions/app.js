//function expression // call back function
const sum = function (a = 1, b = 1) {
  return a + b;
};

// heigher order function
// passing callback function cb but not invoking it
function add(cb, string) {
  //   console.log(`${(string, cb())}`);
  return `${(string, cb())}`; // calling the call back function
}

const message = 'the sum is : ';

const answer = add(sum, message); // calling higher order function passing sum callback function and another argument
console.log(answer);
