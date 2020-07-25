const persons = [
  {
    id: 1,
    name: 'jon',
    age: 30,
    job: 'developer ',
    married: true,
    salary: 100,
  },
  {
    id: 2,
    name: 'joe',
    age: 33,
    job: 'designer ',
    married: false,
    salary: 100,
  },
  { id: 3, name: 'bea', age: 34, job: 'boss', married: true, salary: 100 },
  {
    id: 4,
    name: 'abe',
    age: 31,
    job: 'customer ',
    married: false,
    salary: 100,
  },
  { id: 5, name: 'dab', age: 23, job: 'business ', married: true, salary: 100 },
  { id: 6, name: 'dab', job: 'business ', married: true, salary: 100 },
];
//foreach

//foreach with function expression

//call back function
// const getID = function (person) {
//   console.log(person.id);
// };

// persons.forEach(getID);

//foreach with anonymous function
persons.forEach(function (person) {
  console.log(person.id);
});

//for each doesnot make a new array
// for each returns undefined
// const newPeople = persons.forEach(function (person) {
//   return person.name;
// });
// console.log(newPeople);

//map
//used to pull out some info from the array and make a new array with that info
//map creates a new array of the size of the array on which map is applied

const names = persons.map(function (person) {
  return person.name;
});
console.log(names);

const ages = persons.map(function (person) {
  return person.age;
});
console.log(ages);

//filter
//creates a new array of the elements which match a certain condition
//filter creates a new array but not dependant on the size of origional array

const ageAbove30 = persons.filter(function (person) {
  //   return true;   //returns the complete object with matched condition //copies the whole persons array to ageAbove30
  //   return person.age; // copies only the objects with the property of age
  return person.age > 30;
});
console.log(ageAbove30);

//find
// used to return unique values
// returns a single object

const boss = persons.find(function (person) {
  return person.job === 'boss';
});

console.log(boss);

//reduce
//reduces to the single value
// acc , curr
// acc holds the result
// curr holds an element of the array just like person in above methods

const totalSalary = persons.reduce(function (acc, curr) {
  acc += curr.salary;
  return acc;
}, 0);
console.log(totalSalary);

const totalAge = persons.reduce(function (acc, curr) {
  console.log(`the age is ${curr.age}`);
  acc += curr.age;
  return acc;
}, 0);

console.log(totalAge);
