// String Number Boolean

const string = 'ich bin ein string<'
const number = 245
const boolean = true

// Array

let team = ['Alex', 'John', 'Kim', 'Jimmy', 'Tommy']
console.log(team);

let player1 = 'Alex'
let palyer2 = 'John'
let player3 = 'Kim'

let teamArr = [player1, palyer2, player3]
console.log(teamArr);

// index
// So können wir auf einzelne ELemente zugreifen, indem wir eine Zahl in eine echkige Klammer packen

console.log(team[1]); // John
console.log(team[4]); // Tommy

// indexOf()
// sucht in eineem Array nach den Suchwort und gibt uns den Index zurück

console.log(team.indexOf('John')); // 1
console.log(team.indexOf('Jimmy')); // 3

team[0] = 'Julia'
team[2] = 'Daniel'

console.log(team);

// dynamisch

console.log(team.indexOf('Julia')); // index = 0

team[team.indexOf('Julia')] = 'Nina'

console.log(team);

const searchUser = () => {
    let user = document.querySelector('#user').value
    let newUser = document.querySelector('#newUser').value

    let userIndex = team.indexOf(user)

    if(team.includes(team.indexOf(user))){
        team[userIndex] = newUser
        console.log(user);
        console.log(team);
    } else {
        console.log('user wurde nicht gefunden');
    }

    console.log(team);
}

// length
console.log(team.length); // 5

// good to know gibt immer dsa letze kind aus
console.log(team[team.length -1]);

let mitarbeiter = ['Jimmy', 'Johanna', 'Christian', 'Jannik', 'Steffen']
console.log(mitarbeiter);

// pop()
// Entfert das letzte element in einem array, und man kann den wert in einer variable speichern
console.log('%c ------pop---------,', 'color: red');

let popMitarbeiter = mitarbeiter.pop()
console.log(popMitarbeiter);

console.log(mitarbeiter);

console.log('%c --------shift------.', 'color: red');
// shift()
//entfernt das erste element in einem array,  und man kann den wert in einer variable speichern

let shiftMitarbeiter = mitarbeiter.shift()
console.log(shiftMitarbeiter);

console.log(mitarbeiter);


console.log('%c -----push-------', 'color: red');
// push()
// fügt an der letzten stelle ein element hinzu und gibt uns die neue länge vom array

let pushMitarbeiter = mitarbeiter.push('Lisa')
console.log(pushMitarbeiter);
console.log(mitarbeiter);


console.log('%c -----unshift-------', 'color: red');
//unshift()
// fügt an der ersten stelle ein element hinzu und gibt die neue länge vom array zurück

let unshiftMitarbeiter = mitarbeiter.unshift('Timo')
console.log(unshiftMitarbeiter);
console.log(mitarbeiter);


console.log('%c -----join-------', 'color: red');
// join()
// mit join können wir ein array zu einem string umwandeln

let heros = ['Batman', 'Joker', 'Ironman', 'Thor', 'Professor X']
console.log(heros);

console.log(heros.join(' '));

const ul = document.querySelector('ul')
ul.innerHTML = '<li>' + heros.join('</li><li>') + '</li>'


console.log('%c -----filter-------', 'color: red');
// filter
// damit kann man sachen rausfiltern

const numbers = [1, 2 ,3, 4, 5]

const evenNumber = number.filter(num => num % 2 === 0)
console.log(evenNumber);

const batman = heros.filter(char => char === 'Batman')
console.log(batman);


const getSpieler = () => {
    const spieler = document.querySelector('#spieler').value
    const result = heros.filter(character => character === spieler).join('')
    console.log(result);
    if(result){
        console.log(result);
    } else {
        console.log('Spieler not found');
    }
}

