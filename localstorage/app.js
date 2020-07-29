// local Storage (untill browser is open) , Session Storage(untill tab is open)
// webstrage API - provided by browser

// setItem , getItem , removeItem , clear

localStorage.clear();

localStorage.setItem('name', 'usama'); //key , value pair
localStorage.setItem('age', 'Twenty-four');
localStorage.setItem('profession', 'Web Developer');
localStorage.setItem('City', 'Mianwali');

let name = localStorage.getItem('name');
console.log(name);
localStorage.removeItem('profession');

localStorage.clear();

sessionStorage.clear();

sessionStorage.setItem('name', 'usama'); //key , value pair
sessionStorage.setItem('age', 'Twenty-four');
sessionStorage.setItem('profession', 'Web Developer');
sessionStorage.setItem('City', 'Mianwali');

name = sessionStorage.getItem('name');
console.log(name);
sessionStorage.removeItem('profession');

// sessionStorage.clear();

// JSON.stringify() , JSON.parse()
// local storage with multiple values (arrays)

localStorage.clear();

const friends = ['peter', 'john', 'susy'];

localStorage.setItem('my_friends', JSON.stringify(friends));

const friendsR = JSON.parse(localStorage.getItem('my_friends'));
console.log(friendsR);

console.log(friendsR[0]);
