// prototypes
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
  return `Prototypes | Syntactic Sugar |${this.firstName} ${this.lastName} is ${this.age} years old , and ${this.heOrSHe} was born on ${this.dob}`;
};

const john = new Person('John', 'bradley', 34, '14 nov 1990', 'm');
console.log(john);
console.log(john.getSummary());
