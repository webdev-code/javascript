//arrays , 0 index based , accessing and modifuing array elements using index

const friends = ['john', 'barry', 'jonas', 'anna', 45, null, undefined];

console.log(friends);

let bestfriend = 'fourtyfive';
friends[4] = bestfriend;

console.log(friends);

let secondBestFriend = friends[1];
friends[4] = 'anna';
console.log(friends);
console.log(friends[4]);

console.log(secondBestFriend);

console.log(friends[3]);
