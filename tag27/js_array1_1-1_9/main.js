
// 1_1 

const person = ['korall', 'und so']
const friends = ['Walter Frosch', 'Peter Zwegert']
const favoriteFood = ['schwedischer Pfannkuchen', 'Dönerpizza mit Hollandaise']

console.log(person, friends, favoriteFood);

// 1_2

console.log(person[0]);
console.log(person[1]);
console.log(friends[0]);
console.log(friends[1]);
console.log(favoriteFood[0]);
console.log(favoriteFood[1]);

// 1_3

console.log(person.length);
console.log(friends.length);
console.log(favoriteFood.length);

// 1_4

person.push('arbeite in der Krossen Krabbe', 'verfeindet mit dem Abfalleimer')
console.log(person);

// 1_5

let newPerson = person.pop()
console.log(newPerson);
console.log(person);

// 1_6

let shiftPerson = person.shift()
console.log(shiftPerson);
person.shift()

// 1_7

friends.unshift('Jesus', 'Judas')
console.log(friends);
favoriteFood.unshift('Kartoffelgratin', 'Brownies')
console.log(favoriteFood);

// 1_9

const einsNeun = [23, 54, 75]
console.log(einsNeun);
einsNeun.push(1, 2, 3, 4, 5)
einsNeun.unshift(10, 11, 12, 13, 14)
console.log(einsNeun);
einsNeun.pop()
einsNeun.pop()
einsNeun.shift()
einsNeun.shift()
console.log(einsNeun);
