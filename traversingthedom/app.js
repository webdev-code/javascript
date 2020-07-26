//childnode - children
// firstchild - lastchild - firstelementchild - lastelementchild

const parent = document.querySelector('#list');

const allchildren = parent.childNodes; //with whitespace
console.log(allchildren);

const realchildren = parent.children; //without whitespace
console.log(realchildren);

const firstkidwithspaces = parent.firstChild; //with whitespace
console.log(firstkidwithspaces);

const firstkidwithoutspaces = parent.firstElementChild; //without whitespace
console.log(firstkidwithoutspaces);

const lastkidwithspaces = parent.lastChild; //with whitespace
console.log(lastkidwithspaces);

const lastkidwithoutspaces = parent.lastElementChild; //without whitespace
console.log(lastkidwithoutspaces);

//parentElement

const kid = document.querySelector('#kid');
const kidParent = kid.parentElement;
// console.log(kidParent.parentElement.parentElement.parentElement); //gets null when has no parent
console.log(kidParent.parentElement.parentElement);

//next sibling - previous sibling
//with whitespaces

const kidNextSibling = kid.nextSibling;
console.log(kidNextSibling);

const kidPreviousSibling = kid.previousSibling;
console.log(kidPreviousSibling);

//next Element sibling - previous Element sibling
//withOut whitespaces

const kidNextSibling2 = kid.nextElementSibling;
console.log(kidNextSibling2);
console.log(kidNextSibling2.nextElementSibling); // can go further up and down
// console.log(kidNextSibling2.nextElementSibling.nextElementSibling); //gets null when there is no next sibling

const kidPreviousSibling2 = kid.previousElementSibling;
console.log(kidPreviousSibling2);
