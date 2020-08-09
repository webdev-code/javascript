// ES6 Classes

class Person {
  //constructor with parameters
  constructor(firstName, lastName, age, dob, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.dob = dob;
    this.gender = gender;
  }

  //methods

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

//subclass Programmer

class Programmer extends Person {
  //constructor with parameters of parent(person) and own too
  constructor(firstName, lastName, age, dob, gender, language, years) {
    //in order to call parent constructor we use super method
    //super function with parameters of the parent (person)
    super(firstName, lastName, age, dob, gender);
    this.language = language;
    this.years = years;
  }
  programesIn = function () {
    return `${this.firstName} ${this.lastName} is a ${this.language} Developer , and ${this.heOrSHe} has an experience of  ${this.years} years`;
  };
}

//instance of Programmer
const joe = new Programmer(
  'Joe',
  'Doe',
  23,
  '13 aug 1990',
  'm',
  'Javascript',
  'three'
);

console.log(joe);
console.log(joe.getSummary());
console.log(joe.programesIn());
