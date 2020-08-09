// Inheritance

//person constructor
const Person = function (firstName, lastName, age, dob, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.dob = dob;
  this.gender = gender;
  this.heOrSHe;
};

Person.prototype.heOrSHeF = function () {
  if (this.gender === 'm') {
    this.heOrSHe = 'he';
  } else if (this.gender === 'f') {
    this.heOrSHe = 'she';
  }
};

Person.prototype.getSummary = function () {
  this.heOrSHeF();
  return `Inheritance | ${this.firstName} ${this.lastName} is ${this.age} years old , and ${this.heOrSHe} was born on ${this.dob}`;
};

Person.prototype.programesIn = function () {
  return `${this.firstName} ${this.lastName} programmes in ${this.language} and has an experience of ${this.years} years`;
};

//Programmer Constructor
const Programmer = function (
  firstName,
  lastName,
  age,
  dob,
  gender,
  language,
  years
) {
  //inheriting the properties of Person
  Person.call(this, firstName, lastName, age, dob, gender); //this means the programmer itself(current instance of Programmer)

  this.language = language;
  this.years = years;
};

//inheriting the Prototype
// this will inherit all the prototypes of person
Programmer.prototype = Object.create(Person.prototype);

//changes the constructor name to Programmer instead of Person
Programmer.prototype.constructor = Programmer;

//instance of Programmer Constructor
const larry = new Programmer(
  'larry',
  'kelly',
  24,
  '18 aug 1997',
  'm',
  'javascript',
  'three'
);

console.log(larry);
console.log(Object.values(larry));
console.log(Object.keys(larry));
console.log(larry.getSummary());
console.log(larry.programesIn());
