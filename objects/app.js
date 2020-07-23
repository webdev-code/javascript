// objects

const person = {
  name: 'mr john',
  age: 34,
  married: false,
  education: true,
  siblings: ['anna', 'joseph', 'peter'],
  greetings: function (name) {
    return 'Hey there mr ' + name + ' how are you doing today';
  },
};

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.married);
console.log(person.education);
console.log(person.siblings);
console.log(person.siblings[1]);
console.log(person.greetings(person.siblings[0]));
