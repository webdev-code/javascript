// addEventListener

const btn = document.querySelector('#btn');
const btn2 = document.querySelector('#btn2');

//anonymous function
btn.addEventListener('click', function (event) {
  btn.style.color = 'red';
  btn.innerHTML = '<h1>You clicked me</h1> ';
});

//function reference

function click2(e) {
  btn2.style.color = 'blue';
  btn2.innerHTML = '<h1>You clicked me 2</h1> ';
  e.preventDefault();
  console.log(e);
  console.log(e.type);
  console.log(e.currentTarget);
  console.log(e.target);
}
//function reference
btn2.addEventListener('click', click2);

//mouseEvents
btn.addEventListener('mousedown', function () {
  console.log('mousedown');
});

btn.addEventListener('mouseup', function () {
  console.log('mouseup');
});

btn.addEventListener('click', function () {
  console.log('mouse clicked');
});

btn.addEventListener('mouseenter', function () {
  console.log('mouseenter');
});
btn.addEventListener('mouseleave', function () {
  console.log('mouseleave');
});

//keyBoard / key events (not used so far)
// btn.addEventListener('keydown', function () {
//   console.log('keydown');
// });

// btn.addEventListener('keyup', function () {
//   console.log('keyup');
// });

// btn.addEventListener('keypress', function () {
//   console.log('keypressed');
// });
