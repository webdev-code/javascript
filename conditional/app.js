//if , if-else , if-else-if
//switch
//equality operators (< , > , <= , >= , == , ===)
//logical operators ( || , && , ! )

const persons = ['bob', 'anna', 'john', 'gibberish'];

for (let i = 0; i < persons.length; i++) {
  //switch
  switch (persons[i]) {
    case 'bob':
      console.log('hey bob is a web developer');
      break;
    case 'anna':
      console.log('hey anna is a housewife ');
      break;
    case 'john':
      console.log('hey john how u doin');
      break;
    default:
      console.log('hey man you are not in the list');
  }
}

console.log('hahahahhaha');

//if-else , if-else-if
for (let i = 0; i < persons.length; i++) {
  //switch
  if (persons[i] == 'bob') {
    console.log('hey bob is a web developer');
  } else if (persons[i] == 'anna') {
    console.log('hey anna is a housewife ');
  } else if (persons[i] == 'john') {
    console.log('hey john how u doin');
  } else {
    console.log('hey man you are not in the list');
  }
}
