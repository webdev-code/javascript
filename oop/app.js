//objects

const john = {
  firstName: 'john',
  lastName: 'Ziegler',
  age: 30,
  dob: '4 september 1992',
  getSummary: function () {
    console.log(
      `${this.firstName} ${this.lastName} is ${this.age} years old and he was born on ${this.dob}`
    );
  },
};

console.log(john);
console.log(john.age);
john.getSummary();

//constructor
function Person(firstName, lastName, age, dob, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = dob;
  this.age = age;
  this.gender = gender;
  this.heOrShe;

  this.heOrSheF = function () {
    if (this.gender === 'f') {
      this.heOrShe = 'she';
    } else if (this.gender === 'm') {
      this.heOrShe = 'he';
    } else {
      console.log('somethingwrong');
    }
  };

  this.getPersonSummary = function () {
    this.heOrSheF();
    return `${this.firstName} ${this.lastName} is ${this.age} years old and ${this.heOrShe} was born on ${this.dob}`;
  };
}

//prototype in constructor

function Person(firstName, lastName, age, dob, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = dob;
  this.age = age;
  this.gender = gender;
  this.heOrShe;
}

Person.prototype.heOrSheF = function () {
  if (this.gender === 'f') {
    this.heOrShe = 'she';
  } else if (this.gender === 'm') {
    this.heOrShe = 'he';
  } else {
    console.log('somethingwrong');
  }
};

Person.prototype.getPersonSummary = function () {
  this.heOrSheF();
  return `${this.firstName} ${this.lastName} is ${this.age} years old and ${this.heOrShe} was born on ${this.dob}`;
};

// ES6 Classes | Syntactic Sugar

class PersonC {
  constructor(firstName, lastName, age, dob, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    this.age = age;
    this.gender = gender;
    this.heOrShe;
  }

  getPersonSummary = function () {
    this.heOrSheF();
    return `${this.firstName} ${this.lastName} is ${this.age} years old and ${this.heOrShe} was born on ${this.dob}`;
  };
  heOrSheF = function () {
    if (this.gender === 'f') {
      this.heOrShe = 'she';
    } else if (this.gender === 'm') {
      this.heOrShe = 'he';
    } else {
      console.log('somethingwrong');
    }
  };
}

const marry = new PersonC('Marry', 'Angela', 28, '19 october 1998', 'f');
const mark = new PersonC('Mark', 'Selby', 33, '17 november 1988', 'm');
console.log(marry.getPersonSummary());
console.log(mark.getPersonSummary());
