//variables
// var let const    //scope //asigning value
//
// naming rules
// naming convention camelCase
//strings ,string concatination, quotation marks , backticks and template strings

const firstName = 'usama';

//var
var secondName;
secondName = 'mustafa';
//let
let zipCode, city, country;
zipCode = '42200';
city = 'mianwali';
country = 'pakistan';
const fullName = firstName + ' ' + secondName;

// console.log('hello there your full name is : ' + firstName + ' ' + secondName);
console.log('hello there your full name is : ' + fullName);

console.log(firstName);
console.log(secondName);
console.log(zipCode, city, country);

// url using string concatination
const website = 'google';
const url = 'https://' + website + '.com';

console.log(url);
