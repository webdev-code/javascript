const parentDiv = document.querySelector('#parent');

const heading = document.createElement('h1'); //createElement
const headingText = document.createTextNode('hellow World'); //createTextNode

heading.appendChild(headingText); //append headingText with heading
parentDiv.appendChild(heading); // append heading with parentdiv

const paragraph = document.createElement('p'); //createElement
//innerText
paragraph.innerText =
  'lorem sdldkjkfjshdv klksdjfhgjsn s liussdgf lsdiduufg  jdjhfg  usudyf  fkusydygf basausydfg fvasdf jdhfguashdf ,ahbfiufd  klsahdfgis f sdfhgsuhdf , sdjfgjs f';
parentDiv.prepend(paragraph);

const heading2 = document.createElement('h1');
heading2.textContent = 'hellow world again '; //textContent

parentDiv.insertBefore(heading2, heading);

const paragraph2 = document.createElement('p');
//innerHTML
paragraph2.innerHTML =
  '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quidem repudiandae nemo voluptatibus autem animi quaerat vitae est dolore illo iure veniam expedita, itaque perspiciatis odio! Quos iste impedit aliquam earum at quisquam in vel, ut nobis. Consequuntur nisi numquam enim impedit ex quod illo, aliquid quasi provident sapiente corrupti.</p>';

parentDiv.replaceChild(paragraph2, paragraph);

const heading3 = document.createElement('h3');
//innerHTML
heading3.innerHTML = '<h3>Newly Inserted Paragraph</h3>';

parentDiv.insertBefore(heading3, paragraph2);
