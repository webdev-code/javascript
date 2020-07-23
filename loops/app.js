//do while loops
// while loops
// for loops

let money = -1;

do {
  console.log('defaulter');
  money++;
} while (money < 0);

console.log(money);

while (money == 0) {
  console.log('boooyaaaa zero money');
  money++;
}

console.log(money);

while (money > 0 && money < 11) {
  console.log(money);
  console.log('hulaalaa you have money');

  money++;
}

console.log(money);

const persons = ['bob', 'anna', 'john', 'peter', 'suzzi'];

for (let i = 0; i < persons.length; i++) {
  console.log('hey welcome here dear :' + persons[i]);
}
