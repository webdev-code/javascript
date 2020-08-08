// ES6 Classes

class Person {
  constructor(firstName, lastName, age, dob, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.dob = dob;
    this.gender = gender;
    this.heOrSHe;
  }
  heOrSHeF = function () {
    if (this.gender === 'm') {
      this.heOrSHe = 'he';
    } else if (this.gender === 'f') {
      this.heOrSHe = 'she';
    }
  };
  getSummary = function () {
    this.heOrSHeF();
    return `ES6 Classes / Syntactic Sugar | ${this.firstName} ${this.lastName} is ${this.age} years old , and ${this.heOrSHe} was born on ${this.dob}`;
  };
}
const john = new Person('John', 'bradley', 34, '14 nov 1990', 'm');
console.log(john);
console.log(john.getSummary());
