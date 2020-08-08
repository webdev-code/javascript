//Objects in JS

const john = {
  firstName: 'John',
  lastName: 'Bradly',
  age: 30,
  dob: '13 aug 1995',
  gender: 'f',
  heOrShe: 'she',

  heOrSHeF: function () {
    if (this.gender === 'm') {
      this.heOrSHe = 'he';
    } else if (this.gender === 'f') {
      this.heOrSHe = 'she';
    }
  },

  getSummary: function () {
    this.heOrSHeF();
    return `Objects | ${this.firstName} ${this.lastName} is ${this.age} years old , and ${this.heOrSHe} was born on ${this.dob}`;
  },
};

console.log(john);
john.gender = 'm';
console.log(john.getSummary());
