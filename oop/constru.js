// constructors

const Person = function (firstName, lastName, age, dob, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.dob = dob;
  this.gender = gender;
  this.heOrSHe;

  this.heOrSHeF = function () {
    if (gender === 'm') {
      this.heOrSHe = 'he';
    } else if (gender === 'f') {
      this.heOrSHe = 'she';
    }
  };

  this.getSummary = function () {
    this.heOrSHeF();
    return `Constructor Function | Syntactic Sugar |${this.firstName} ${this.lastName} is ${this.age} years old , and ${this.heOrSHe} was born on ${this.dob}`;
  };
};

const john = new Person('John', 'bradley', 34, '14 nov 1990', 'm');
console.log(john);
console.log(john.getSummary());
