// Array methods and for loop
// full name
const names = [
  'anna',
  'susy',
  'bob',
  'bob',
  'bob',
  'bob',
  'bob',
  'bob',
  'bob',
  'bob',
];
const lastName = ['shakeandbake', 'potato', 'onion', 'onion', 'onion'];
let newArray = [];
let j;

//for loop

if (names.length <= length.lastName) {
  j = names.length;
} else if (lastName.length <= names.length) {
  j = lastName.length;
}

for (let i = 0; i < j; i++) {
  // console.log(i);
  console.log(names[i]);
  console.log(lastName[i]);

  //using tempelate literals
  const fullName = `${names[i]} ${lastName[i]}`;
  //   using string concat method
  //   const fullName = names[i].concat(' hello ').concat(lastName[i]);
  newArray.push(fullName);
}

console.log(names);
console.log(newArray);

//Total of an array

const gas = [109, 204, 33, 46];
const food = [87, 78, 99, 277, 44, 336, 99];
function totalOfAnArray(arr) {
  let total = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(total);
    total += arr[i];
  }
  if (total > 400) {
    console.log('too much babe');
  } else {
    console.log('keep going');
  }
  return total;
}
console.log(`the total is: ${totalOfAnArray(gas)}`);
console.log(`the total is: ${totalOfAnArray(food)}`);
console.log(`the total is: ${totalOfAnArray([99, 11, 90, 90, 110, 1])}`);
