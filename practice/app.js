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

//Total
