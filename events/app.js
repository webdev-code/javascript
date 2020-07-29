// addEventListener

const btn = document.querySelector('#btn');
const btn2 = document.querySelector('#btn2');
const userInput = document.querySelector('#userInput');

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
  console.log(e.currentTarget); //curretntarget// parentmost element
  console.log(e.target); //target// childmost element
}
//function reference
btn2.addEventListener('click', click2);

//mouseEvents
// mosedown => mouseup => mouseclicked

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
// keydown => keypressed => keyup

userInput.addEventListener('keypress', function () {
  console.log('keypressed');
  console.log(userInput.value);
});
userInput.addEventListener('keyup', function () {
  console.log('keyup');
});
userInput.addEventListener('keydown', function () {
  console.log('keydown');
});

// currenttarget and target
// whole point of currentTarget and target is to select the element using currentTarget and target property of the event object
// currentTarget : the whole element on which the eventlistener is applied // parentmost element
// target : only that element on which event has been trigerred // childmost element

// applying styles on multiple instances of the same class
const dbtn = document.querySelectorAll('.dbtn');

dbtn.forEach(function (dbtn) {
  dbtn.addEventListener('click', function (e) {
    // e.currentTarget.style.color = 'blue';
    // console.log(e.currentTarget);

    e.target.style.color = 'magenta';
    console.log(e.target);
  });
});
//selecting dynamically generated content using e.target

const DCdiv = document.querySelector('#DCdiv');

const dynamicallyCreatedElement = document.createElement('h6');

function DCE() {
  dynamicallyCreatedElement.innerHTML =
    '<h6>Selecting and applying addEventListener on Dynamically Created Element Using event.target(event bubbling and propagation)</h6>';
  dynamicallyCreatedElement.classList.add('DCheading', 'fontsize');
  DCdiv.prepend(dynamicallyCreatedElement);
}

const DCbutton = document.querySelector('#DCbutton');
DCbutton.addEventListener('click', DCE);

DCdiv.addEventListener('click', function (e) {
  if (e.target.classList.contains('heading')) {
    console.log('it works');
  }
});
