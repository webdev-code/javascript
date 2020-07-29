const container = document.querySelector('#container');
const btn = document.querySelector('#btn');

btn.addEventListener('click', function () {
  console.log('click on btn');
  const dynamicallyCreatedElement = document.createElement('h1');
  dynamicallyCreatedElement.textContent = 'Dynamically Created Heading';
  dynamicallyCreatedElement.classList.add('heading');
  container.appendChild(dynamicallyCreatedElement);
});

container.addEventListener('click', function (e) {
  console.log(e.target);
  console.log(e.currentTarget);

  if (e.target.classList.contains('heading')) {
    console.log('it works');
  }
});
