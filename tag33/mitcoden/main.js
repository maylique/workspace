// * Date Object

const date = new Date()

console.log(date);
console.log(typeof date);

const date2 = new Date(2000, 1, 16)

console.log(date);

console.log(Date.now());

console.clear()

console.log(date.toString());

console.log(date.toUTCString());

console.log(date.toISOString());

// * toLocal-Methoden

console.log(date.toLocaleString('de', {dateStyle: 'full'}));

console.log(date.toLocaleDateString());


// * mit get-Methoden auf informationen zugreifen

console.log(date.getDate());

console.log(date.getFullYear());

console.log(date.getMonth());

console.log(date.getTime());

console.log(date.getHours(), date.getMinutes(), date.getSeconds());

console.log(date.getMilliseconds());


// ! Set Methoden

const date3 = new Date()
console.log(date3);

date3.setFullYear(2008)
console.log(date3);

date3.setMonth(10)
console.log(date3);

