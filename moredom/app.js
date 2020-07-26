//text content
const gettext = document.querySelector('#text-content');
const text = gettext.textContent;
console.log(text);

//nodevalue
const gettext2 = document.querySelector('#text-content');
// const text2 = gettext.nodeValue; //gives null
const text2 = gettext2.firstChild.nodeValue; //gives text content of the element
console.log(text2);

// getAttribute();
// setAttribute();

const first = document.querySelector('#getattribute'); //selecting the element with id getattribute
const idValue = first.getAttribute('id'); //getting the value of the id attribute
console.log(idValue); //logging the value of id attribute to the console

const second = first.nextElementSibling; //selecting the next sibling for first
const idValue2 = second.getAttribute('class'); // getting the value of a non existant attribute
console.log(idValue2);

const second1 = first.nextElementSibling; //selecting the next sibling for first
const setValue = second1.setAttribute('class', 'red'); // setting the value of class attribute

const setValue2 = second1.getAttribute('class'); //getting the value of newly defined class attribute
console.log(setValue2);

//className
//  using className we can only get the names of the classes that are active for a certain element , or we can add a class / classes to an element
//classList
// add remove class / classes , get list of classes for an element

const para = document.querySelectorAll('p'); //selected para
// console.log(para);
//giving nice names to node list
const firstPara = para[0];
const secPara = para[1];
const thirdPara = para[2];

firstPara.className = 'nice'; //adding class nice to the first para

const paraClass = firstPara.className; // assigning the classes of first para to the paraclass variable
console.log(paraClass);

secPara.className = 'red nice'; //adding multiple classes using className

const paraClass2 = secPara.className; // assigning the classes of second para to the paraclass2 variable
console.log(paraClass2);

const paraClassList = secPara.classList; //assigning classes list of secpara to paraclasslist
console.log(paraClass2);

thirdPara.classList.add('red', 'nice'); //adding classes to the third para using classlist add method
console.log(thirdPara.classList.contains('red')); //checing if the third para contains red class //true
thirdPara.classList.remove('nice'); //removing class nice from the  third para using classlist remove method

const paraClass3 = thirdPara.classList; //checking the list of classes on the thirdPara
console.log(paraClass3);

//createElement
//createTextNode
//appendChild   //parent.appendChild('child') //appending textNode to the createElement element
//add any classes before appending to the parent element
// appendChild // add the element to the parent element

const dynamicContent = document.createElement('h1');
const dynamicText = document.createTextNode('This is A Dynamic Heading');
dynamicContent.classList.add('nice', 'red'); //class can be added to dynamic element NOT textnode
dynamicContent.appendChild(dynamicText);

const parentDiv = document.querySelector('#example');
parentDiv.appendChild(dynamicContent);

// insert before
const pDiv = document.querySelector('#practice'); //select the parent
const pheading = document.querySelector('#pheading'); //selecting the pheading (before whom we have to insert)
const dheading = document.createElement('h2'); //creating a new h2
const dheadingText = document.createTextNode('insert before pheading'); // creating textnode for h2
dheading.classList.add('red', 'nice');
dheading.appendChild(dheadingText); // appending text in h2

pDiv.insertBefore(dheading, pheading);
// parent.insertbefore(new Element , Old element)

// replace Child
const toBeReplaced = document.querySelector('#toBeReplaced'); // selecting the item which is about to be replaced
//creating a new element
const newElement = document.createElement('p');
const newelementText = document.createTextNode(
  'lorem lorem lprem askdbiashgjdkbasdb kasbdhka'
);
newElement.appendChild(newelementText);
newElement.classList.add('red');

//replacing newElement with toBeReplaced

pDiv.replaceChild(newElement, toBeReplaced);
// parent.replacehild(new Element , Old element)
