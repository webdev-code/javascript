const form = document.querySelector('#form');
const name = document.querySelector('#name');
const password = document.querySelector('#password');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  //   console.log(`the value of Name is :${name.value}`);
  //   console.log(`the value of Password is :${name.value}`);
  console.log(name.value);
  console.log(password.value);
});
