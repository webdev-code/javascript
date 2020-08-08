const months = [
  'january',
  'feburary',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
];

const days = [
  'sunday',
  'monday',
  'tuesday',
  'wednessday',
  'thursday',
  'friday',
  'satureday',
];

let today_date, birthday, val;

const get_today_date = new Date(); //gives the current date and time (device based) / instance of Date Constructor

today_date = get_today_date;
today_date_s = get_today_date.toDateString();

console.log(get_today_date);
console.log(typeof get_today_date);

console.log(today_date);
console.log(typeof today_date);

console.log(today_date_s);
console.log(typeof today_date_s);

//creating an instance of Date while giving a date manually
//many different ways to set date manually | check documentation

birthday = new Date('1996-08-28 11:59:19:99'); //year-month-date hours:minutes:seconds:milliseconds
// birthday = new Date('August 28 1996');
console.log(birthday);

//getting different info from Date
val = birthday.getMonth(); ////numerical value of month | 0 based | 0-january to 11-december
console.log(val);

val = birthday.getDate(); //exact
console.log(val);

val = birthday.getDay(); //numerical value of day | 0 based | 0-sunday to 6-satureday
console.log(val);

val = birthday.getFullYear(); //exact
console.log(val);

val = birthday.getHours(); //exact
console.log(val);

val = birthday.getMinutes(); //exact
console.log(val);

val = birthday.getSeconds(); //exact
console.log(val);

val = birthday.getMilliseconds(); //exact
console.log(val);

val = birthday.getTime(); //amount of seconds passed since jan 1 1970
console.log(val);

today_date = today_date.getTime();
console.log(today_date);

//setting the Date
birthday.setMonth(11);
birthday.setDate(25);
birthday.setFullYear(1876);
let aaa = birthday.setHours(17);
console.log(aaa);
birthday.setMinutes(25);
birthday.setSeconds(45);
birthday.setMilliseconds(44);
console.log(birthday);
console.log(typeof birthday);
console.log(birthday.toString());
console.log(birthday.toDateString());

val = birthday.getTime();
console.log(val);

//using months and days array
const new_today = new Date();
let day = new_today.getDay();
let month = new_today.getMonth();

console.log(
  `numerical value of day is : ${day} , numerical value of month is ${month}`
);

console.log(`the day is ${days[day]} , and the month is ${months[month]}`);
