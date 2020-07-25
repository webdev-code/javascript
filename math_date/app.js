//math object properties and methods
// Standard built-in objects - always available

// const number = 4.56789;
// const result = Math.floor(number); //rounds off a decimal number to the lower whole number 4.56789 = 4

// const number = 4.12222;
// const result = Math.ceil(number); //rounds off a decimal number to the upper whole number 4.122222 = 5

// const number = 81;
// const result = Math.sqrt(number); //finds out the square root of a number sqrt of 81 = 9

// const result = Math.PI; // gives the value of pi 3.14
// const result = Math.min(4, 5, 6, 7, 9);
// const result = Math.max(4, 5, 6, 7, 9, 100, 200, 1000);

console.log(Math.random()); // generates a random number between 0 and 0.99999999999999
console.log(Math.ceil(Math.random() * 10)); // generates a random number between 1 and 10
console.log(Math.floor(Math.random() * 10 + 1)); // generates a random number between 1 and 10
console.log(Math.floor(Math.random() * 11)); // generates a random number between 0 and 10

//date object properties and methods
//

console.log('DATE OBJECT');
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturtday',
];

const date = new Date();
console.log(date);
// const date = new Date('1/12/2004'); // specefic date
const month = date.getMonth(); // gets indexes of months from 0 to 11 (jan to dec)
console.log(month);
console.log(months[month]);

const day = date.getDay(); // gets indexes of days from 0 to 6 (sun to mon)
console.log(day);
console.log(days[day]);

console.log(date.getDate());
console.log(date.getFullYear());

const sentence = `${days[day]}, ${date.getDate()} ${
  months[month]
} ${date.getFullYear()}`;

console.log(sentence);
