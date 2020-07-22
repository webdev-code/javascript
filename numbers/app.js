// numbers
//js loosely typed language

const num1 = 24;
const decimalNumber = 24.6699;

console.log(num1, decimalNumber);

let num2 = '23';
console.log(num2);

let num3 = 10;
let num4 = 20;

//basic math
const add = num3 + num4;
const sub = num3 - num4;
const mult = num3 * num4;
const div = num3 / num4;
const mod = num3 % num4;

console.log(add);
console.log(sub);
console.log(mult);
console.log(div);
console.log(mod);

// +=, -=, /=, *=, ++ , --,
console.log((num3 += 5));
console.log((num3 -= 5));
console.log((num3 /= 5));
console.log((num3 *= 5));
console.log(num3++);
console.log(num3--);

//NaN
const firstName = 'usama';
const lastName = 'mustafa';
const value = firstName - lastName;
console.log(value);

//implicit type conversionnum3
let number3 = 10;
let number4 = 23;
number4 = 'john';
const result2 = number3 + number4;
console.log(result2);
